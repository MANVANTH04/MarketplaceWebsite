// import {Link, NavLink} from "react-router-dom";
// import "../App.css"
// import React from 'react'

// const Navitem = (props) => {
//   return (
//     <li>
//       <Link className="navcolor" to={`/${props.name}`}>{props.name}</Link>
//     </li>
//   );
// };


// export default Navitem


import { Link, NavLink } from "react-router-dom";
import React, { useState } from 'react';
import "../App.css"; // Ensure you import your CSS

const Navitem = (props) => {
  const [isOpen, setIsOpen] = useState(false); // State to track dropdown visibility

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <li className="nav-link nav-item">
      <NavLink 
        className="navcolor" 
        to={`/${props.name.toLowerCase()}`} 
        activeClassName="active" 
        onClick={props.isDropdown ? toggleDropdown : null} // Toggle dropdown on click if it is dropdown
      >
        {props.name}
      </NavLink>

      {/* Dropdown Menu */}
      {props.isDropdown && isOpen && (
        <ul className="dropdown-menu">
          <li><Link className="navcolor" to="/categories/cycles">Cycles</Link></li>
          <li><Link className="navcolor" to="/categories/bikes">Bikes</Link></li>
          <li><Link className="navcolor" to="/categories/cars">Cars</Link></li>
        </ul>
      )}
    </li>
  );
};

export default Navitem;

