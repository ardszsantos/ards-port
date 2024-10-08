import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import '../styles/App.css';

function MainNav({ setDarkMode, darkMode }) {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    if (typeof setDarkMode === 'function') {
      setDarkMode((prevMode) => !prevMode);
    } else {
      console.error('setDarkMode is not a function');
    }
  };

  return (
    <div className="App">
      <div className='headerHr'></div>
      <section className='header'>
        <div className='headerTopContent'>
          <div className='headerTopContentBetween'>
            <h1 className='headerLogo'>ards.dev</h1>
            <div className='modeToggle' onClick={handleToggle}>
              <p>{darkMode ? 'Light Mode' : 'Dark Mode'}</p>
            </div>
          </div>
          <div className="hamburger-menu">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>

        <div className={`headerNavBar ${isOpen ? 'show' : ''}`}>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/projects">Projects</Link></p>
          <p><Link to="/about-me">About Me</Link></p>
          <p><Link to="/contact">Contact</Link></p>
        </div>

        {/* Theme Toggle */}

      </section>

    </div>
  );
}

export default MainNav;
