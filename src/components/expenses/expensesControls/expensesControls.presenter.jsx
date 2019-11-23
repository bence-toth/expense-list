import React from 'react'
import {shape, func, bool, string, number} from 'prop-types'
import 'react-input-range/lib/css/index.css'

import ExpenseSearch from './expenseSearch/expenseSearch.presenter'
import AmountFilter from './amountFilter/amountFilter.presenter'
import CurrencyFilter from './currencyFilter/currencyFilter.presenter'
import CategoryFilter from './categoryFilter/categoryFilter.presenter'

import './expensesControls.styles.css'

const ExpensesControls = ({
  searchQuery,
  onSetSearchQuery,
  categoryFilters,
  onSetCategoryFilters,
  currencyFilters,
  onSetCurrencyFilters,
  amountFilters,
  onSetAmountFilters,
  currencyExchangeData
}) => (
  <>
    <ExpenseSearch
      searchQuery={searchQuery}
      onSetSearchQuery={onSetSearchQuery}
    />
    {currencyExchangeData && (
      <AmountFilter
        amountFilters={amountFilters}
        onSetAmountFilters={onSetAmountFilters}
      />
    )}
    <CurrencyFilter
      currencyFilters={currencyFilters}
      onSetCurrencyFilters={onSetCurrencyFilters}
    />
    <CategoryFilter
      categoryFilters={categoryFilters}
      onSetCategoryFilters={onSetCategoryFilters}
    />
  </>
)

ExpensesControls.propTypes = {
  searchQuery: string.isRequired,
  onSetSearchQuery: func.isRequired,
  categoryFilters: shape({
    transport: bool,
    plane: bool,
    hotel: bool,
    food: bool,
    unknown: bool
  }).isRequired,
  onSetCategoryFilters: func.isRequired,
  currencyFilters: shape({
    DKK: bool,
    GBP: bool,
    EUR: bool
  }).isRequired,
  onSetCurrencyFilters: func.isRequired,
  amountFilters: shape({
    min: number.isRequired,
    max: number.isRequired
  }).isRequired,
  onSetAmountFilters: func.isRequired,
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
  })
}

export default ExpensesControls
