import React from 'react';
import '../App.css'

const Button = (props) => {
  return (
    <button className="custom-button">{props.name}</button>
    )
}

export default Button