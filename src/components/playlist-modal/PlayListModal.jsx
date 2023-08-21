import React, { useContext, useState } from "react";
import "./PlayListModal.css";
import { DataContext } from "../../context/DataContext";
import { v4 as uuid } from "uuid";
import { GrClose } from "react-icons/gr";
import { getRandomDarkColor } from "../../Utils";
const PlayListModal = ({ videoId, closePlaylistModal }) => {
  const { createNewPlaylist, playlists, addToPlaylist } =
    useContext(DataContext);
  const [playlistName, setPlaylistName] = useState("");

  const handleCreatePlaylist = () => {
    const playlist = {
      _id: uuid(),
      name: playlistName.trim(),
      videos: [],
      backgroundColor: getRandomDarkColor(),
    };
    createNewPlaylist(playlist);
    setPlaylistName("");
  };

  const isPlaylistCreatedAlready = () => {
    return playlists.find((playlist) => playlist.name === playlistName.trim());
  };

  const handleButtonDisabled = () => {
    return playlistName.trim().length === 0 || isPlaylistCreatedAlready();
  };

  const handleAddToPlaylist = (playlistId, videoId) => {
    addToPlaylist(playlistId, videoId);
  };

  return (
    <div id="playlist-modal">
      <section id="prev-list-section">
        <h4>Add to Playlist</h4>
        <button id="close-btn" onClick={closePlaylistModal}>
          <GrClose />
        </button>
        <ul>
          {playlists.map((playlist) => {
            return (
              <li
                key={playlist._id}
                onClick={() => handleAddToPlaylist(playlist._id, videoId)}
              >
                {playlist.name}
              </li>
            );
          })}
        </ul>
      </section>
      <hr />
      <section id="create-new-section">
        <h5>Create New Playlist</h5>
        <input
          value={playlistName}
          type="text"
          placeholder="playlist name"
          maxLength={30}
          onChange={(e) => setPlaylistName(e.target.value)}
        />
        <span>
          {isPlaylistCreatedAlready() ? "Playlist already created" : ""}
        </span>
        <button
          disabled={handleButtonDisabled()}
          onClick={handleCreatePlaylist}
        >
          Create
        </button>
      </section>
    </div>
  );
};

export default PlayListModal;
