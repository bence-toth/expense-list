import React from 'react'

import {useExpenses, useExpenseSelection, useCurrencyConversion} from './expenseList.hooks'
import {onPreselectExpense, onSelectExpense, onUnselectExpense} from './expenseList.actionCreators'
import {filterExpenses} from './expenseList.container.utility'
import ExpensesPresenter from './expenseList.presenter'

const ExpenseListContainer = ({
  categoryFilters,
  currencyFilters,
  searchQuery
}) => {
  const {
    expenses,
    isFetchingExpenses,
    shouldFetchMoreExpenses,
    onFetchMoreExpenses,
    onSetExpenseComment,
    onSetExpenseReceipts
  } = useExpenses()
  const {
    preselectedExpenseId,
    selectedExpenseId,
    selectedExpenseRef,
    dispatchSelectionAction
  } = useExpenseSelection()
  const currencyExchangeData = useCurrencyConversion()
  return expenses && (
    <ExpensesPresenter
      currencyExchangeData={currencyExchangeData}
      expenses={filterExpenses({
        expenses,
        categoryFilters,
        currencyFilters,
        searchQuery
      })}
      selectedExpenseRef={selectedExpenseRef}
      preselectedExpenseId={preselectedExpenseId}
      selectedExpenseId={selectedExpenseId}
      isFetchingExpenses={isFetchingExpenses}
      shouldFetchMoreExpenses={shouldFetchMoreExpenses}
      onFetchMoreExpenses={onFetchMoreExpenses}
      onSetExpenseComment={onSetExpenseComment}
      onSetExpenseReceipts={onSetExpenseReceipts}
      onPreselectExpense={({id}) => {
        dispatchSelectionAction(onPreselectExpense({id}))
      }}
      onSelectExpense={({id}) => {
        dispatchSelectionAction(onSelectExpense({id}))
      }}
      onUnselectExpense={() => {
        dispatchSelectionAction(onUnselectExpense())
      }}
      defaultCurrency='EUR'
    />
  )
}

export default ExpenseListContainer
