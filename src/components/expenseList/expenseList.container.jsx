import React from 'react'

import {useExpenses, useExpenseSelection, useCurrencyConversion} from './expenseList.hooks'
import {onPreselectExpense, onSelectExpense, onUnselectExpense} from './expenseList.actionCreators'
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
      expenses={
      // TODO: Fetch new expenses recursively if items after
      //       filtering don't fill up the scrollable area
        expenses
          // Apply category filters
          .map(expenseGroup => ({
            ...expenseGroup,
            expenseItems:
              expenseGroup.expenseItems
                .filter(expense => categoryFilters[expense.category || 'unknown'])
          }))
          // Apply currency filters
          .map(expenseGroup => ({
            ...expenseGroup,
            expenseItems:
              expenseGroup.expenseItems
                .filter(expense => currencyFilters[
                  expense.amount.currency
                ])
          }))
          // Apply search query filter
          .map(expenseGroup => ({
            ...expenseGroup,
            expenseItems:
              expenseGroup.expenseItems
                .filter(expense => {
                  if (searchQuery.trim().length === 0) {
                    return true
                  }
                  const needles = searchQuery
                    .toLowerCase()
                    .split(' ')
                    .filter(({length}) => (length > 0))
                  const haystacks = [
                    expense.merchant.toLowerCase(),
                    expense.user.email.toLowerCase(),
                    expense.user.first.toLowerCase(),
                    expense.user.last.toLowerCase()
                  ]
                  return needles.every(needle =>
                    haystacks.some(haystack =>
                      haystack.includes(needle)))
                })
          }))
          // Delete empty groups
          .filter(({expenseItems}) => (expenseItems.length > 0))
        }
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
