import React, { useContext, useEffect, useState } from "react";
import "./Playlists.css";
import { AiFillDelete, AiOutlinePlus } from "react-icons/ai";
import { DataContext } from "../../context/DataContext";
import { Link, useNavigate } from "react-router-dom";
import {AiFillEdit} from 'react-icons/ai'
const Playlists = () => {
  const navigate = useNavigate();
  const { playlists,deletePlaylist,openMainModal} = useContext(DataContext);
  const handlePlaylistClick = (playlistId) =>
    navigate(`/playlists/${playlistId}`);

  

  const handleDeletePlaylist=(e,playlistId)=>{
    e.stopPropagation()
    deletePlaylist(playlistId);
  }

  const handleEditPlaylist=(e,playlistId)=>{
    e.stopPropagation();
    openMainModal(playlistId);
  }

  return (
    <main id="playlists">
      <h3>Playlists</h3>
      <div id="playlist-content">
        <div className="content">
          {playlists.map((playlist) => {
            return (
              <div
                onClick={() => handlePlaylistClick(playlist._id)}
                key={playlist._id}
                style={{ backgroundColor: playlist.backgroundColor }}
                className="playlist-card"
              >
                <h4>{playlist.name}</h4>
                <div className="playlist-card-buttons">
                  <button onClick={(e)=>handleEditPlaylist(e,playlist._id)} title={`Edit ${playlist.name}`} className="all-centered"><AiFillEdit/></button>
                  <button onClick={(e)=>handleDeletePlaylist(e,playlist._id)} title={`Delete ${playlist.name}`} className="all-centered"><AiFillDelete/></button>
                </div>
              </div>
            );
          })}

          <div className="playlist-card all-centered" id="new-playlist-card" onClick={()=>openMainModal('create')}>
            <AiOutlinePlus />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Playlists;
