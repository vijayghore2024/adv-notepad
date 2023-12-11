import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Notepad from './components/Notepad';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Notepad />} />   
        <Route path='/about' element={<About />} />   
        <Route path='/contact' element={<Contact />} />   
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
