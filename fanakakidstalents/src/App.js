import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Feedback from './components/Feedback';
import Events from './components/Events';
import Classes from './components/Classes';

function App() {
  return (
    <div className="App">
     <Navbar />
      <div id="about"><About /></div>
      <div id="events"><Events /></div>
      <div id="classes"> <Classes /></div>
      <div id="feedback"><Feedback /></div>
    </div>
  );
}

export default App;