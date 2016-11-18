import React from 'react'
import { Link } from 'react-router'

import SubCategoryList from 'components/SubCategoryList'

class CategoryList extends React.Component {
  componentWillMount() {
    this.setState({ visible: false, selected: 'all', showMenu: false });
  }

  componentDidMount() {
    this.setState({ showMenu: true })
  }

  show () { this.setState({ visible: true }) }

  handleCategoryClick (e) {
    const selected = e.target.getAttribute('data-tag')
    this.setState({selected: selected })
    this.props.onCategoryClick(selected)
    this.show()
  }

  isActive (value) {
    return (value===this.state.selected) ? 'active':'default'
  }

  handleSubCategoryClick (subCategory) {
    this.props.onSubCategoryClick(subCategory)
  }

  render () {
    const data = this.props.subFilteredList || {}
    const categoryList = Object.keys(data).map((site,idx) => (
      <div key={idx} >
      <hr />
      {data[site].map((item,idx) => (
          <div className='category-div' key={idx}>
            <h4>{item.entity}</h4>
            <h5 className='category-description'>{item.description}</h5>
            <div className='category-links'>
              <a href={item.action_link} id={item.action}> <span id={item.action === 'online activism' ? 'online' : item.action}>&#10145; </span>{item.action}</a>
            </div>
          </div>
      ))}
      </div>
    ))
    return (
      <div>
        <div className='landing'>
          <div id='landing-text'>
            <div id='header'>
              <div id="logo-img" />
              <h1 className='landing-header'>howdoihelp</h1>
            </div>
            <div className={(this.state.showMenu ? 'visible ' : '') + 'links-box'}>
              <div id='links'>
                <a className={this.isActive('government')} onClick={this.handleCategoryClick.bind(this)} data-tag='government'>us</a>
                <a className={this.isActive('climate change')} onClick={this.handleCategoryClick.bind(this)} data-tag='climate change'> climate change</a>
                <a className={this.isActive('education')} onClick={this.handleCategoryClick.bind(this)} data-tag='education'> education</a>
                <a className={this.isActive('equality')} onClick={this.handleCategoryClick.bind(this)} data-tag='equality'> equality</a>

                <a className={this.isActive('healthcare')} onClick={this.handleCategoryClick.bind(this)} data-tag='healthcare'> healthcare</a>
                <a className={this.isActive('International affairs')} onClick={this.handleCategoryClick.bind(this)} data-tag='International affairs'> international affairs</a>
                 <a className={this.isActive('all')} onClick={this.handleCategoryClick.bind(this)} data-tag='all'> all</a>
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
