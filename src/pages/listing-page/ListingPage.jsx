import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { videos } from "../../Data";
import Card from "../../components/card/Card";
import "./ListingPage.css";
const ListingPage = () => {
  const { category } = useParams();
  const videosInCategory = videos.filter(
    (eachVideo) => eachVideo.category === category
  );
  return (
    <main id="listing-page">
      <h3>{category}</h3>
      <div className="content">
        {videosInCategory.map((eachVideo) => {
          return (
            <Link to={`/video/${eachVideo._id}`} key={eachVideo._id}>
              <Card info={eachVideo} mode="video" />
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default ListingPage;
