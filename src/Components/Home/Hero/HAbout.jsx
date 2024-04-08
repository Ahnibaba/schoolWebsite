import React from 'react'
import Title from '../../Common/Title/Title'
import { Star } from '@mui/icons-material'
import { CourseCard } from '../../../dummyData'
import OnlineCourses from '../../AllCourses/OnlineCourses'

const HAbout = () => {
  return (
     <>
       <section className='homeAbout'>
        <div className="container">
            <Title subtitle="Our Courses" title="explore our popular online courses"/>
            <div className="courseCard">
                <div className="grid2 gridz">
                    {CourseCard.slice(0, 3).map((val) =>{

                    return(
                    <div className="items">
                        <div className="content flex">
                            <div className="left">
                                <div className="image">
                                    <img src={val.cover} alt="" />
                                </div>
                             </div>

                             <div className="text">
                                <h1>{val.coursesName}</h1>
                                <div className="rate">
                                    <Star className='rateIcon' />
                                    <Star className='rateIcon' />
                                    <Star className='rateIcon' />
                                    <Star className='rateIcon' />
                                    <Star className='rateIcon' />
                                    <label htmlFor="">(5.0)</label>
                                </div>

                                <div className="details">
                                    {val.courTeacher.map((details) =>(
                                        <>
                                        <div className="box">
                                            <div className="dimg">
                                                <img src={details.dcover} alt="" />
                                            </div>
                                            <div className="para">
                                               <h4>{details.name}</h4>
                                            </div>
                                        </div>
                                         <span>{details.totalTime}</span>
                                        </>
                                    ))}
                                </div>
                            </div>

                        </div>
                        <div className="price">
                            <h3>{val.priceAll} / {val.pricePer}</h3>
                        </div>
                        <button className='outline-btn'>ENROL NOW !</button>
                    </div>
                )})}
                </div>   
            </div>
            
        </div>

       </section>

       <OnlineCourses />
     
     </>
  )
}

export default HAbout