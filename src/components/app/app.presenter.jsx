import React from 'react'

import Expenses from 'components/expenses/expenses.container'

import TopBar from './topBar/topBar.presenter'

import './app.styles.css'

const App = () => (
  <>
    <TopBar />
    <main>
      <Expenses />
    </main>
  </>
)

export default App
