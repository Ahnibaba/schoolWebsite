import React from 'react'
import Title from '../Common/Title/Title'
import { online } from '../../dummyData'

const OnlineCourses = () => {
  return (
    <>
        <section className='online'>
            <div className="container">
                <Title subtitle="COURSES" title="Browse Our Online Courses" />

                <div className="content grid3 gridz ">
                    {online.map((val) =>(
                        <div className="box">
                            <div className="image">
                                <img src={val.hoverCover} alt="" className='' />
                                <img src={val.cover} alt="" className='show' />
                                
                            </div>
                             <h1>{val.courseName}</h1>
                             <span>{val.course}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default OnlineCourses