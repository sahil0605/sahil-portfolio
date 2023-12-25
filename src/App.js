import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Experience from './components/experience/Experience';
import Skill from './components/skills/Skill';
import Project from './components/project/Project';

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar />
      <Home></Home>
      <Experience></Experience>
      <Skill></Skill>
      <Project></Project>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
