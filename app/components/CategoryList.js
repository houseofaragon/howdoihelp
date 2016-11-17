import React from 'react'
import { Link } from 'react-router'
import SubCategoryList from 'components/SubCategoryList'

class CategoryList extends React.Component {
  componentWillMount() {
    this.setState({ visible: false});
  }

  show () { this.setState({ visible: true }) }


  handleCategoryClick (e) {
    this.props.onCategoryClick(e.target.getAttribute('data-tag'))
    this.show()
  }

  handleSubCategoryClick (e) {
    this.props.onSubCategoryClick(e)
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
          <div id='landing-text'>
            <div id='header'>
              <div id="logo-img" />
              <h1 className='landing-header'>howdoihelp<span id="underline"></span>?</h1>
            </div>
            <hr id='shadow'/>
            <div id='links-box'>
              <div id='links'>
                <a onMouseOver={this.handleCategoryClick.bind(this)} data-tag='climate change'> Climate Change</a>
                <a onMouseOver={this.handleCategoryClick.bind(this)} data-tag='education'> Education</a>
                <a onMouseOver={this.handleCategoryClick.bind(this)} data-tag='equality'> Equality</a>
                <a onMouseOver={this.handleCategoryClick.bind(this)} data-tag='government'> Government</a>
                <a onMouseOver={this.handleCategoryClick.bind(this)} data-tag='healthcare'> Health Care</a>
                <a onMouseOver={this.handleCategoryClick.bind(this)} data-tag='International affairs'> International Affairs</a>
                <a onMouseOver={this.handleCategoryClick.bind(this)} data-tag='all'> All</a>
              </div>
            </div>
          </div>
          <a href='https://docs.google.com/forms/d/e/1FAIpQLScONOA_hSg3cPo-rkFruIEfId4K19cHZ5j9kLM-9Rx_8MLFnQ/viewform' id='add-organization'  target="_blank"> submit a way to help</a>
        </div>
        <div className={(this.state.visible ? "visible " : "") + 'landing-side-grid'}>
          <SubCategoryList onSubCategoryClick={this.handleSubCategoryClick.bind(this)}/>
          <div id='category-list'>
            {categoryList}
          </div>
        </div>
      </div>
    )
  }
}

export default CategoryList
