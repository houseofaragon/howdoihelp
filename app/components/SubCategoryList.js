import React from 'react'

class SubCategoryList extends React.Component {
  componentWillMount() {
    this.setState({ selected: ''});
  }

  onSubCategoryClick = (e) => {
    const selected = e.target.getAttribute('data-id')
    console.log
    this.props.onSubCategoryClick(selected)
    this.setState({selected: selected })
  }

  isActive (value) {
    return (value===this.state.selected) ? 'active':'default'
  }

  render () {
    return (
      <div id='sub-category-list'>
        <h2 id="sub-category-header"> 3 WAYS YOU CAN HELP </h2>
        <hr />
        <button className={this.isActive('in-person')} onClick={this.onSubCategoryClick.bind(this)} data-id="in-person"> <span className='action in-person' onClick={this.onSubCategoryClick.bind(this)} data-id="in-person"></span>In Person</button>
        <button className={this.isActive('donate')} onClick={this.onSubCategoryClick.bind(this)} data-id="donate"> <span className='action donate' onClick={this.onSubCategoryClick.bind(this)} data-id="donate"></span> Donate</button>
        <button className={this.isActive('online')} onClick={this.onSubCategoryClick.bind(this)} data-id="online"> <span className='action online' onClick={this.onSubCategoryClick.bind(this)} data-id="online"></span> Online</button>
        <button onClick={this.onSubCategoryClick.bind(this)} data-id="all"> &#10005; Clear</button>
      </div>
    )
  }
}

export default SubCategoryList
