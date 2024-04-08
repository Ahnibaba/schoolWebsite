import React from 'react'
import "./Hero.css"
import { ArrowRightAlt } from '@mui/icons-material'
import Title from '../../Common/Title/Title'

const Hero = () => {
  return (
    <>
        <section className='hero'>
            <div className="container">
                 <div className="row">
                     <Title subtitle="WELCOME TO ACADEMIA" title="Best Online Education" />
                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A iure odit numquam quae 
                        deserunt corrupti! Quo nulla tempore praesentium 
                        aliquam nesciunt iste nam ratione eveniet voluptatem omnis! Aut, obcaecati cupiditate.</p>

                     <div className="button">
                       <button className="primary-btn">
                          GET STARTED NOW <ArrowRightAlt className= "arrow" />
                       </button>
                  
                      <button>
                          VIEW COURSE <ArrowRightAlt className='arrow' />
                       </button>
                    
                    </div>
                </div>
                
            </div>
        </section>

        <div className="marigin"></div>

    </>
  )
}

export default Hero