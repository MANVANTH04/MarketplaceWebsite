import React from 'react'

const CategoryCard = (props) => {
  return (
    <div className='category-cardmain'
    style={{backgroundImage: `url(${props.imagee})`}}>
    <div className='category-cardtext'>
      <h4>{props.name}</h4>
    </div>
    </div>
  )
}

export default CategoryCard