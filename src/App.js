import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import { Redirect } from 'react-router'

import CssBaseline from '@material-ui/core/CssBaseline'
import TicketsPage from './react/pages/TicketsPage'
import UsersPage from './react/pages/UsersPage'
import MainLayout from './react/layout/MainLayout'
import store from './store'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <MainLayout>
        <BrowserRouter>
          <Route path="/" exact render={() => <Redirect to="/tickets" />} />
          <Route path="/tickets" exact component={TicketsPage} />
          <Route path="/users" exact component={UsersPage} />
        </BrowserRouter>
      </MainLayout>
    </Provider>
  )
}

export default App
