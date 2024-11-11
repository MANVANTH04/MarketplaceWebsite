import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

import Home from './Pages/Home'
import Categories from './Pages/Categories'
import Sellitem from './Pages/Sellitem'
import Cart from './Pages/Cart';
import Privacypolicy from './Pages/Userinformation/Privacypolicy'
import Signup from './Pages/Signup'
import Blog from './Pages/Community/Blog'
import About from './Pages/About/Aboutus'
import Herosection from './Components/Herosection'
import Cookiepolicy from './Pages/Legal/Cookiepolicy';
import Termsandconditions from './Pages/Legal/Termsandconditions';
import Campusevents from './Pages/Community/Campusevents'
import Userrevies from './Pages/Community/Userrevies';
import Helpcenter from './Pages/Userinformation/Helpcenter'
import ReturnRefundpolicy from './Pages/Userinformation/ReturnRefundpolicy'
import Aboutus from './Pages/About/Aboutus';
import Contactus from './Pages/About/Contactus'
import Howitworks from './Pages/About/Howitworks'
import Books from './Pages/Categoriess/Books'
import Clothing from './Pages/Categoriess/Clothing'
import Electronics from './Pages/Categoriess/Electronics'






function App() {
  const [count, setCount] = useState(0) 


  const allnavlinks = [
    Home,
    Categories,
    Sellitem,
    Cart,
    Privacypolicy,
    Signup,
    Blog,
    About,
    Herosection,
    Cookiepolicy,
    Termsandconditions,
    Campusevents,
    Userrevies,
    Helpcenter,
    ReturnRefundpolicy,
    Aboutus,
    Contactus,
    Howitworks,
    Books,
    Clothing,
    Electronics
  ]


  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Home/>} />
        {allnavlinks.map((Path, index) => (
      <Route key={index} path={`/${Path}`} element={<Path/>} />
     ))}
        
      </Routes>
    </Router>
  )
}

export default App


// 100+items , 20+ categories, 300+users
