import React from 'react'
import './LandscapeCard.css'
import { useNavigate } from 'react-router-dom'
import WatchLaterButton from '../watch-later-button/WatchLaterButton'
const LandscapeCard = ({info}) => {
  const navigate=useNavigate()  
 
  const handleCardClick=()=>{
     navigate(`/video/${info._id}`)
  }

  return (
    <div id='landscape-card' onClick={handleCardClick}>
        <div id="image-section">
           <img src={info.thumbnail} alt="" />
           <button><WatchLaterButton info={info}/></button>
        </div>
        <div id="info-section">
            <h4>{info.title}</h4>
            <p>{info.category}</p>
            <span>{info.views} views | {info.creator}</span>
        </div>
        
    </div>
  )
}

export default LandscapeCard