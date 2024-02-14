import React from 'react';

import {

  BrowserRouter as Router,

  Routes,

  Route,

  Link

} from "react-router-dom";
import Shop from './Shop';
import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';
import Team from "./Team"
import "./App.css";

function App() {
  return <Router>
  <nav>
    <Link to ="/about" className='link'>About </Link>
<Link to ="/home" className='link'> Home </Link>
<Link to ="/shop" className='link'> Shop </Link>
<Link to ="/contsctUs" className='link'> Contact Us </Link>
<Link to ="/team" className='link'> Team </Link>
    </nav>
    <Routes>
      <Route path='/about' element ={<About/>}/>
      <Route path='/home' element ={<Home/>}/>
      <Route path='/shop' element ={<Shop/>}/>
      <Route path='/contsctUs' element ={<ContactUs/>}/>
      <Route path='/team' element ={<Team/>}/>
    </Routes>
    </Router>
}

export default App;
