import React from 'react'
import BlogCard from './BlogCard'
import Back from '../Common/Back/Back'
import "./Blog.css"

const Blog = () => {
  return (
    <>
      <Back  title= 'Blog Posts'/>
       <div className="blog padding">
         <div className="container grid2 gridz">
           <BlogCard />
         </div>
       </div>
    </>
  )
}

export default Blog