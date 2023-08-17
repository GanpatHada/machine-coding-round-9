import React, { useContext, useState } from "react";
import "./ExplorePage.css";
import { videos } from "../../Data";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
const ExplorePage = () => {
  const{search}=useContext(DataContext);
  const filterVideos = () => {
    let filteredVideos = videos;
    filteredVideos = filteredVideos.filter((eachVideo) =>
      eachVideo.title.toLowerCase().includes(search.toLowerCase())
    );
    return filteredVideos;
  };

  return (
    <main id="explore-page">
      {/* <header>
        <h3>Explore</h3>
      </header> */}
      <div id="explore-page-content">
        {filterVideos().length>0?<div className="content">
          {filterVideos().map((eachVideo) => {
            return (
              <Link to={`/video/${eachVideo._id}`} key={eachVideo._id}>
                 <Card info={eachVideo} mode='video' />
              </Link> 
            );
          })}
        </div>:<div className="content">No videos found</div>}
      </div>
    </main>
  );
};

export default ExplorePage;
