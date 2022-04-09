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
      <Route path='/' exact="true" element={<Landing />} />
      <Route path='/about'  element={<About />} />
      <Route path='/skills'  element={<Skills />} />
      <Route path='/projects'  element={<Projects />} />
      <Route path='/contact'  element={<Contact />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
