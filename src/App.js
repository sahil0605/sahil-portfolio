
import { Routes ,Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar></Navbar>
      <Routes>
      <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
