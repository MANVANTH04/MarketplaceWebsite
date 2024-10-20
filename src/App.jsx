import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import Categories from './Pages/Categories'
import Sellitem from './Pages/Sellitem'
import React from 'react';
import Cart from './Pages/Cart'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Herosection from './Components/Herosection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/logo' element= {<Home/>}/>
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
