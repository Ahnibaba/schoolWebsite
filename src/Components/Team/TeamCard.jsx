import React from 'react'
import { team } from '../../dummyData'
import { Facebook, Instagram, LinkedIn, Pinterest, Twitter, YouTube } from '@mui/icons-material'
import "./Team.css"

const TeamCard = () => {
  return (
    <>
       {team.map((val) =>(
        <div className="items shadow">
            <div className="image">
                <img src={val.cover} alt="" />
                <div className="overlay">
                    <Facebook className='icon' style={{padding: "9px"}} />
                    <Instagram className='icon' style={{padding: "9px"}} />
                    <Twitter className='icon' style={{padding: "9px"}} />
                    <LinkedIn className='icon' style={{padding: "9px"}} />
                </div>
            </div>
            <div className="details">
              <h2>{val.name}</h2>
              <p>{val.work}</p>
            </div>
        </div>
       ))}
    </>
  )
}

export default TeamCard