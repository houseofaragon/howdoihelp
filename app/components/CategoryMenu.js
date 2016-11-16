import React from 'react'
import { Link } from 'react-router'

class CategoryMenu extends React.Component {

  handleMenuClick (e) {
    this.props.onMenuClick(e.target.getAttribute('data-tag'))
    this.refs.right.show();
  }
  show () {
      this.setState({ visible: true });
      document.addEventListener("click", this.hide.bind(this));
  }

  render () {
    return (
      <div className='landing'>
        <h1 className='landing-logo'> How do I help?</h1>
        <div id='landing-text'>
          <h1 className='landing-header'>How do I help?</h1>
          <h2>Volunteer. Assemble. Give. Get Active.</h2>
          <a onClick={this.handleMenuClick.bind(this)} data-tag='all'> All</a>
          <a onClick={this.handleMenuClick.bind(this)} data-tag='climate change'> Climate Change</a>
          <a onClick={this.handleMenuClick.bind(this)} data-tag='education'> Education</a>
          <a onClick={this.handleMenuClick.bind(this)} data-tag='equality'> Equality</a>
          <a onClick={this.handleMenuClick.bind(this)} data-tag='government'> Government</a>
          <a onClick={this.handleMenuClick.bind(this)} data-tag='healthcare'> Health Care</a>
          <a onClick={this.handleMenuClick.bind(this)} data-tag='International affairs'> International Affairs</a>
          <a href='https://docs.google.com/forms/d/e/1FAIpQLScONOA_hSg3cPo-rkFruIEfId4K19cHZ5j9kLM-9Rx_8MLFnQ/viewform' id='add-organization'  target="_blank"> I Want to add a way to help!</a>
        </div>
      </div>
    )
  }
}



export default CategoryMenu
