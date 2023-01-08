import React from 'react'
import {AiOutlineCopyrightCircle} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs";
import {AiFillTwitterCircle} from "react-icons/ai";
import {AiFillPhone} from "react-icons/ai";
import {SiWhatsapp} from "react-icons/si";


const footer = () => {
  return (
    <div>
       <footer>
        <div>
        <ul>
            <li><h5><AiOutlineCopyrightCircle /> 2023</h5></li>
            <li><h4>Contact:</h4></li>
            <li><a href='https://www.facebook.com/jude.otobrise' target="_blank"><BsFacebook /></a></li>
            <li><a href='https://www.instagram.com/judeotobrise/' target="_blank"><BsInstagram /></a></li>
            <li><a href='https://twitter.com/OtobriseJude' target= "_blank"><AiFillTwitterCircle /></a></li>
            <li><a href='https://wa.me/+2348068108571?text = Hello! Leave a message' target="_blank"><SiWhatsapp /></a></li>
            <li><p className='pfoot'><AiFillPhone /> +2348068108571</p></li>
        </ul>
        </div>
        </footer> 
    </div>
  )
}

export default footer