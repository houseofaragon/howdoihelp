import React from 'react'

class SubCategoryList extends React.Component {
  componentWillMount() {
    this.setState({ selected: ''});
  }

  onSubCategoryClick = (e) => {
    const selected = e.target.getAttribute('data-id')
    this.props.onSubCategoryClick(selected)
    this.setState({selected: selected })
  }

  isActive (value) {
    console.log('value', value)
    return (value===this.state.selected) ? 'active':'default'
  }

  render () {
    return (
      <div id='sub-category-list'>
        <h6> Filter: </h6>
        <button className={this.isActive('volunteer')} onClick={this.onSubCategoryClick.bind(this)} data-id="volunteer"> <span className='action pink-bg'></span>In Person</button>
        <button className={this.isActive('donate')} onClick={this.onSubCategoryClick.bind(this)} data-id="donate"> <span className='action green-bg' ></span> Donate</button>
        <button className={this.isActive('online activism')} onClick={this.onSubCategoryClick.bind(this)} data-id="online activism"> <span className='action teal-bg'></span> Online</button>
        <button onClick={this.onSubCategoryClick.bind(this)} data-id="all"> &#10005; Remove</button>

      </div>
    )
  }
}

export default SubCategoryList
