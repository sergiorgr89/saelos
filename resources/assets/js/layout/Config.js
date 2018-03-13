//import libs
import React from 'react'
import PropTypes from 'prop-types'

// import components
import Main from '../Main'
import Navigation from '../common/navigation'

const ConfigLayout = ({ children }) => (
  <Main>
    <div className="row no-gutters">
      <Navigation/>
      { children }
    </div>
  </Main>
)

ConfigLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ConfigLayout