import axios from 'axios';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Timeline from './components/Timeline';
import ButtonPage from './components/ButtonPage';

//data will be the string we send from our server
const apiCall = () => {
  axios.get('http://localhost:8080').then((data) => {
    //this console.log will be in our frontend console
    console.log(data)
  })
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <ApiButton onClick={apiCall} />
//       </header>
//     </div>
//   );
// }
function App() {
  const years = [1818, 1824, 1826, 1831, 1833]
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
          <Route path="/button" element={<ButtonPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
