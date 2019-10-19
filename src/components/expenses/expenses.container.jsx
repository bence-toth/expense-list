import React from 'react'

import {useExpenses} from './expenses.hooks'
import ExpensesPresenter from './expenses.presenter'

const ExpensesContainer = () => {
  const expenses = useExpenses()
  return expenses && (
    <ExpensesPresenter
      expenses={expenses}
    />
  )
}

export default ExpensesContainer
