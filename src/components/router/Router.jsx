import React from "react";
import './Router.css'
import { Route, Routes } from "react-router-dom";
import App from "../../App";
import Home from "../../pages/home/Home";
import ListingPage from "../../pages/listing-page/ListingPage";
import WatchLaterPage from "../../pages/watch-later-page/WatchLaterPage";
import ExplorePage from "../../pages/explore-page/ExplorePage";
import SingleVideoPage from "../../pages/single-video-page/SingleVideoPage";

const Router = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:category" element={<ListingPage/>}></Route>
        <Route path="/video/:videoId" element={<SingleVideoPage/>}></Route>
        <Route path="/watch-later" element={<WatchLaterPage/>}></Route>
        <Route path="/explore" element={<ExplorePage/>}></Route>
      </Routes>
    </main>
  );
};

export default Router;
