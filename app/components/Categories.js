import React from 'react'
import CategoryList from 'components/CategoryList'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCategoriesList, filterCategoriesList } from '../actions.js'

class Categories extends React.Component {
  constructor (props) {
    super(props)
    this.handleSiteLinkClick = this.handleSiteLinkClick.bind(this)
  }
  componentWillMount() {
    this.props.getCategoriesList()
  }

  handleSiteLinkClick (e) {
    this.props.filterCategoriesList(this.props.list, e)
  }

  render () {
    let categoryList
    if(this.props.filteredList) categoryList = this.props.filteredList || {}
    else categoryList = this.props.list || {}
    return (
      <div>
        <CategoryList onMenuClick={this.handleSiteLinkClick} categoryList={categoryList} ref="right" alignment="right" />
      </div>
    )
  }
}

Categories.propTypes = {
  list: React.PropTypes.object,
  filteredList: React.PropTypes.object,
  getCategoriesList: React.PropTypes.func,
  filterCategoriesList: React.PropTypes.func,
}

const mapStateToProps = (state) => ({
  list: state.list,
  filteredList: state.filteredList
})

const mapDispatchToProps = (dispatch) => ({
  getCategoriesList: bindActionCreators(getCategoriesList,dispatch),
  filterCategoriesList: bindActionCreators(filterCategoriesList,dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Categories)
