import React, { useContext, useState } from "react";
import "./NotesModal.css";
import { GrClose } from "react-icons/gr";
import { v4 as uuid } from "uuid";
import { DataContext } from "../../context/DataContext";
const NotesModal = ({ mode }) => {
  const { addNote, notes, editNote } = useContext(DataContext);

  // const getValue=()=>{
  //   if(typeof(openModal)==='boolean')
  //       return ''
  //   const noteId=openModal;
  //   return notes.find(note=>note.noteId===noteId).note
  // }

  // const getModalFor=()=>{
  //   console.log(typeof(openModal)==='boolean')
  //   if(typeof(openModal)==='boolean')
  //      return 'ADD'
  //   if(typeof(openModal)==='string')
  //      return 'EDIT'
  // }

  // const handleEditNote=()=>{
  //   editNote(openModal,note)
  // }

  // const [note,setNote]=useState(getValue())
  // const handleAddNote=()=>{
  //   let noteObject={noteId:uuid(),note,videoId}
  //   addNote(noteObject)
  // }

  return (
    <div id="add-notes-modal">
      <span>
        <GrClose />
      </span>
      <h4>{mode}</h4>
      <input type="text" placeholder="write note" />
      <button>{mode.split(' ')[0]}</button>
    </div>
  );
};

export default NotesModal;
