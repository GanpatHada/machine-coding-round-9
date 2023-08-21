import React, { useContext } from 'react'
import './WatchLaterButton.css'

import { MdOutlineWatchLater } from "react-icons/md";
import { DataContext } from '../../context/DataContext';
const WatchLaterButton = ({info}) => {
   const { watchLaterList, addToWatchLater, removeFromWatchLater } =
    useContext(DataContext);


const isVideoPresentInWatchLater = (videoId) =>{
    console.log(watchLaterList)
    console.log (watchLaterList.find((eachVideo) => eachVideo._id === videoId));
    return watchLaterList.find((eachVideo) => eachVideo._id === videoId)
  }

const handleWatchLater = (videoId,e) => {
    e.preventDefault()
    e.stopPropagation()
    isVideoPresentInWatchLater(videoId)
      ? removeFromWatchLater(videoId)
      : addToWatchLater(videoId);
       
  };

return (
    <i className='watch-later-logo all-centered' style={{color:isVideoPresentInWatchLater(info._id)?'#44daff':'white'}} onClick={(e)=>handleWatchLater(info._id,e)} title='watch-later'>
          <MdOutlineWatchLater />
    </i>
  )
}

export default WatchLaterButton