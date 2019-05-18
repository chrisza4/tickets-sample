import React from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'

const Link = props => {
  return (
    <RouterLink to={props.to} style={{ textDecoration: 'none' }}>
      {props.children}
    </RouterLink>
  )
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default Link
