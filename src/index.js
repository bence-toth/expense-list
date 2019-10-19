import React from 'react'
import ReactDOM from 'react-dom'

import ExpensesContainer from './components/expenses/expenses.container'
import * as serviceWorker from './serviceWorker'

import './index.css'
import './common.css'

ReactDOM.render(
  <ExpensesContainer />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
