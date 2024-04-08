import React from 'react'
import "./Test.css"
import { FormatQuoteRounded } from '@mui/icons-material'
import { testimonial } from '../../../dummyData'
import Title from '../../Common/Title/Title'

const Test = () => {
  return (
    <>
      <section className='testimonial padding'>
        <div className="container">
          <Title subtitle="testimonial" title="Our successful students" />
          
          <div className="content grid2">
             {testimonial.map((val) =>(
               <div className="items shadow">
                  <div className="box flex">
                     <div className="image">
                        <img src={val.cover}alt="" />
                        <FormatQuoteRounded className='icon' style={{padding: "5px"}} />
                     </div>
                     <div className="name">
                        <h2>{val.name}</h2>
                        <span>{val.post}</span>
                     </div>
                  </div>
                  <p>{val.desc}</p>
               </div>
             ))}
          </div>
        
        </div>
      </section>
    
    </>
  )
}

export default Test