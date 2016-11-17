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
    console.log('show')
    this.setState({ menuVisible: !this.state.menuVisible });
  }

  render () {
    return (
      <div className='header'>
        <h1 className='landing-logo' onClick={this.handleLogoClick.bind(this)}></h1>
        <div refs='menu' className={(this.state.menuVisible ? "visible " : "") + 'menu'}>
          <Link to={'/about'}> about </Link>
          <a href='https://www.facebook.com/howdoihelpus/?hc_ref=SEARCH&fref=nf'> <div className='social' id='facebook' alt='howdoihelpus-facebook' /></a>
          <a href='https://instagram.com/howdoihelpus'> <div className='social' id='instagram' alt='howdoihelpus-instagram' /></a>
          <a href='mailto:howdoihelpus@gmail.com'> <div href='https://twitter.com/howdoihelpus' className='social' id='email' alt='howdoihelpus-email' /></a>
          <a href=''> <div href='' className= 'social' id='share' alt='howdoihelpus-share' /></a>
        </div>
      </div>
    )
  }
}

export default Header
