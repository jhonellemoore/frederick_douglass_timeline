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
  const [timelineInfo, setTimelineInfo] = useState("While at the Auld household, Frederick encountered a pivotal influence in his life—Sophia Auld, Hugh’s wife. Initially, she began teaching him the alphabet and basic reading skills. However, when her husband discovered this, he rebuked her, asserting that educating enslaved people would make them unfit for bondage. This incident had a profound impact on Frederick. Although Sophia stopped her lessons, the seed was planted, and he realized that literacy was the key to freedom. termined to learn despite the restrictions, Frederick began to teach himself to read. He befriended local white boys on Philpot Street, such as Gustavus Dorgan, Joseph Bailey, Charles Farity, and William Cosdry, often outsmarting and tricking them into teaching him new words. He used every opportunity to advance his knowledge, sometimes exchanging bread for reading lessons. These small acts of defiance became the foundation of his education.uring this time, Frederick managed to obtain a copy of The Columbian Orator, a popula");

  const handleIndexChange = async (newIndex) => {
    setIndex(newIndex);

    const date = `${years[newIndex]}`; // Construct date
    try {
      console.log(date)
      const response = await fetch(`http://localhost:8080/api/timeline/${date}`);
      console.log(response)
      const data = await response.json();
      console.log(`Fetching data for debugging: ${data}`);
      setTimelineInfo(data);
    } catch (error) {
      console.error("Error fetching timeline data:", error);
    }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline index = {index} onChange={handleIndexChange} years={years} timelineInfo={timelineInfo}/>} />
          <Route path="/timeline2" element={<Timeline2 />} />
          <Route path="/button" element={<ButtonPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
