import { CalendarMonth, Facebook, Instagram, Person, Phone, Place, Send, Twitter } from '@mui/icons-material'
import React from 'react'
import './Footer.css'
import { blog } from '../../dummyData'

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();
    return (
        <>

            <section className="newsletter">
                <div className="container flexSB newscon newsflexSB">
                    <div className="left row">
                        <h1>Newsletter - Stay tune and get the latest updates</h1>
                        <span>Far far behind the word called mountains</span>
                    </div>

                    <div className="right row newsrow">
                       <input type="text" placeholder='Enter email adress' />
                       <Send className='i' />


                    </div>
                </div>
            </section>

            <footer>
                <div className="container padding">
                    <div className="box logo" style={{width:"100%"}}>
                        <h1>ACADEMIA</h1>
                        <span>online education & learning</span>
                        <p>Lorem ipsum  vero eius! Architecto amet hic delectus? Perspiciatis sint excepturi ratione porro ipsam expedita velit.</p>

                        <Facebook className='icon' style={{ padding: "9px" }} />
                        <Instagram className='icon' style={{ padding: "9px" }} />
                        <Twitter className='icon' style={{ padding: "9px" }} />
                    </div>
                    <div className="box link">
                        <h3>Explore</h3>
                        <ul>
                            <li>About Us</li>
                            <li>About Us</li>
                            <li>About Us</li>
                            <li>About Us</li>
                        </ul>

                    </div>

                    <div className="box link">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>About Us</li>
                            <li>About Us</li>
                            <li>About Us</li>
                            <li>About Us</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h3>Recent Post</h3>
                        {blog.slice(0, 3).map((val) => {
                            return (
                                <div className="items flexSB">
                                    <div className="image">
                                        <img src={val.cover} alt="" />
                                    </div>

                                    <div className="text">
                                        <span>
                                            <Person icon="i-mage" />
                                            <label htmlFor="">{val.type}</label>
                                        </span>
                                        <span>
                                            <CalendarMonth icon="i-mage" />
                                            <label htmlFor="">{val.date}</label>
                                        </span>
                                        <h4>{val.title}</h4>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="box last">
                        <h3>Have a Question ?</h3>
                        <ul>
                            <li>
                                <Place style={{color: "#1eb2a6"}} />
                               203 Fake ST. Mount View, San francisio california, USA 
                            </li>

                            <li>
                                <Phone style={{color: "#1eb2a6"}} />
                                +123 456 7897
                            </li>
                            <li>
                                <Send  style={{color: "#1eb2a6"}}/>
                                example@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
             
            <div className="legal">
                <p>Copyright {year} All rights reserved</p>
            </div>
        </>
    )
}

export default Footer