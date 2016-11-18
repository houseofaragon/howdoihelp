import React from 'react'
import CategoryList from 'components/CategoryList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCategoriesList, filterByCategory, filterBySubCategory } from '../actions.js'
require('../../docs/css/index.scss')

class Categories extends React.Component {
  constructor (props) {
    super(props)
    this.handleCategoryClick = this.handleCategoryClick.bind(this)
    this.handleSubCategoryClick = this.handleSubCategoryClick.bind(this)
  }
  componentWillMount() {
    this.props.getCategoriesList()
  }

  handleCategoryClick (e) {
    this.props.filterByCategory(this.props.list, e)
  }

  handleSubCategoryClick (subCategory) {
    this.props.filterBySubCategory(this.props.filteredList, subCategory)
  }

  render () {
    let categoryList
    if(this.props.filteredList) {
      console.log('we have a filtered List')
      categoryList = this.props.filteredList || {}
      if(this.props.subFilteredList) categoryList = this.props.subFilteredList || {}
    }
    else categoryList = this.props.list || {}
    console.log('Category List' , categoryList)
    return (
      <div>
        <CategoryList
          subFilteredList={categoryList}
          onCategoryClick={this.handleCategoryClick}
          onSubCategoryClick={this.handleSubCategoryClick}
          ref="right" alignment="right" />
      </div>
    )
  }
}

Categories.propTypes = {
  list: React.PropTypes.object,
  filteredList: React.PropTypes.object,
  subFilteredList: React.PropTypes.object,
  getCategoriesList: React.PropTypes.func,
  filterByCategory: React.PropTypes.func,
  filterBySubCategory: React.PropTypes.func
}

const mapStateToProps = (state) => ({
  list: state.list,
  filteredList: state.filteredList,
  subFilteredList: state.subFilteredList
})

const mapDispatchToProps = (dispatch) => ({
  getCategoriesList: bindActionCreators(getCategoriesList,dispatch),
  filterByCategory: bindActionCreators(filterByCategory,dispatch),
  filterBySubCategory: bindActionCreators(filterBySubCategory,dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Categories)
