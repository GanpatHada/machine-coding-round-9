import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { videos } from '../../Data';
import Card from '../../components/card/Card';
import './ListingPage.css'
const ListingPage = () => {
  const navigate=useNavigate()
  const{category}=useParams();
  const videosInCategory=videos.filter((eachVideo)=>eachVideo.category===category)  
  return (
    <div id='listing-page'>
        <h3>{category}</h3>
        <div id="listing-page-content">
        {videosInCategory.map((eachVideo)=>{
            return(
                <Card key={eachVideo._id} navigate={()=>navigate(`/video/${eachVideo._id}`)} info={eachVideo} video={eachVideo} />
            )
        })}
        </div>   
    </div>
  )
}

export default ListingPage