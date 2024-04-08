import React from 'react'
import Back from '../Common/Back/Back'
import { CalendarMonth, Comment, Person } from '@mui/icons-material'
import { blog } from '../../dummyData'

const BlogCard = () => {
  return (
     <>
       
       {blog.map((val) =>(
        <div className="items shadow">
            <div className="image">
                <img src={val.cover} alt="" />
            </div>
            <div className="text">
                <div className="admin flexSB">
                    <span>
                        <Person icon="i-mage" />
                        <label htmlFor="">{val.type}</label>
                    </span>
                    <span>
                        <CalendarMonth  icon="i-mage"/>
                        <label htmlFor="">{val.date}</label>
                    </span>
                    <span>
                        <Comment icon="i-mage" />
                        <label htmlFor="">{val.com}</label>
                    </span>
                </div>
                <h1>{val.title}</h1>
                <p>{val.desc}</p >
            </div>
        </div>
       ))}
      
     </>
  )
}

export default BlogCard