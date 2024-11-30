import axios from 'axios';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Timeline from './components/Timeline';
import TimelineMarkers from './components/TimelineMarkers';
//data will be the string we send from our server
const apiCall = () => {
  axios.get('http://localhost:8080').then((data) => {
    console.log(data)
  })
}

function App() {
  const years = [1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835]
  const [index, setIndex] = useState(0);
  const [fredInfo, setFredInfo] = useState({}); 
  const [events, setEvents] = useState({})
  const n = years.length;

  const handleIndexChange = async (newIndex) => {
    setIndex(newIndex);

    const date = `${years[newIndex]}`; 
    try {
      console.log(date)

      const [fred_date_info, events] = await Promise.all([
        fetch(`http://localhost:8080/api/timeline/${date}`),
        fetch(`http://localhost:8080/api/timeline/events/${date}`)
      ]);
      const data = await fred_date_info.json();
      const events_data = await events.json();
      
      setFredInfo(data[0]);
      setEvents(events_data);
      console.log(events_data)
      console.log(data[0])
    } catch (error) {
      console.error("Error fetching timeline data:", error);
    }
  };
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline index = {index} onChange={handleIndexChange} years={years} fredInfo={fredInfo} events={events} n ={n}/>} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
