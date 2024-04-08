import React from 'react'
import Back from '../Common/Back/Back'
import TeamCard from './TeamCard'

const Team = () => {
  return (
    <>
    
    <Back title="Team" />
    <section className='team padding'>
       <div className="container grid gridz">
          <TeamCard />
       </div>
    </section>
    
    </>
  )
}

export default Team