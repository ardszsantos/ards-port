import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import '../styles/App.css';

function MainNav() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="App">
      <div className='headerHr'></div>
      <section className='header'>
        <div className='headerTopContent'>
          <h1 className='headerLogo'>ards.dev</h1>
          
          {/* Hamburger only shows on small screens */}
          <div className="hamburger-menu">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>

        {/* Navbar always visible on larger screens, toggled on smaller screens */}
        <div className={`headerNavBar ${isOpen ? 'show' : ''}`}>
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
