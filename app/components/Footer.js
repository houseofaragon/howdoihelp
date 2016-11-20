import React from 'react'
import { Link } from 'react-router'

class Footer extends React.Component {
  render () {
    return (
      <div id='footer'>
        <a href='https://docs.google.com/forms/d/e/1FAIpQLScONOA_hSg3cPo-rkFruIEfId4K19cHZ5j9kLM-9Rx_8MLFnQ/viewform' id='add-organization'  target="_blank"> submit a way to help</a>
        <div className='dots'>
          <div className='dot blue' />
          <div className='dot green' />
          <div className='dot light-purple' />
          <div className='dot yellow' />
          <div className='dot orange' />
          <div className='dot pink' />
          <div className='dot blue' />
          <div className='dot green' />
          <div className='dot light-purple' />
          <div className='dot yellow' />
          <div className='dot orange' />
          <div className='dot pink' />
        </div>
      </div>
    )
  }
}

export default Footer
