import React, {useState} from 'react'

import ExpensesPresenter from './expenses.presenter'

const Expenses = () => {
  const [searchQuery, onSetSearchQuery] = useState('')
  const [categoryFilters, onSetCategoryFilters] = useState({
    transport: true,
    plane: true,
    hotel: true,
    food: true,
    unknown: true
  })
  const [currencyFilters, onSetCurrencyFilters] = useState({
    DKK: true,
    GBP: true,
    EUR: true
  })
  return (
    <ExpensesPresenter
      searchQuery={searchQuery}
      onSetSearchQuery={onSetSearchQuery}
      categoryFilters={categoryFilters}
      onSetCategoryFilters={onSetCategoryFilters}
      currencyFilters={currencyFilters}
      onSetCurrencyFilters={onSetCurrencyFilters}
    />
  )
}

export default Expenses
