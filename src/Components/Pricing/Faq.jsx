import React, {useState} from 'react'

import Title from "../Common/Title/Title"
import { faq } from '../../dummyData'
import { KeyboardArrowDown, KeyboardArrowRight } from '@mui/icons-material';

const Faq = () => {

    const [click, setClick] = useState(false);

    const toggle = (index) =>{
        if(click === index){
           return setClick(null);
        }
         setClick(index)
    }
  return (
    <>
      <Title subtitle="FAQS" title="Frequently Asked Questions" />
      <section className='faq'>
        <div className="container">
            {faq.map((val, index) =>(
               <div className="box">
                 <button className='accordion' onClick={() => toggle(index)} key={index}>
                    <h2>{val.title}</h2>
                    <span>{click === index? <KeyboardArrowDown /> : <KeyboardArrowRight />}</span>
                 </button>
                   {click === index ? (
                    <div className="text">
                    <p>{val.desc}</p>
                 </div>
                   ): null}

                    {console.log(index)}
               </div>
               
             
            ))}
        </div>

      </section>
    </>
  )
}

export default Faq