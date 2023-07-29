import React, { useContext } from 'react'
import './Card.css'
import { MdOutlineWatchLater } from 'react-icons/md'
import { DataContext } from '../../context/DataContext'
const Card = ({info:{_id,thumbnail,title,src,category,views,creator},navigate,video}) => {
  console.log(video) 
  const{ watchLaterList,addToWatchLater,removeFromWatchLater}=useContext(DataContext)
  const isVideoPresentInWatchLater=video=>watchLaterList.find(eachVideo=>eachVideo._id===video._id)
  const handleWatchLater=(video)=>{
     return isVideoPresentInWatchLater(video)?removeFromWatchLater(video):addToWatchLater(video)
  }
  

  return (
    <div className='card' onClick={navigate}>
        {video&&<button style={{color:isVideoPresentInWatchLater(video)?'red':'green'}} className="watch-later" onClick={()=>handleWatchLater(video)}>
            <MdOutlineWatchLater/>
        </button>}
        <section className="card-image-section">  
            <img src={thumbnail} alt="..." />
        </section>
        <section className="card-info-section">
             <h5>{title}</h5>
             <h6>{category}</h6>
             {creator&&views&&<span>{views} | {creator}</span>}
        </section>
    </div>
  )
}

export default Card