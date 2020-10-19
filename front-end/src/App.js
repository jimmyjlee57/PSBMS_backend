//@flow
import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar.js';
import Sample from './Components/sample.js';

function App() {
  return (
    <div className="bg">
      <Sidebar/>
      <Sample/>
  </div>
  );
}

export default App;
