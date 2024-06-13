import React from 'react'
import {AiFillGithub,AiFillInstagram, AiFillTwitterCircle,AiFillYoutube} from "react-icons/ai"
import "../components/Footer.css"
const Footer = () => {
  return (
    <div className='footer' >
    <div className="footer-content">
    <h1> My Blog App  </h1>
      <p> Created By @deepanshu Rajput  </p>
    </div>
     <div className="footer-icons">
      <AiFillGithub/> 
      <AiFillInstagram/>
      <AiFillTwitterCircle/>
      <AiFillYoutube/> 
     </div>
    </div>
  )
}

export default Footer