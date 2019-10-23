import React, {useRef, useState} from 'react'

import {useExpenses} from './expenseList.hooks'
import ExpensesPresenter from './expenseList.presenter'

const ExpenseListContainer = () => {
  const expenses = useExpenses()
  const selectedExpenseRef = useRef(null)
  const [isModalVisible, onSetModalVisibility] = useState(false)
  return expenses && (
    <ExpensesPresenter
      expenses={expenses}
      selectedExpenseRef={selectedExpenseRef}
      isModalVisible={isModalVisible}
      onSetModalVisibility={onSetModalVisibility}
    />
  )
}

export default ExpenseListContainer
