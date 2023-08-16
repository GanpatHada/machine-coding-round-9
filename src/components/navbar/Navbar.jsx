import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <header id='top-header'><Link to='/'><span>My</span>Stream</Link></header>
  )
}

export default Navbar