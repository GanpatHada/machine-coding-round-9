import React from "react";
import "./Home.css";
import Card from "../../components/card/Card";
import { categories } from "../../Data";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <main id="home">
      <h3>Categories</h3>
      <div className="home-content">
        <div className="content">
          {categories.map((eachCategory) => {
            return (
              <Link to={`/${eachCategory.category}`} key={eachCategory._id}>
                <Card mode="category" info={eachCategory} />
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Home;
