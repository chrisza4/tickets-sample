import React from 'react'
import PropTypes from 'prop-types'

export default class AuthorizedProvider extends React.Component {
  static propTypes = {
    render: PropTypes.func,
    localStorage: PropTypes.object,
  }
  static defaultProps = {
    localStorage: localStorage,
  }

  render() {
    const authorized = !!this.props.localStorage.getItem('access_token')
    return this.props.render(authorized)
  }
}
