import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ApiProvider extends Component {
  static propTypes = {
    renderLoading: PropTypes.func,
    children: PropTypes.func,
    fetch: PropTypes.func,
  }

  state = {
    loading: true,
    data: null,
  }

  componentDidMount = async () => {
    const data = await this.props.fetch()
    this.setState({ loading: false, data })
  }

  render() {
    if (this.state.loading) {
      return this.props.renderLoading()
    }
    return this.props.children(this.state.data)
  }
}

export default ApiProvider
