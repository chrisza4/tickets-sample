import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import { Redirect } from 'react-router'

import CssBaseline from '@material-ui/core/CssBaseline'
import TicketsPage from './react/pages/TicketsPage'
import UsersPage from './react/pages/UsersPage'
import LoginPage from './react/pages/LoginPage'
import MainLayout from './react/layout/MainLayout'
import AuthorizedProvider from './react/advance/AuthorizedProvider'
import store from './store'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <BrowserRouter>
        <AuthorizedProvider
          render={authorized => {
            if (authorized) return null
            return <Route path="/login" exact component={LoginPage} />
          }}
        />
        <AuthorizedProvider
          render={authorized => {
            if (!authorized) return null
            return (
              <MainLayout>
                <Route
                  path="/"
                  exact
                  render={() => <Redirect to="/tickets" />}
                />
                <Route path="/tickets" exact component={TicketsPage} />
                <Route path="/users" exact component={UsersPage} />
              </MainLayout>
            )
          }}
        />
      </BrowserRouter>
    </Provider>
  )
}

export default App
