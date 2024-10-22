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
    { component: Home, path: "home" },
    { component: Categories, path: "categories" },
    { component: Sellitem, path: "sellitem" },
    { component: Cart, path: "cart" },
    { component: Privacypolicy, path: "userinformation/privacypolicy" },
    { component: Signup, path: "signup" },
    { component: Blog, path: "community/blog" },
    { component: About, path: "about/aboutus" },
    { component: Herosection, path: "herosection" },
    { component: Cookiepolicy, path: "legal/cookiepolicy" },
    { component: Termsandconditions, path: "legal/termsandconditions" },
    { component: Campusevents, path: "community/campusevents" },
    { component: Userrevies, path: "community/userrevies" },
    { component: Helpcenter, path: "userinformation/helpcenter" },
    { component: ReturnRefundpolicy, path: "userinformation/returnrefundpolicy" },
    { component: Aboutus, path: "about/aboutus" },
    { component: Contactus, path: "about/contactus" },
    { component: Howitworks, path: "about/howitworks" },
    { component: Books, path: "categoriess/books" },
    { component: Clothing, path: "categoriess/clothing" },
    { component: Electronics, path: "categoriess/electronics" }
  ];


  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Home/>} />
        {allnavlinks.map(({component:Component, path}, index) => (
      <Route key={index} path={`/${path}`} element={<Component/>} />
    ))}
        
       {/* <Route path='/logo' element= {<Home/>}/>
        <Route path="/categories" element={<Categories/>} />
        <Route path="/sellitem" element={<Sellitem/>} />
        <Route path="/cart" element={<Cart/>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  )
}

export default App


// 100+items , 20+ categories, 300+users
