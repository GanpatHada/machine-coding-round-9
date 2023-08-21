import React, { useContext, useState } from "react";
import "./SingleVideoPage.css";
import { useParams, useSearchParams } from "react-router-dom";
import { videos } from "../../Data";
import {
  MdDelete,
  MdModeEditOutline,
  MdOutlineWatchLater,
} from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiPlayListAddFill } from "react-icons/ri";
import NotesModal from "../../components/notes-modal/NotesModal";
import { DataContext } from "../../context/DataContext";
import WatchLaterButton from "../../components/watch-later-button/WatchLaterButton";
import PlayListModal from "../../components/playlist-modal/PlayListModal";
import LandscapeCard from "../../components/landscape-card/LandscapeCard";

const SingleNote = ({ note,handleEditNoteModal }) => {
  
  const { deleteNote } = useContext(DataContext);
  return (
    <div className="single-note">
      <span>
       {note.note}
      </span>
      <span>
        <button>
          <MdModeEditOutline onClick={()=>handleEditNoteModal(note.noteId)} />
        </button>
        <button>
          <MdDelete onClick={() => deleteNote(note.noteId)} />
        </button>
      </span>
    </div>
  );
};

const SingleVideoPage = () => {
  const { notes } = useContext(DataContext);
  const [openNotesModal, setOpenNotesModal] = useState(false);
  const[openPlaylistModal,setOpenPlaylistModal]=useState(false)
  const [noteId,setNoteId]=useState(null)
  const [mode,setMode]=useState(null)
  const { videoId } = useParams();
  
  
  const currentVideoNotes = notes.filter((note) => note.videoId === Number(videoId));
  console.log(typeof videoId);
  const currentVideo = videos.find(
    (eachVideo) => eachVideo._id === Number(videoId)
  );

  const handleEditNoteModal=(noteId)=>{
    setNoteId(noteId);
    setMode('edit note')
    setOpenNotesModal(true);
  }

  const handleAddNoteModal=()=>{
    setOpenPlaylistModal(false)
    setMode('add note');
    setOpenNotesModal(!openNotesModal);
  }

  const handlePlayListModal=()=>{
     setOpenNotesModal(false);
     setOpenPlaylistModal(!openPlaylistModal)    }
 
  const closeNotesModal=()=>{
    setMode(null);
    setNoteId(null);
    setOpenNotesModal(false);
  } 

  const closePlaylistModal=()=>{
    setOpenPlaylistModal(false)
  }


  const { title, src, creator, thumbnail } = currentVideo;
  return (
    <div id="single-video-page">
      <div id="video-box">
        <iframe
          id="video"
          src={src}
          title="YouTube Video"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <div id="actions">
          <h4>{title}</h4>
          <div>
            <button>
              <WatchLaterButton info={currentVideo} />
            </button>
            <button onClick={handlePlayListModal}>
              <RiPlayListAddFill />
            </button>
            <button onClick={handleAddNoteModal}>
              <FaRegEdit  />
            </button>
          </div>
        </div>
        <section id="notes-section">
          {openNotesModal&&<section id="notes-modal-section" className="modal-section">
            <NotesModal mode={mode} closeNotesModal={closeNotesModal} noteId={noteId} videoId={Number(videoId)}/>
          </section>}
          {openPlaylistModal&&<section id="playlist-modal-section" className="modal-section">
             <PlayListModal videoId={Number(videoId)} closePlaylistModal={closePlaylistModal}/>
          </section>

          }
          <h3>My Notes</h3>
          <div>
            {
              currentVideoNotes.map(note=>{
                return  <SingleNote key={note.noteId} note={note} handleEditNoteModal={handleEditNoteModal} />
              })
            }
           
          </div>
        </section>
      </div>
      <div id="suggestion-box">
        {
          videos.map(video=>{
            return <LandscapeCard key={video._id} info={video}/>
          })
        }
        
      </div>
    </div>
  );
};

export default SingleVideoPage;
