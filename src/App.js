import React from 'react'
import logo from './logo.svg'
import CssBaseline from '@material-ui/core/CssBaseline'
import TicketsPage from './react/pages/TicketsPage'
import UsersPage from './react/pages/UsersPage'
import MainLayout from './react/layout/MainLayout'
import { BrowserRouter, Route } from 'react-router-dom'
import { Redirect } from 'react-router'
import './App.css'

function App() {
  return (
    <div>
      <CssBaseline />
      <MainLayout>
        <BrowserRouter>
          <Route path="/" exact render={() => <Redirect to="/tickets" />} />
          <Route path="/tickets" exact component={TicketsPage} />
          <Route path="/users" exact component={UsersPage} />
        </BrowserRouter>
      </MainLayout>
    </div>
  )
}

export default App
