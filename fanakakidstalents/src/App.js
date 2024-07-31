import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Feedback from './components/Feedback';
import Events from './components/Events';
import Classes from './components/Classes';
import Media from './components/Media';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <div id="about"><About /></div>
              <div id="events"><Events /></div>
              <div id="classes"> <Classes /></div>
              <div id="feedback"><Feedback /></div>
            </>
          } />
          <Route path="gallery" element={<Media />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
