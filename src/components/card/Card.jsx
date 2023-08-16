import React, { useContext } from "react";
import "./Card.css";
import { MdOutlineWatchLater } from "react-icons/md";
import { DataContext } from "../../context/DataContext";
const Card = ({ info, mode }) => {
  const { watchLaterList, addToWatchLater, removeFromWatchLater } =
    useContext(DataContext);
  const isVideoPresentInWatchLater = (videoId) =>
    watchLaterList.find((eachVideo) => eachVideo._id === videoId);
  const handleWatchLater = (videoId,e) => {
    
    isVideoPresentInWatchLater(videoId)
      ? removeFromWatchLater(videoId)
      : addToWatchLater(videoId);
      e.stopPropagation()  
  };

  return (
    <div className="card">
      <section className="card-image-section">
        <img src={info.thumbnail} alt="..." />
      </section>
      <section className="card-info-section">
        {mode !== "category" && <h5>{info.title}</h5>}
        <h6>{info.category}</h6>
        {/* {creator&&views&&<span>{views} | {creator}</span>} */}
      </section>
      {mode==='video'&&<section className="watch-later" style={{color:isVideoPresentInWatchLater(info._id)?'#44daff':'white'}} onClick={(e)=>handleWatchLater(info._id,e)} title='watch-later'>
          <MdOutlineWatchLater />
      </section>}
    </div>
  );
};

export default Card;
