
import './App.css';
import Footer from './components/Footer';
//import Header from './components/Header';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './components/HeroSection';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
function App() {
  return (
    <Routes >
      <Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/hero' element={<HeroSection/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/footer' element={<Footer/>}/>
        
        
        
        
      </Route>
      
    </Routes>
  );
}

export default App;
