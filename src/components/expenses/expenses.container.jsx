import React from 'react'

import {useExpenseFilters, useCurrencyConversion} from './expenses.hooks'
import ExpensesPresenter from './expenses.presenter'

const Expenses = () => {
  const {
    searchQuery,
    onSetSearchQuery,
    amountFilters,
    onSetAmountFilters,
    categoryFilters,
    onSetCategoryFilters,
    currencyFilters,
    onSetCurrencyFilters
  } = useExpenseFilters()
  const currencyExchangeData = useCurrencyConversion()
  return (
    <ExpensesPresenter
      searchQuery={searchQuery}
      onSetSearchQuery={onSetSearchQuery}
      categoryFilters={categoryFilters}
      onSetCategoryFilters={onSetCategoryFilters}
      currencyFilters={currencyFilters}
      onSetCurrencyFilters={onSetCurrencyFilters}
      amountFilters={amountFilters}
      onSetAmountFilters={onSetAmountFilters}
      currencyExchangeData={currencyExchangeData}
    />
  )
}

export default Expenses
