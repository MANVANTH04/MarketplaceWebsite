import React from 'react'
import { Link } from 'react-router-dom'
import Navitem from './Navitem'

const CategoryCard = (props) => {
  return (
    <div className='category-cardmain'
    style={{backgroundImage: `url(${props.imagee})`}}>
    <div className='category-cardtext'>
      
      <h4>cycle </h4>
    </div>
    </div>
  )
}

export default CategoryCard