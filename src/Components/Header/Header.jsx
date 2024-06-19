import React from 'react'
import logo from "./Logonetflix.png"
import { Link } from 'react-router-dom'
import {ImSearch} from "react-icons/im"


const Header=() => {
    return(
    <>
    <nav className="header">
    <img src={logo} alt="logo" className="header-logo" />
    <div>
        <Link to="/tvshow">Tv Show</Link>
        <Link to="/movie">Movie</Link>
        <Link to="/RecentAdded">Recent Added</Link>
        <Link to="/tvshow">My List</Link>
    </div>
    <ImSearch />
    </nav>
    
    </>
  )
}

export default Header