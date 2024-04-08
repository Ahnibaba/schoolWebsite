import React from 'react'
import "./Contact.css"
import Back from '../Common/Back/Back'


const Contact = () => {

  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15798.682380668934!2d5.0921472!3d8.134978149999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1699615584747!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  return (
    <>
      <Back title='Contact Us' />
      <section className='contact padding'>
        <div className="container shadow flexSB">
           <div className="left row">
             <iframe src={map} title='myframe'></iframe>
           </div>

           <div className="right row">
              <h1>Contact Us</h1>
              <p>Lorem ipsum dolor sit cum esse?</p>

              <div className="items grid2">
              <div className="box">
                <h4>ADDRESS: </h4>
                <p>198 west 21st street, suite 751 New York <br /> NY 10016</p>
              </div>

              <div className="box">
                <h4>Email: </h4>
                <p>info@gmail.com</p>
              </div>

              <div className="box">
                <h4>PHONE: </h4>
                <p>+123 456 7898</p>
              </div>
           </div>

              <div className="form-div">
                   <form action="">
             <div className="">
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email' />
             </div>
             <input type="email" placeholder='Subject ' />
             <textarea cols="30" rows="10">
               Create a message here...
             </textarea>
             <button className='primary-btn'>SEND MESSAGE</button>
           </form>

             <h3>Follow us here</h3>
             <span>FACEBOOK TWITTER INSTAGRAM DRIBBLE</span>
              </div>
           </div>
        </div>
      </section>
    </>
  )
}

export default Contact