import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='headerHr'></div>
      <section className='header'>
        <div className='headerTopContent'>
          <h1 className='headerLogo'>ards.dev</h1>
          <p>serviços</p>
        </div>

        <div className='headerCenterDiv'>
          <h1>front-end. web(developer)_</h1>
        </div>

        <div className='headerNavBar'>
          <p><a>Home</a></p>
          <p><a>cases</a></p>
          <p><a>projects</a></p>
          <p><a>aboute me</a></p>
          <p><a>contact</a></p>
        </div>

        <div className='modeToggle'>
          <p>light mode</p>
        </div>

      </section>

      <section className='cases'>

      </section>
      <section className='projects'>

      </section>
      <section className='about'>

      </section>
      <section className='contact'>

      </section>
      <section className='footer'>

      </section>
    </div>
  );
}

export default App;
