import React from 'react'
import Footer from './Footer'

const Navbar = (props) => {
  return (
    <div>
      <ul >
        <div className="log">{props.LogoText}</div>

        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
      <Footer/>
    </div>
  )
}

export default Navbar
