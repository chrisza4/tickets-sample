import React from 'react'

const withLoginRequest = (
  loginFunc,
  injectedLocalStorage = localStorage
) => WrappedComponent => {
  return class WithLogin extends React.Component {
    state = {
      errorMessage: '',
    }
    onLogin = async (username, password) => {
      const loginResult = await loginFunc(username, password)
      if (loginResult.ok) {
        localStorage.setItem('access_token', loginResult.token)
      } else {
        this.setState({
          errorMessage: loginResult.err,
        })
      }
    }
    render() {
      return (
        <WrappedComponent
          onLogin={this.onLogin}
          errorMessage={this.state.errorMessage}
          {...this.props}
        />
      )
    }
  }
}

export default withLoginRequest
