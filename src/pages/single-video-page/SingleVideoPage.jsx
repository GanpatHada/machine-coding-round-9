import React, { useContext, useState } from "react";
import "./SingleVideoPage.css";
import { useParams, useSearchParams } from "react-router-dom";
import { videos } from "../../Data";
import { MdDelete, MdModeEditOutline, MdOutlineWatchLater } from "react-icons/md";
import { RiPlayListAddFill} from "react-icons/ri";
import AddNotesModal from "../../components/addNotesModal/AddNotesModal";
import { DataContext } from "../../context/DataContext";

const SingleNote=({note})=>{
    return(
        <div className="single-note">
            <span>{note.note}</span>
            <span>
                <MdModeEditOutline/>
                <MdDelete/>
            </span>
        </div>
    )
}

const SingleVideoPage = () => {
  const{notes}=useContext(DataContext)   
  const[openModal,setOpenModal]=useState(false)  
  const { videoId } = useParams();
  const currentVideoNotes=notes.filter(note=>note.videoId===videoId)
  console.log(typeof videoId);
  const currentVideo = videos.find(
    (eachVideo) => eachVideo._id === Number(videoId)
  );
  const { title, src, creator, thumbnail } = currentVideo;
  return (
    <div id="single-video-page">
      <div id="video-box">
      <iframe id="video"
        src={src}
        title="YouTube Video"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      </div>
      <div id="actions">
        <h4>{title}</h4>
        <div>
            <button>
               <MdOutlineWatchLater/>
            </button>
            <button onClick={()=>setOpenModal(true)}>
               <RiPlayListAddFill/>
            </button>
            <button>
                 <img src='https://cdn.icon-icons.com/icons2/2248/PNG/512/playlist_edit_icon_135298.png' alt="..." />
            </button>   
        </div>
      </div>
      
      <section id="notes-section">
      {openModal&&<AddNotesModal onClose={()=>setOpenModal(false)} videoId={videoId}/>}
      <h3>My Notes</h3>
      <div>
        {
            currentVideoNotes.map(note=>{
                return <SingleNote note={note} key={note.noteId}/> 
            })
        }
      </div>
      </section>
    </div>
  );
};

export default SingleVideoPage;
