// src/components/ButtonPage.js
import React from 'react';
import axios from 'axios';

function ButtonPage() {
  const apiCall = () => {
    axios.get('http://localhost:8080').then((data) => {
      //this console.log will be in our frontend console
      console.log(data)
    })
  };

  return (
    <div>
      <h2>API Call Button</h2>
      <button onClick={apiCall}>Make API Call</button>
    </div>
  );
}

export default ButtonPage;