import React from "react";
import './Router.css'
import { Route, Routes } from "react-router-dom";
import App from "../../App";
import Home from "../../pages/home/Home";
import ListingPage from "../../pages/listing-page/ListingPage";
import WatchLaterPage from "../../pages/watch-later-page/WatchLaterPage";
import ExplorePage from "../../pages/explore-page/ExplorePage";
import SingleVideoPage from "../../pages/single-video-page/SingleVideoPage";
import Playlists from "../../pages/playlists/Playlists";
import SinglePlaylistPage from "../../pages/single-playlist-page/SinglePlaylistPage";

const Router = () => {
  return (
    <section id='routes'>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:category" element={<ListingPage/>}></Route>
        <Route path="/video/:videoId" element={<SingleVideoPage/>}></Route>
        <Route path="/watch-later" element={<WatchLaterPage/>}></Route>
        <Route path="/explore" element={<ExplorePage/>}></Route>
        <Route path="/playlists" element={<Playlists/>}></Route>
        <Route path="/playlists/:playlistId" element={<SinglePlaylistPage/>}></Route>

      </Routes>
    </section>
  );
};

export default Router;
