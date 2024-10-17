import React from 'react'
import Navitem from './Navitem'

const Navbar = () => {
  return (
    <div className='main-nav'>
    <div className='left-navlinks'>
    <Navitem className="logo" name="logo"/>
    </div>
    <div className='middle-navlinks'>
    <Navitem name="home"/>
    <Navitem isDropdown={true} className="dropdown-categories" name="categories"/>
    <Navitem name="sellitem"/>
    <Navitem className="dropdown-profile" name="myprofile"/>
    </div>
    <div className='right-navlinks'>
    <Navitem className="cart" name = "cart"/>
    </div>
    </div>
  )
}

export default Navbar