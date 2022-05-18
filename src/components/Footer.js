import React from 'react'
import { CgHome } from "react-icons/cg"
import { BsSearch } from "react-icons/bs"
import { BiMoviePlay } from "react-icons/bi"
import { IoBagHandleOutline } from "react-icons/io5"
import { CgProfile } from "react-icons/cg"

const Footer = () => {
  return (
    <div>
        <footer className="Footer">
      <ul>
      <a className="Home"><CgHome style={{color: "white", fontSize: "30px"}} /></a>
      <a className="Search"><BsSearch style={{color: "white", fontSize: "30px"}} /></a>
      <a className="Reels"><BiMoviePlay style={{ color: "white", fontSize: "35px" }} /></a> 
      <a className="Shop"><IoBagHandleOutline style={{ color: "white", fontSize: "35px" }} /></a>
      <a className="Profile"><CgProfile style={{ color: "white", fontSize: "35px" }} /></a>
      
      
      </ul>
      </footer>
    </div>
  )
}

export default Footer;