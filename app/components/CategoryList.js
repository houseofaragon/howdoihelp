import React from 'react'
import { Link } from 'react-router'
import SubCategoryList from 'components/SubCategoryList'

class CategoryList extends React.Component {
  componentWillMount() {
    this.setState({ visible: false, selected: 'government', showMenu: true });
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

  closeSideBar () {
    this.setState({ visible: false })
  }

  render () {
    const data = this.props.subFilteredList || {}
    const categoryList = Object.keys(data).map((site,idx) => (
      <div key={idx} >
      {Object.keys(data[site]).map((item,idx) => (
          <div className='category-div' key={idx}>
            <h4>{item}</h4>
            <h5 className='category-description'>{data[site][item].description}</h5>
            <div className='category-links'>
              {Object.keys(data[site][item].actions).map(i => (
                <a target="_blank" href={data[site][item].actions[i].link}
                   id={data[site][item].actions[i].action}>
                  {data[site][item].actions[i].action === 'in-person' ? 'in person' : data[site][item].actions[i].action }<span id={data[site][item].actions[i].action}>
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i></span>
                </a>
              ))}
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
              <div id="logo-img">
                <svg version="1.1" id="Layer_1" x="0px" y="0px" width="144px" height="144px" viewBox="0 0 94.5 92.5" enableBackground="new 0 0 94.5 92.5">
                  <g><g><path fill="#FFFFFF" d="M39.786,23.172h14.629v14.629h14.622v14.621H54.415v14.623H39.786V52.422H25.164V37.801h14.622V23.172z"/></g>
                    <polygon fill="#FFFFFF" points="66.187,57.367 66.189,32.85 78.447,45.109  "/></g>
                  <circle fill="none" stroke="#FFFFFF" strokeWidth="5" strokeMiterLimit="10" cx="47.85" cy="46.107" r="42.264"/>
                </svg>
              </div>
              <h1 className='landing-header'>howdoihelp</h1>
            </div>
            <div className='mouse-icon'><div className='wheel'></div></div>
          </div>
          <div className={(this.state.showMenu ? 'visible ' : '') + 'links-box'}>
              <div id='links'>
                <a className={this.isActive('government')} onClick={this.handleCategoryClick.bind(this)} data-tag='government'>us</a>
                <a className={this.isActive('climate change')} onClick={this.handleCategoryClick.bind(this)} data-tag='climate change'> climatechange</a>
                <a className={this.isActive('education')} onClick={this.handleCategoryClick.bind(this)} data-tag='education'> education</a>
                <a className={this.isActive('equality')} onClick={this.handleCategoryClick.bind(this)} data-tag='equality'> equality</a>
                <a className={this.isActive('healthcare')} onClick={this.handleCategoryClick.bind(this)} data-tag='healthcare'> healthcare</a>
                <a className={this.isActive('foreignpolicy')} onClick={this.handleCategoryClick.bind(this)} data-tag='foreignpolicy'> foreignpolicy</a>
                <a className={this.isActive('all')} onClick={this.handleCategoryClick.bind(this)} data-tag='all'> all</a>
              </div>
            </div>
        </div>
        <div className={(this.state.visible ? "visible " : "")} id="close" onClick={this.closeSideBar.bind(this)}> &#10005; </div>
        <div className={(this.state.visible ? "visible " : "") + 'landing-side-grid'}>
          <SubCategoryList closeSideBar={this.closeSideBar.bind(this)} onSubCategoryClick={this.handleSubCategoryClick.bind(this)}/>
          <div id='category-list'>
            {categoryList}
          </div>
        </div>
        <div id='shadow-top' />
        <div id='shadow-bottom' />
      </div>
    )
  }
}

export default CategoryList
