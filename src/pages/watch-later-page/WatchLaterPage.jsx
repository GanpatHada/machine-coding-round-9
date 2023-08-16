import React, { useContext } from 'react'
import './WatchLaterPage.css'
import { DataContext } from '../../context/DataContext'
import { Link } from 'react-router-dom'
import Card from '../../components/card/Card'
const WatchLaterPage = () => {
  const{watchLaterList}=useContext(DataContext)
  return (
    <main id='watch-later-page'>
        <h3>Watch Later</h3>
        <div className="content">
          {
            watchLaterList.map(eachVideo=><Link to={`/video/${eachVideo._id}`}  key={eachVideo._id}>
              <Card info={eachVideo} mode='video'/>
            </Link>)
          } 
        </div>
    </main>
  )
}

export default WatchLaterPage