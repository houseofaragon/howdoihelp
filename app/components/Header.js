import React from 'react'
import { Link } from 'react-router'

class Header extends React.Component {
  componentWillMount() {
    this.setState({ menuVisible: false});
  }

  handleLogoClick () { this.showMenu() }

  hide () {
    document.removeEventListener("click", this.hide.bind(this));
    this.setState({ visible: !this.state.visible });
  }

  showMenu () {
    this.setState({ menuVisible: !this.state.menuVisible });
  }

  render () {
    let path
    (location.pathname === '/about' ? path= <Link to={'/'}><div className='dot blue' />home </Link> : path= <Link to={'/about'}><div className='dot blue' />about </Link>)
    return (
      <div className='header'>
        <div className='landing-logo' onClick={this.handleLogoClick.bind(this)}>
          <img src={require('../../docs/css/images/hamburger-white.png')} />
        </div>
        <div className={(this.state.menuVisible ? "visible " : "") + 'menu'}>
          {path}
          <a target="_blank" href='https://instagram.com/howdoihelpus'>
            <div className='dot green' />
            <div className='social' id='instagram' alt='howdoihelpus-instagram' />instagram</a>
          <a target="_blank" href='https://www.facebook.com/howdoihelpus/?hc_ref=SEARCH&fref=nf'>
            <div className='dot light-purple' />
            <div className='social' id='facebook' alt='howdoihelpus-facebook' />facebook</a>
          <a target="_blank" href='https://www.twitter.com/howdoihelpus/'>
            <div className='dot yellow' />
            <div className='social' id='twitter' alt='howdoihelpus-twitter' />twitter</a>
          <a target="_blank" href='http://www.facebook.com/sharer.php?u=http://howdoihelp.us'>
            <div className='dot pink' />
            <div className= 'social' id='share' alt='howdoihelpus-share' />share</a>
          <a target="_blank" href='https://docs.google.com/forms/d/e/1FAIpQLScONOA_hSg3cPo-rkFruIEfId4K19cHZ5j9kLM-9Rx_8MLFnQ/viewform'>
            <div className='dot light-grey' />
            <div className= 'social' id='submit' alt='howdoihelpus-submit' />submit a way to help</a>
          <a target="_blank" href='mailto:'>
            <div className='dot orange' />
            <div href='https://twitter.com/howdoihelpus' className='social' id='email' alt='howdoihelpus-email' />howdoihelpus@gmail.com</a>
        </div>

      </div>
    )
  }
}


export default Header
