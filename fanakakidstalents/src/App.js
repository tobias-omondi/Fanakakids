import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Classes from './components/Classes';
import Feedback from './components/Feedback';

function App() {
  return (
    <div className="App">
     <Navbar />
      <div id="about"><About /></div>
      <div id="classes"> <Classes /></div>
      <div id="feedback"><Feedback /></div>
    </div>
  );
}

export default App;