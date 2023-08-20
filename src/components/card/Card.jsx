
import "./Card.css";


import WatchLaterButton from "../watch-later-button/WatchLaterButton";
import { AiFillDelete } from "react-icons/ai";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
const Card = ({ info, mode ,deleteFromPlaylist}) => {
  const{deleteVideoFromPlaylist}=useContext(DataContext);
  const handleDeleteVideoFromPlaylist=(playlistId,e)=>{
    e.preventDefault()
    deleteVideoFromPlaylist(playlistId,info._id);
  }

  return (
    <div className="card">
      <section className="card-image-section">
        <img src={info.thumbnail} alt="..." />
      </section>
      <section className="card-info-section">
        {mode !== "category" && <h5>{info.title}</h5>}
        <h6>{info.category}</h6>
        {mode!=='category'&&<span>{info.views} views | {info.creator}</span>}
        {/* {creator&&views&&<span>{views} | {creator}</span>} */}
      </section>
      {mode==='video'&&<button id="watch-later" className="card-buttons">
        <WatchLaterButton info={info}/></button>}
      {deleteFromPlaylist&&<button title='delete from playlist' onClick={(e)=>handleDeleteVideoFromPlaylist(deleteFromPlaylist,e)} id="delete-video" className="card-buttons">
        <AiFillDelete/>
        </button>}  
    </div>
  );
};

export default Card;
