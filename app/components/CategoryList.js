import React from 'react'
import { Link } from 'react-router'
import SubCategoryList from 'components/SubCategoryList'

class CategoryList extends React.Component {

  componentWillMount() {
    this.setState({ visible: false });
  }
  show () {
    this.setState({ visible: true });
    //document.addEventListener("click", this.hide.bind(this));
  }

  hide () {
    document.removeEventListener("click", this.hide.bind(this));
    this.setState({ visible: !this.state.visible });
  }

  handleMenuClick (e) {
    this.props.onMenuClick(e.target.getAttribute('data-tag'))
    this.show()
  }

  render () {
    const data = this.props.categoryList || {}
    const categoryList = Object.keys(data).map((site,idx) => (
      <div key={idx} >
      <h4 className='category-header'>{site}</h4>
      {data[site].map((item,idx) => (
        <a key={idx} href={item.action_link} target="_blank">
          <div className='category-div'>
            <h4>{item.entity}</h4>
            <h5 className='category-description'>{item.description}</h5>
            <div className='category-links'>
              <span className='action' id={item.action}></span>
              <h6 id={item.action}>{item.action}</h6>
            </div>
          </div>
        </a>
      ))}
      </div>
    ))
    return (
      <div>
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
        <button className={(this.state.visible ? "visible " : "")} id='close' onClick={this.hide.bind(this)}> X </button>
        <div className={(this.state.visible ? "visible " : "") + 'landing-side-grid'}>
          <SubCategoryList />
          <div id='category-list'>
            {categoryList}
          </div>
        </div>
      </div>
    )
  }
}

export default CategoryList
