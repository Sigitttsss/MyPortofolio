import React from 'react'
import '../styles/About.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { MdOutlinePhp } from "react-icons/md";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";


function About() {
  return (
   <section id='about'>
    <div className='wrapper'>
        <h3>About</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, eveniet.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum nemo cum eligendi ullam aspernatur consectetur illo ipsum perferendis animi reiciendis?</p>
        <h4>Programming Languange & Tools</h4>
        <div className='skills'>
        <FaHtml5 />
        <FaCss3Alt />
        <IoLogoJavascript />
        <MdOutlinePhp />
        <SiTailwindcss />
        <FaReact />
        <FaGitAlt />
        </div>
    </div>
   </section>
  )
}

export default About