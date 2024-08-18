import '../App.css'
import MainNav from '../components/mainNav';


function Home() {
  return (
    <div className="App">
      <MainNav/>
      <section className='header'>
        {/* Centered Text */}
        <div className='headerCenterWrapper'>
          <div className='headerCenterDiv'>
            <h1>front-end. web(developer)_</h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
