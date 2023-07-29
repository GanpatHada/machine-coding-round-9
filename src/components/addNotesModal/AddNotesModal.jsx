import React, { useContext, useState } from 'react'
import './AddNotesModal.css'
import {GrClose} from 'react-icons/gr'
import { v4 as uuid } from 'uuid';
import { DataContext } from '../../context/DataContext';
const AddNotesModal = ({onClose,videoId,openModal}) => {
  const{addNote,notes,editNote}=useContext(DataContext)

  const getValue=()=>{
    if(typeof(openModal)==='boolean')
        return ''
    const noteId=openModal;
    return notes.find(note=>note.noteId===noteId).note
  }  
  
  const getModalFor=()=>{
    console.log(typeof(openModal)==='boolean')
    if(typeof(openModal)==='boolean')
       return 'ADD'
    if(typeof(openModal)==='string')   
       return 'EDIT'   
  } 
  
  const handleEditNote=()=>{
    editNote(openModal,note)
  }

  const [note,setNote]=useState(getValue())
  const handleAddNote=()=>{
    let noteObject={noteId:uuid(),note,videoId}
    addNote(noteObject)
  }


  return (
    <div id='add-notes-modal'>
        <span onClick={onClose}><GrClose/></span>
        <input type="text" value={note} onChange={e=>setNote(e.target.value)} placeholder='write note' />
        <div>
            {getModalFor()==='EDIT'&&<button disabled={note.length===0} onClick={handleEditNote}>Edit Note</button>}
            {getModalFor()==='ADD'&&<button disabled={note.length===0} onClick={handleAddNote}>Add Note</button>}
        </div>
     </div>
  )
}

export default AddNotesModal