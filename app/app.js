import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'store.js'
import Categories from 'components/Categories.js'
import About from 'components/About.js'
import Layout from 'components/Layout.js'

if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

require('../docs/css/index.scss')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const store = configureStore()

const rootRoute = {
	component: Layout,
	childRoutes: [
	    {
	      path: '/',
	      getComponent (location, cb) {
	        require.ensure([], () => {
	          cb(null, require('./components/Categories').default)
	        })
	      }
	    },
	    {
	      path: '/about',
	      getComponent (location, cb) {
	        require.ensure([], () => {
	          cb(null, require('./components/About').default)
	        })
	      }
	    },
	]
}
render(
  <Provider store={store}>
      <Router history={browserHistory} routes={rootRoute} />
      </Router>
  </Provider>,

  document.getElementById('app')
)
