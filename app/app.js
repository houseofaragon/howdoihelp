import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'store.js'

import Categories from 'components/Categories.js'
import About from 'components/About.js'
import Layout from 'components/Layout.js'

require('../docs/css/index.scss')

const { Router, Route, IndexRoute, browserHistory } = require('react-router')

const store = configureStore()

render(
  <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={Layout} >
          <IndexRoute component={Categories} />
          <Route path='/about' component={About} />
        </Route>
      </Router>
  </Provider>,

  document.getElementById('app')
)
