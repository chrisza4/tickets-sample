import React from 'react'
import logo from './logo.svg'
import CssBaseline from '@material-ui/core/CssBaseline'
import TicketsPage from './react/pages/TicketsPage'
import MainLayout from './react/layout/MainLayout'
import './App.css'

function App() {
  return (
    <div>
      <CssBaseline />
      <MainLayout>
        <TicketsPage />
      </MainLayout>
    </div>
  )
}

export default App
