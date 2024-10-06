import axios from 'axios';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Timeline from './components/Timeline';
import Timeline2 from './components/Timeline2';
import ButtonPage from './components/ButtonPage';

//data will be the string we send from our server
const apiCall = () => {
  axios.get('http://localhost:8080').then((data) => {
    //this console.log will be in our frontend console
    console.log(data)
  })
}

function App() {
  const years = [1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833]
  const [index, setIndex] = useState(0);

  const handleIndexChange = (newIndex) => {
    setIndex(newIndex);

  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline index = {index} onChange={handleIndexChange} years={years} />} />
          <Route path="/timeline2" element={<Timeline2 />} />
          <Route path="/button" element={<ButtonPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
