import React from 'react'
import Title from '../../Common/Title/Title'
import { blog } from '../../../dummyData'
import { CalendarMonth, Comment, Person } from '@mui/icons-material'

const Hblog = () => {
    return (
        <>
            <section className='blog'>
                <div className="container">
                    <Title subtitle='our blog' title='recent from blog' />
                    <div className="grid2 gridz">


                        {blog.slice(0, 3).map((val) => (
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
                                            <CalendarMonth icon="i-mage" />
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




                    </div>
                </div>
            </section>
        </>
    )
}

export default Hblog