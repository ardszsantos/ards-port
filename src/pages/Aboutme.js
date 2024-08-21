import React, { useContext } from 'react';
import '../styles/about.css'
import { DarkModeContext } from '../hooks/DarkModeContext';


function Aboutme() {
  const {darkMode} = useContext(DarkModeContext)

  return (
    <div className='mainWrapper'>
      <div className='bioWrapper'>
        <img className='profileImg' src='https://placehold.co/198x198'></img>
        <div className='bioText'>
          <h1 className='bioH1'>Alexandre Rodrigues</h1>
          <p className='bioP'>I'm more than one in love for Front-End. My experience with interface design turn me one extremely criterious with
            alignments, margins, colors and a lot other resorces in CSS. Today I work with projects in a whole world. Codifiding in my
            home office, in a quiet interior of São Paulo, Brazil.</p>
        </div>
      </div>
      <div className='bioBoxes'>
            <div className='bioBox'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={darkMode ? 'white' : 'black'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-code"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              <div className='bioBoxVr'></div>
              <div className='bioTextWrapper'>
                <p className='bioBoxP'>HTML & CSS</p>
                <p className='bioBoxSubP'>LoremLoremLoremLoremLoremLorem</p>
              </div>
            </div>
            <div className='bioBox'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={darkMode ? 'white' : 'black'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layout"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
              <div className='bioBoxVr'></div>
              <div className='bioTextWrapper'>
                <p className='bioBoxP'>React.js</p>
                <p className='bioBoxSubP'>LoremLoremLoremLoremLoremLorem</p>
              </div>
            </div>
            <div className='bioBox'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={darkMode ? 'white' : 'black'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cpu"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
              <div className='bioBoxVr'></div>
              <div className='bioTextWrapper'>
                <p className='bioBoxP'>Linux</p>
                <p className='bioBoxSubP'>LoremLoremLoremLoremLoremLorem</p>
              </div>
            </div>
            <div className='bioBox'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={darkMode ? 'white' : 'black'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-figma"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
              <div className='bioBoxVr'></div>
              <div className='bioTextWrapper'>
                <p className='bioBoxP'>Figma</p>
                <p className='bioBoxSubP'>LoremLoremLoremLoremLoremLorem</p>
              </div>
            </div>
      </div>

      <div className='bioResume'>
        <div className='bioResumeWrapper'>
          <div className='bioResumeHr'></div>
          <div className='bioResumeText'>
            <p className='bioResumeP'>I've had Experiences with</p>
            <p className='bioResumeSubP'> Firebase Database <br/> MySQL Database <br/>
              GIT, GitHub, Bitbucket <br/> 
              Coding PHP <br/> Figma <br/> 
              CSS Preprocessors <br/>
              Digital Marketing <br/> 
              Coding Python (Django)</p>
          </div>
        </div>
        <div className='bioResumeWrapper'>
          <div className='bioResumeHr'></div>
          <div className='bioResumeText'>
            <p className='bioResumeP'>I've had Experiences with</p>
            <p className='bioResumeSubP'> Firebase Database <br/> MySQL Database <br/>
              GIT, GitHub, Bitbucket <br/> 
              Coding PHP <br/> Figma <br/> 
              CSS Preprocessors <br/>
              Digital Marketing <br/> 
              Coding Python (Django)</p>
          </div>
        </div>
        <div className='bioResumeWrapper'>
          <div className='bioResumeHr'></div>
          <div className='bioResumeText'>
            <p className='bioResumeP'>I've had Experiences with</p>
            <p className='bioResumeSubP'> Firebase Database <br/> MySQL Database <br/>
              GIT, GitHub, Bitbucket <br/> 
              Coding PHP <br/> Figma <br/> 
              CSS Preprocessors <br/>
              Digital Marketing <br/> 
              Coding Python (Django)</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Aboutme;
