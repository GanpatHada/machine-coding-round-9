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
  const [openModal, setOpenModal] = useState(false);
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
    setOpenModal(true);
  }

  const handleAddNoteModal=()=>{
    setMode('add note');
    setOpenModal(true);
  }
 
  const closeNotesModal=()=>{
    setMode(null);
    setNoteId(null);
    setOpenModal(false);
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
            <button>
              <RiPlayListAddFill />
            </button>
            <button>
              <FaRegEdit onClick={handleAddNoteModal} />
            </button>
          </div>
        </div>
        <section id="notes-section">
          {openModal&&<section id="modal-section">
            <NotesModal mode={mode} closeNotesModal={closeNotesModal} noteId={noteId} videoId={Number(videoId)}/>
          </section>}
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
      <div id="suggestion-box"></div>
    </div>
  );
};

export default SingleVideoPage;
