/*eslint-disable */
export const SET_CATEGORIES_LIST = 'SET_CATEGORIES_LIST'
export const SET_FILTERED_CATEGORIES_LIST = 'SET_FILTERED_CATEGORIES_LIST'
export const SET_FILTERED_SUB_CATEGORIES_LIST = 'SET_FILTERED_SUB_CATEGORIES_LIST'

import { groupBy, pickBy } from 'lodash'
import promise from 'es6-promise'
promise.polyfill()
import fetch from 'isomorphic-fetch'

export const setCategoriesList = (categoriesList) => (
  {
    type: 'SET_CATEGORIES_LIST',
    list: categoriesList
  }
)

export const setFilteredCategoriesList = (filteredList) => (
  {
    type: 'SET_FILTERED_CATEGORIES_LIST',
    filteredList: filteredList
  }
)

export const setFilteredSubCategoriesList = (filteredList) => (
  {
    type: 'SET_FILTERED_SUB_CATEGORIES_LIST',
    filteredList: filteredList
  }
)

export const filterByCategory = (list, filter) => (dispatch) => {
  let filteredList
  if (filter === 'all') filteredList = list
  else filteredList = _.pickBy(list, (value, key) =>  _.startsWith(key, filter))
  dispatch(setFilteredCategoriesList(filteredList))
}

export const filterBySubCategory = (filteredList, filter) => (dispatch) => {
  let filteredList
  if (filter === 'all') filteredList = filteredList
  else filteredList = _.pickBy(filteredList, (value, key) =>  _.startsWith(value.action, filter))
  dispatch(setFilteredSubCategoriesList(filteredList))
}

export const getCategoriesList = () => (dispatch) => {
  const apiURL = 'https://s3.amazonaws.com/howdoihelp.us/entities.json'
  fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      const list = _.groupBy(data, "category")
      dispatch(setCategoriesList(list))
    })
    .catch((error) => console.log('request failed', error))
}


