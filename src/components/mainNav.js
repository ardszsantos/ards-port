import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function MainNav() {
  return (
    <div className="App">
      <div className='headerHr'></div>
      <section className='header'>
        <div className='headerTopContent'>
          <h1 className='headerLogo'>ards.dev</h1>
          <p>serviços</p>
        </div>
        <div className='headerNavBar'>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/cases">Cases</Link></p>
          <p><Link to="/projects">Projects</Link></p>
          <p><Link to="/about-me">About Me</Link></p>
          <p><Link to="/contact">Contact</Link></p>
        </div>

        <div className='modeToggle'>
          <p>light mode</p>
        </div>
      </section>
    </div>
  );
}

export default MainNav;
