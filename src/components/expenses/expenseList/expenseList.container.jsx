import React from 'react'
import {string, bool, number, shape} from 'prop-types'

import {useExpenses, useExpenseSelection, useAutoFetchMoreExpenses} from './expenseList.hooks'
import {onPreselectExpense, onSelectExpense, onUnselectExpense} from './expenseList.actionCreators'
import {filterExpenses} from './expenseList.container.utility'
import Presenter from './expenseList.presenter'

const ExpenseList = ({
  categoryFilters,
  currencyFilters,
  searchQuery,
  amountFilters,
  currencyExchangeData,
  locale,
  preferredCurrency
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
  const filteredExpenses = filterExpenses({
    expenses,
    categoryFilters,
    currencyFilters,
    amountFilters,
    currencyExchangeData,
    searchQuery,
    preferredCurrency
  })
  const numberOfFilteredExpenses = (
    filteredExpenses
      .flatMap(({expenseItems}) => expenseItems)
      .length
  )
  const scrollableAreaRef = useAutoFetchMoreExpenses({
    onFetchMoreExpenses,
    numberOfFilteredExpenses
  })
  return expenses && (
    <Presenter
      currencyExchangeData={currencyExchangeData}
      expenses={filteredExpenses}
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
      preferredCurrency={preferredCurrency}
      scrollableAreaRef={scrollableAreaRef}
      locale={locale}
    />
  )
}

ExpenseList.displayName = 'ExpenseListContainer'

ExpenseList.propTypes = {
  searchQuery: string.isRequired,
  categoryFilters: shape({
    transport: bool,
    plane: bool,
    hotel: bool,
    food: bool,
    unknown: bool
  }).isRequired,
  currencyFilters: shape({
    DKK: bool,
    GBP: bool,
    EUR: bool
  }).isRequired,
  amountFilters: shape({
    min: number.isRequired,
    max: number.isRequired
  }).isRequired,
  currencyExchangeData: shape({
    DKK: shape({
      EUR: number.isRequired,
      GBP: number.isRequired
    }).isRequired,
    EUR: shape({
      DKK: number.isRequired,
      GBP: number.isRequired
    }).isRequired,
    GBP: shape({
      DKK: number.isRequired,
      EUR: number.isRequired
    }).isRequired
  }),
  locale: string.isRequired,
  preferredCurrency: string.isRequired
}

export default ExpenseList
