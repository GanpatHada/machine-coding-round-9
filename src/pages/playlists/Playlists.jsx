import React, { useContext } from "react";
import "./Playlists.css";
import { AiOutlinePlus } from "react-icons/ai";
import { DataContext } from "../../context/DataContext";
import { Link, useNavigate } from "react-router-dom";
const Playlists = () => {
  const navigate=useNavigate()  
  const { playlists } = useContext(DataContext);

  const handlePlaylistClick=(playlistId)=>navigate(`/playlists/${playlistId}`)

  const getRandomDarkColor = () => {
    const red = Math.floor(Math.random() * 128); // Keep red component lower for dark colors
    const green = Math.floor(Math.random() * 128); // Keep green component lower for dark colors
    const blue = Math.floor(Math.random() * 128); // Keep blue component lower for dark colors

    // Convert the RGB components to a CSS color string
    const darkColor = `rgb(${red}, ${green}, ${blue})`;

    return darkColor;
  };

  return (
    <main id="playlists">
      <h3>Playlists</h3>
      <div id="playlist-content">
        <div className="content">
          {playlists.map((playlist) => {
            return (
              <div
                onClick={()=>handlePlaylistClick(playlist._id)}
                key={playlist._id}
                style={{ backgroundColor: getRandomDarkColor() }}
                className="playlist-card"
              >
                <h4>{playlist.name}</h4>
              </div>
            );
          })}

          <div className="playlist-card all-centered" id="new-playlist-card">
            <AiOutlinePlus />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Playlists;
