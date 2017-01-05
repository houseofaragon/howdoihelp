import React from 'react'
import { Link } from 'react-router'

const About = (props) => (
  <div>
    <div className='about-container'>
      <div id='about'>
        <div id="logo-img"><img src={require('../../docs/css/images/logo.png')} /></div>
        <h5>We've noticed that everyone is feeling a cocktail of emotions due to the election results, but the common theme is that everyone wants to help and many don't know how. On the flip side of that, there are many projects bubbling up that help but not everyone knows about them. That's why we created howdoihelp.us.
        <br/><br/><strong><span>howdoihelp.us</span></strong> is a website that aggregates and organizes projects that help preserve and progress the state of the nation on a local, national, and global scale.</h5>
        <a href='https://docs.google.com/forms/d/e/1FAIpQLScONOA_hSg3cPo-rkFruIEfId4K19cHZ5j9kLM-9Rx_8MLFnQ/viewform' id='add-organization'  target="_blank"> submit a way to help</a>
      </div>
    </div>
  </div>
)

export default About
