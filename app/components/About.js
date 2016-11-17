import React from 'react'
import { Link } from 'react-router'

class About extends React.Component {
  render () {
    return (
      <div>
        <div className='about-container'>
          <div id='about'>
            <div id='close'><Link to={'/'}>X</Link></div>
            <div id="logo-img" />
            <h5>We've noticed that everyone is feeling a cocktail of emotions due to the election results, but the common theme is that everyone wants to help and many don't know how. On the flip side of that, there are many projects bubbling up that help but not everyone knows about them. That's why we created howdoihelp.us.
            <br/><br/><strong><span>howdoihelp.us</span></strong> is a website that aggregates and organized projects that help preserve and progress the state of the nation on a local, national, and global scale.</h5>
          </div>
        </div>
      </div>
    )
  }
}

export default About
