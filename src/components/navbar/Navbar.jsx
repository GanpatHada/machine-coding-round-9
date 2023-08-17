import React, { useContext } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { DataContext } from '../../context/DataContext'
const Navbar = () => {
  const navigate=useNavigate()
  const{search,setSearch}=useContext(DataContext);
  return (
    <header id='top-header'><Link to='/'><span>My</span>Stream</Link>
    <div id="input-wrapper" onClick={()=>navigate('/explore')}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search video by title"
          />
        </div>
    </header>
  )
}

export default Navbar