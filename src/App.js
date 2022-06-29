import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';
import './App.scss';
import dots from './assets/images/dots.png'
import Header from './components/Header';
import Landing from './components/Landing';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>

    
  <Header />
    <Landing />
    <About />
    <Projects />
    <Skills />
    <Contact />
    <div class="animation-wrapper">
  {/* <div class="particle particle-1"></div> */}
  {/* <div class="particle particle-2"></div> */}
  {/* <div class="particle particle-3"></div> */}
  <div class="particle particle-4"></div>
</div>  
    </>
  );
}

export default App;
