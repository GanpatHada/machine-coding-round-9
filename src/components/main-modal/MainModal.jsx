import React, { useContext, useEffect, useState } from 'react'
import './MainModal.css'
import { DataContext } from '../../context/DataContext'
import { GrClose } from 'react-icons/gr'
const MainModal = ({mode}) => {
  const{playlists,closeMainModal}=useContext(DataContext)
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

  useEffect(()=>{
    setInputValue(getInputValue())
  },[mode])

  return (
    <div id='main-modal' className='all-centered'>
        <div id="main-modal-content">
        <button onClick={closeMainModal} id='close-btn'><GrClose/></button>   
        <h2>{getMode()} Playlist</h2>
        <input value={inputValue} type="text"  onChange={handleInputValue} maxLength={30} placeholder='Enter playlist name'/>
        <p><span>{isPlaylistAlreadyCreated()?'Warning! Playlist already created':''}</span><span style={{color:getColorOfInputCounter()}}>{inputValue.length}/30</span></p>
        <button disabled={isButtonDisabled()} className='primary-btn'>{getMode()}</button>
        </div>
    </div>
  )
}

export default MainModal