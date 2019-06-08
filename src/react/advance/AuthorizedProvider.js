import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectAccessToken } from '../../auth/selectors/AuthSelectors'

export class AuthorizedProvider extends React.Component {
  static propTypes = {
    render: PropTypes.func,
    token: PropTypes.string,
  }

  render() {
    return this.props.render(!!this.props.token)
  }
}

export default connect(state => ({
  token: selectAccessToken(state),
}))(AuthorizedProvider)
