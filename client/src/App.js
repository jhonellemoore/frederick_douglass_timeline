import axios from 'axios';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Timeline from './components/Timeline';
//data will be the string we send from our server
const apiCall = () => {
  axios.get('http://localhost:8080').then((data) => {
    //this console.log will be in our frontend console
    console.log(data)
  })
}

function App() {
  const years = [1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835]
  const [index, setIndex] = useState(0);
  const [timelineInfo, setTimelineInfo] = useState({});

  const handleIndexChange = async (newIndex) => {
    setIndex(newIndex);

    const date = `${years[newIndex]}`; 
    try {
      console.log(date)
      const response = await fetch(`http://localhost:8080/api/timeline/${date}`);
      console.log(response)
      const data = await response.json();
      console.log(`Fetching data for debugging: ${data}`);
      setTimelineInfo(data);
      console.log(timelineInfo)
    } catch (error) {
      console.error("Error fetching timeline data:", error);
    }
  };

  const fetchHomeData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/home`);
      console.log(response)
      const data = await response.json();
      console.log(`Fetching data for debugging: ${data}`);

    } catch (error) {
      console.error("Error fetching homepage data:", error);
    }
  };


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline index = {index} onChange={handleIndexChange} years={years} timelineInfo={timelineInfo}/>} />
          <Route path="/home" element={<Home />} />
          <Route
          path="/home"
          element={
            <div>
              <h1>Home Page</h1>
              <a href="/index2.html">Go to Home.html</a>
            </div>
          }
        />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
