
import "./Card.css";


import WatchLaterButton from "../watch-later-button/WatchLaterButton";
const Card = ({ info, mode }) => {
  

  return (
    <div className="card">
      <section className="card-image-section">
        <img src={info.thumbnail} alt="..." />
      </section>
      <section className="card-info-section">
        {mode !== "category" && <h5>{info.title}</h5>}
        <h6>{info.category}</h6>
        {mode!=='category'&&<span>{info.views} views | {info.creator}</span>}
        {/* {creator&&views&&<span>{views} | {creator}</span>} */}
      </section>
      {mode==='video'&&<button className="watch-later">
        <WatchLaterButton info={info}/></button>}
    </div>
  );
};

export default Card;
