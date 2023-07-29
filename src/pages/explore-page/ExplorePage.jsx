import React, { useState } from 'react'
import './ExplorePage.css'
import { videos } from '../../Data'
import Card from '../../components/card/Card'
const ExplorePage = () => {
const[search,setSearch]=useState('') 
  const filterVideos=()=>{
    let filteredVideos=videos;
    filteredVideos=filteredVideos.filter(eachVideo=>eachVideo.title.toLowerCase().includes(search.toLowerCase()))
    return filteredVideos

}  

  return (
    <div id='explore-page'>
      <h3>Explore</h3>
      <div id="explore-page-content">
          <div>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} type="search" placeholder='Search video by title' />
          </div>
          {filterVideos().length!==0?<div>
          {
            filterVideos().map(eachVideo=>{
                return <Card key={eachVideo._id} video={eachVideo} info={eachVideo} />
            })
          }
          </div>: <div>No videos found</div>}  
      </div>
      </div>
  )
}

export default ExplorePage