import React from 'react'
import "../navbar.css"
import "../Home.css"

export default function Navbar() {
  return (
    <nav>
        <div className='nav1'>
        <h2>Jonathan Mmadu.</h2>
        </div>

        <div className='nav-a'>
        <a href='#second-section' id=''>About Me</a>
        <a href='#skill-section'>My Skills</a>
        <a href='#fourth-section'>Contact</a>
        </div>
    </nav>
  )
}
