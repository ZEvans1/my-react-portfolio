import React, { Component } from 'react';
import './MainSection.css';

class MainSection extends Component {
  
  render() {
    return (
      <div className="main-section">
        <div className="my-info">
          
          <h1>Zach Evans</h1>
          <h2>Fullstack & Mobile Developer</h2>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/zach-t-evans/" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true"/>
            </a>
            <a href="https://github.com/ZEvans1" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github-square" aria-hidden="true"/>
            </a>
            {/* <a href="https://www.freecodecamp.org/zachevans" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-free-code-camp" aria-hidden="true"/>
            </a> */}
          </div>
        </div>
      </div>
    );
  }
}

export default MainSection;