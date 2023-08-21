import React, { useContext, useEffect, useRef, useState } from "react";
import "./NotesModal.css";
import { GrClose } from "react-icons/gr";
import { v4 as uuid } from "uuid";
import { DataContext } from "../../context/DataContext";
const NotesModal = ({ mode,noteId,videoId,closeNotesModal}) => {
  const { addNote, notes, editNote } = useContext(DataContext);
  const[height,setHeight]=useState('38px')
  const inputRef=useRef(null)
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

  const handleHeightOfInput=()=>{
      inputRef.current.style.height='38px'
      inputRef.current.style.height= inputRef.current.scrollHeight+'px'
  }

  const handleNotesInputChange = e=>{
    setNote(e.target.value)
    handleHeightOfInput()
  }

  const [note,setNote]=useState('')
  
  const getRows=()=>{
    return note.length>32?2:1
  }

  
  
  useEffect(()=>{
     setNote(getValue())
     inputRef.current.style.height='38px'
  },[mode])

  return (
    <div id="add-notes-modal" >
      <button id="close-btn" onClick={closeNotesModal}>
        <GrClose />
      </button>
      <h4>{mode}</h4>
      <textarea maxLength={120} ref={inputRef} value={note} onChange={handleNotesInputChange} placeholder="write note"></textarea> 
      <button disabled={isButtonDisabled()} onClick={hanldeNotesModalButton}>{mode.split(' ')[0]}</button>
    </div>
  );
};

export default NotesModal;
