import React from 'react'
import profilePicture from '../assets/profile-picture.png'
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import '../styles/Header.css'

import { FaInstagram } from "react-icons/fa";

function Header() {
  return (
    <header>
        <div className='header-jumbotron'>
            <img src={profilePicture}/>
            <h3>Sigit Sugiantoro</h3>
            <p>Programmer - DevOps</p>
            <div className='socialMedia'>
               <a href=''><FaInstagram /></a> 
               <a href=''><FaTiktok /></a>
               <a href=''><FaTwitter /></a>
               <a href=''><FaFacebookF /></a>
            </div>
        </div>
    </header>
  )
}

export default Header