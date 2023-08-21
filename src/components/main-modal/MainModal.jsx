import React, { useContext, useEffect, useState } from 'react'
import './MainModal.css'
import { DataContext } from '../../context/DataContext'
import { GrClose } from 'react-icons/gr'
import { v4 as uuid } from "uuid";
import { getRandomDarkColor } from '../../Utils'
const MainModal = ({mode}) => {
  const{playlists,closeMainModal,createNewPlaylist,editPlaylist}=useContext(DataContext)
  const[inputValue,setInputValue]=useState('')
  
  const isWordLimitReached=()=>inputValue.length===30
   
  const getColorOfInputCounter=()=>{
    if(isWordLimitReached())
      return 'red'
    return 'lightgray'  
  }

  const getCurrentPlaylistName=()=>playlists.find(playlist=>playlist._id===mode).name

  const getInputValue=()=>{
    if(mode==='create')
       return ''   
    return getCurrentPlaylistName()  
  }

  const getMode=()=>mode==='create'?'Create':'Edit'

  const handleInputValue=(e)=>{
    setInputValue(e.target.value)
  }

  const isPlaylistAlreadyCreated=()=>{
      return mode==='create'&&playlists.find(playlist=>playlist.name===inputValue.trim())
  }

  const isRenamed=()=>{
      return inputValue.trim()===getCurrentPlaylistName()
  }

  const isButtonDisabled=()=>{
    if(mode==='create')
       return inputValue.length===0||isPlaylistAlreadyCreated()
    else
       return inputValue.length===0||isRenamed()   
  }

  const handleButtonClick=()=>{
    if(mode==='create')
    {
      let playlist={_id:uuid(),name:inputValue,videos:[],backgroundColor:getRandomDarkColor()}
      createNewPlaylist(playlist)
    }
    else
      editPlaylist(mode,inputValue)
    closeMainModal()  
  }

  useEffect(()=>{
    setInputValue(getInputValue())
  },[mode])

  return (
    <div id='main-modal' className='all-centered' onClick={closeMainModal}>
        <div id="main-modal-content" onClick={e=>e.stopPropagation()}>
        <button onClick={closeMainModal} id='close-btn'><GrClose/></button>   
        <h2>{getMode()} Playlist</h2>
        <input value={inputValue} type="text"  onChange={handleInputValue} maxLength={30} placeholder='Enter playlist name'/>
        <p><span>{isPlaylistAlreadyCreated()?'Warning! Playlist already created':''}</span><span style={{color:getColorOfInputCounter()}}>{inputValue.length}/30</span></p>
        <button disabled={isButtonDisabled()} onClick={handleButtonClick} className='primary-btn'>{getMode()}</button>
        </div>
    </div>
  )
}

export default MainModal