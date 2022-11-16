import './App.css'
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Home from './/components/Home';
import Skills from './/components/Skills';
import Projects from './/components/Projects';
import AOS from "aos";
import { useEffect } from 'react';

function App() {
  useEffect(() =>{
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Projects />   
      <Contact />
    </div>
  );
}

export default App;
