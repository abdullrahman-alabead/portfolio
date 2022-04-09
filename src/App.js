import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Landing from './components/Landing';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <Header />
    <Routes>
      <Route path='nolan-sPortfolio/' element={<Landing />} />
      <Route path='nolan-sPortfolio/about'  element={<About />} />
      <Route path='nolan-sPortfolio/skills'  element={<Skills />} />
      <Route path='nolan-sPortfolio/projects'  element={<Projects />} />
      <Route path='nolan-sPortfolio/contact'  element={<Contact />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
