import React, { useContext } from "react";
import "./SinglePlaylistPage.css";
import { DataContext } from "../../context/DataContext";
import { Link, useParams } from "react-router-dom";
import Card from "../../components/card/Card";
import { videos } from "../../Data";
const SinglePlaylistPage = () => {
  const { playlists } = useContext(DataContext);
  const { playlistId } = useParams();
  const playlist = playlists.find((playlist) => playlist._id === playlistId);

  const getVideoInfo = (videoId) =>
    videos.find((video) => video._id === videoId);

  return (
    <main id="single-playlist-page">
      <h3>{playlist.name}</h3>
      <div className="content">
        {playlist.videos.map((videoId) => {
          return (
            <Link to={`/video/${videoId}`} key={videoId}>
              <Card mode="video" info={getVideoInfo(videoId)} deleteFromPlaylist={playlist._id} />
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default SinglePlaylistPage;
