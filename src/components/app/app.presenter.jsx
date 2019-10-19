import React from 'react'

import ExpensesListContainer from 'components/expenseList/expenseList.container'

import './app.styles.css'

const App = () => (
  <main>
    <div className='expensesControlsWrapper' />
    <div className='expensesListWrapper'>
      <ExpensesListContainer />
    </div>
  </main>
)

export default App
