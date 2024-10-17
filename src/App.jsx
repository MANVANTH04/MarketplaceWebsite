import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import Navitem from './Components/Navitem'
import Navbar from './Components/Navbar'
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
      <Home />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/categories" component={Categories} />
        <Route path="/sellitem" component={Sellitem} />

        <Route path="/cart" component={Cart} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  )
}

export default App
