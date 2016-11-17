import React from 'react'

class SubCategoryList extends React.Component {
  onSubCategoryClick = (e) => {
    this.props.onSubCategoryClick(e.target.getAttribute('data-tag'))
  }
  render () {
    return (
      <div id='sub-category-list'>
        <h6> Filter: </h6>
        <button onClick={this.onSubCategoryClick.bind(this)} data-id="volunteer"> <span className='action pink-bg'></span>In Person</button>
        <button onClick={this.onSubCategoryClick.bind(this)} data-id="online activism"> <span className='action green-bg' ></span> Donate</button>
        <button onClick={this.onSubCategoryClick.bind(this)} data-id="donate"> <span className='action teal-bg'></span> Online</button>
      </div>
    )
  }
}

export default SubCategoryList
