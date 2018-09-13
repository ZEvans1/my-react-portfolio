import React, { Component } from 'react';
import MainSection from './Components/Landing/MainSection';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="app-main">
        <div className="test-class">
          <MainSection/>
        </div>
      </div>
    );
  }
}

export default App;
