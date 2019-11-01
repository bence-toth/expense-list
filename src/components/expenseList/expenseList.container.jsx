import React from 'react'

import {useExpenses, useExpenseSelection} from './expenseList.hooks'
import {onPreselectExpense, onSelectExpense, onUnselectExpense} from './expenseList.actionCreators'
import ExpensesPresenter from './expenseList.presenter'

const ExpenseListContainer = () => {
  const {
    expenses,
    isFetchingExpenses,
    shouldFetchMoreExpenses,
    onFetchMoreExpenses
  } = useExpenses()
  const {
    preselectedExpenseId,
    selectedExpenseId,
    selectedExpenseRef,
    dispatchSelectionAction
  } = useExpenseSelection()
  return expenses && (
    <ExpensesPresenter
      expenses={expenses}
      selectedExpenseRef={selectedExpenseRef}
      preselectedExpenseId={preselectedExpenseId}
      selectedExpenseId={selectedExpenseId}
      isFetchingExpenses={isFetchingExpenses}
      shouldFetchMoreExpenses={shouldFetchMoreExpenses}
      onFetchMoreExpenses={onFetchMoreExpenses}
      onPreselectExpense={({id}) => {
        dispatchSelectionAction(onPreselectExpense({id}))
      }}
      onSelectExpense={({id}) => {
        dispatchSelectionAction(onSelectExpense({id}))
      }}
      onUnselectExpense={() => {
        dispatchSelectionAction(onUnselectExpense())
      }}
    />
  )
}

export default ExpenseListContainer
