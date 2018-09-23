import React, { Component } from 'react';
import './MainSection.css';

class MainSection extends Component {
  
  render() {
    return (
      <div className="main-section">
        <div className="main-row">
          <div className="nav-circle-left">
            <div className="nav-left">
              <p className="nav-text">Web Projects</p>
            </div>
          </div>
          <div className="my-info">
            <h1>Zach Evans</h1>
            <h2>Web & Mobile Developer</h2>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/zach-t-evans/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true"/>
              </a>
              <a href="https://github.com/ZEvans1" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true"/>
              </a>
            </div>
          </div>
          <div className="nav-circle-right">
            <div className="nav-right">  
              <p className="nav-text">Mobile Projects</p>
            </div>  
          </div>
        </div>
        <div className="nav-circle-bottom">
          <div className="nav-bottom"></div>
          <p>Contact</p>
        </div>
      </div>
    );
  }
}

export default MainSection;