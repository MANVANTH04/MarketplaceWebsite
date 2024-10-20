import React from 'react'

const BlogCard = (props) => {
  return (
    <div className='blogcard-main'>
    <img src={`${props.name}`} alt="Girl in a jacket" width="500" height="600"></img>
    
    </div>
  )
}

export default BlogCard