import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Events from './components/Events';
import Classes from './components/Classes';
import Media from './components/Media';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <div id="/"><Home /></div>
              <div id="about"><About /></div>
              <div id="events"><Events /></div>
              <div id="classes"><Classes /></div>
            </>
          } />
          <Route path="/media" element={<Media />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;