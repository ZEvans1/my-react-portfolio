import React, { Component } from 'react';
import LandingPage from './Components/LandingPage/LandingPage';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="main-section">
        <div className="top-bar">
            <p>My portfolio</p>
            <p>about</p>
            <p>portfolio</p>
        </div>
        <LandingPage/>
      </div>
    );
  }
}

export default App;
