import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material'
import React from 'react'


const Head = () => {
  return (
    <div>
        <section className='head'>
            <div className='container flexSB'>
                <div className='logo'>
                    <h1>ACADEMIA</h1>
                    <span>ONLINE EDUCATION & LEARNING</span>

                </div>

                <div className='social'>
                    {/* <i className='fab fa-facebook-f icon'></i>
                    <i className='fab fa-instagram icon'></i>
                    <i className='fab fa-twitter icon'></i>
                    <i className='fab fa-youtube icon'></i> */}


                    <Facebook className='icon' style={{padding: "9px"}} />
                    <Instagram className='icon' style={{padding: "9px"}} />
                    <Twitter className='icon' style={{padding: "9px"}} />
                    <YouTube className='icon' style={{padding: "9px"}} />
                    
                </div>

            </div>

        </section>
    </div>
  )
}

export default Head