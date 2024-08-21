import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Aboutme from './pages/Aboutme';
import Projects from './pages/Projects';
import Cases from './pages/Cases';
import MainNav from './components/mainNav';
import { DarkModeProvider, DarkModeContext } from './hooks/DarkModeContext'; 

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode ? '#000000' : '#ffffff', 
      },
      text: {
        primary: darkMode ? '#f1f2f6' : '#000000', 
      },
    },
  });
  


  return (
    <DarkModeProvider> 
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: {
              color: theme.palette.text.primary, 
              backgroundColor: theme.palette.background.default, 
            },
            h1: {
              color: theme.palette.text.primary, 
            },
            p: {
              color: theme.palette.text.primary,
            },
            '.headerHr, .contactHr, .footerHr, .bioBoxVr': {
              backgroundColor: theme.palette.text.primary, // Change the div color
            },
            a: {
              color: `${theme.palette.text.primary} !important`, // Apply theme-based color to links

            },
            'svg': {
              stroke: theme.palette.text.primary, // Apply stroke color based on the theme
            },
            '.bioBox': {
              backgroundColor: theme.palette.background.default,
            },
            
          }}
        />
        <Router>
          {/* Pass setDarkMode and darkMode to MainNav */}
          <MainNav setDarkMode={setDarkMode} darkMode={darkMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about-me" element={<Aboutme />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </DarkModeProvider>
  );
}

export default App;
