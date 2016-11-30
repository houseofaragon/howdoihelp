import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
const Layout = (props) => (
  <div className='container'>
    <Header />
    <div id='shadow-top' />
    <div id='shadow-bottom' />
    {props.children}
    <Footer />
  </div>
)
const { element } = React.PropTypes

Layout.propTypes = {
  children: element
}

export default Layout
