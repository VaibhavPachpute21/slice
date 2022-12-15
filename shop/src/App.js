import './App.css';
import TopBar from './components/TopBar';
import { Routes, Route } from 'react-router-dom'
import About from './components/About';
import Home from './screens/Home'
import Contact from './components/Contact'
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <TopBar />
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/cart' element={<></>}/>
      </Routes>

    </>
  );
}

export default App;
