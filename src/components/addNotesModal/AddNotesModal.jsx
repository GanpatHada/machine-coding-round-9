import React, { useContext, useState } from 'react'
import './AddNotesModal.css'
import {GrClose} from 'react-icons/gr'
import { v4 as uuid } from 'uuid';
import { DataContext } from '../../context/DataContext';
const AddNotesModal = ({onClose,videoId}) => {
  const{addNote}=useContext(DataContext)
  const [note,setNote]=useState('')
  const handleAddNote=()=>{
    let noteObject={noteId:uuid(),note,videoId}
    addNote(noteObject)
  }


  return (
    <div id='add-notes-modal'>
        <span onClick={onClose}><GrClose/></span>
        <input type="text" value={note} onChange={e=>setNote(e.target.value)} placeholder='write note' />
        <div>
           <button disabled={note.length===0} onClick={handleAddNote}>Add Note</button>
        </div>
     </div>
  )
}

export default AddNotesModal