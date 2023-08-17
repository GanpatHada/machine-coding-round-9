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

const SingleNote = ({ note, setOpenModal }) => {
  const handleEditModal = () => {
    return setOpenModal(note.noteId);
  };
  const { deleteNote } = useContext(DataContext);
  return (
    <div className="single-note">
      <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic fugiat
        quasi sit eveniet! Ex deleniti provident ipsum mollitia dolor
        consequuntur maiores consequatur pariatur, reprehenderit incidunt, esse
        rerum, odit corporis corrupti? Animi doloribus incidunt dicta officia
        molestiae obcaecati delectus, accusamus in laboriosam similique velit
        temporibus iste unde, recusandae id facere. Laborum!
      </span>
      <span>
        <button>
          <MdModeEditOutline onClick={handleEditModal} />
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
  const { videoId } = useParams();
  const currentVideoNotes = notes.filter((note) => note.videoId === videoId);
  console.log(typeof videoId);
  const currentVideo = videos.find(
    (eachVideo) => eachVideo._id === Number(videoId)
  );
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
            <button onClick={() => setOpenModal(true)}>
              <RiPlayListAddFill />
            </button>
            <button>
              <FaRegEdit />
            </button>
          </div>
        </div>
        <section id="notes-section">
          <section id="modal-section">
            <NotesModal mode='add note'/>
          </section>

          <h3>My Notes</h3>
          <div>
            <SingleNote setOpenModal={setOpenModal} />
            <SingleNote setOpenModal={setOpenModal} />
            <SingleNote setOpenModal={setOpenModal} />
            <SingleNote setOpenModal={setOpenModal} />
            <SingleNote setOpenModal={setOpenModal} />
          </div>
        </section>
      </div>
      <div id="suggestion-box"></div>
    </div>
  );
};

export default SingleVideoPage;
