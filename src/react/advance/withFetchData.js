import React from 'react'
import PropTypes from 'prop-types'
import LoadState from '../../loadState/LoadState'
const withFetchData = (fetchFunction, loadingState) => BaseComponent => {
  return class WrappedComponent extends React.Component {
    static propTypes = {
      loadState: PropTypes.string,
    }
    componentDidMount() {
      if (this.props.loadState === LoadState.NONE) {
        return fetchFunction()
      }
    }
    render() {
      if (!loadingState) {
        return (
          <div className="ax-danger">Error: Please provide loading state</div>
        )
      }
      if (this.props.loadState === LoadState.LOADING) {
        return loadingState
      }
      return <BaseComponent {...this.props} />
    }
  }
}
export default withFetchData
