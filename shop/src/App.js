import './App.css';
import TopBar from './components/TopBar';
import { Routes, Route } from 'react-router-dom'
import About from './components/About';
import Home from './screens/Home'
import Contact from './components/Contact'
import NavBar from './components/NavBar';
import CartScreen from './screens/CartScreen';
import Register from './screens/Register';
import Login from './screens/Login';

function App() {
  return (
    <>
      <TopBar />
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/cart' element={<CartScreen/>}/>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login/>} />
      </Routes>

    </>
  );
}

export default App;
