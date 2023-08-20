import React, { useContext, useEffect, useRef, useState } from "react";
import "./NotesModal.css";
import { GrClose } from "react-icons/gr";
import { v4 as uuid } from "uuid";
import { DataContext } from "../../context/DataContext";
const NotesModal = ({ mode,noteId,videoId,closeNotesModal}) => {
  const { addNote, notes, editNote } = useContext(DataContext);
  

  const getNoteText=()=>notes.find(note=>note.noteId===noteId).note;

  const getValue=()=>{
    if(mode==='add note')
        return ''
    if(mode==='edit note') 
      return getNoteText();
     
    
  }

  const isButtonDisabled=()=>{
    if(mode==='add note')
       return note.length===0;
    return note===getNoteText();  
  }

  const handleAddNote=()=>{
    let noteObject={noteId:uuid(),note,videoId}
    addNote(noteObject)
  }

  const handleEditNote=()=>{
    editNote(noteId,note)
  }

  const hanldeNotesModalButton=()=>{
    closeNotesModal()
    if(mode==='add note')
       return handleAddNote()
    else
       return handleEditNote()   
  }

  const [note,setNote]=useState('')


  
  
  useEffect(()=>{
     setNote(getValue())
  },[mode])

  return (
    <div id="add-notes-modal" >
      <span onClick={closeNotesModal}>
        <GrClose />
      </span>
      <h4>{mode}</h4>
      <input type="text" value={note} onChange={(e)=>setNote(e.target.value)} placeholder="write note" />
      <button disabled={isButtonDisabled()} onClick={hanldeNotesModalButton}>{mode.split(' ')[0]}</button>
    </div>
  );
};

export default NotesModal;
