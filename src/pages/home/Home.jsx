import React from 'react'
import './Home.css'
import Card from '../../components/card/Card'
import { categories } from '../../Data'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate=useNavigate()  
  return (
    <div id="home">
        <h3>Categories</h3>
        <div className='home-content'>
            {
                categories.map(eachCategory=>{
                    return <Card key={eachCategory._id} navigate={()=>navigate(`/${eachCategory.category}`)} info={eachCategory}/>
                })
            }
            
        </div>
    </div>    
  )
}

export default Home