import React from 'react'

import {useExpenses} from './expenseList.hooks'
import ExpensesPresenter from './expenseList.presenter'

const ExpenseListContainer = () => {
  const expenses = useExpenses()
  return expenses && (
    <ExpensesPresenter
      expenses={expenses}
    />
  )
}

export default ExpenseListContainer
