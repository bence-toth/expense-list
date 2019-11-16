import React from 'react'
import {shape, func, bool, string, number} from 'prop-types'
import 'react-input-range/lib/css/index.css'

import ExpenseSearch from './expenseSearch/expenseSearch.presenter'
import AmountFilter from './amountFilter/amountFilter.presenter'

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
    {Object.keys(categoryFilters).map(categoryFilter => (
      <button
        key={categoryFilter}
        type='button'
        style={{
          display: 'block',
          width: '100%',
          border: '3px solid',
          borderColor: categoryFilters[categoryFilter] ? 'green' : 'red'
        }}
        onClick={() => {
          const newCategoryFilters = {
            ...categoryFilters,
            [categoryFilter]: !categoryFilters[categoryFilter]
          }
          if (Object.values(newCategoryFilters).includes(true)) {
            onSetCategoryFilters(newCategoryFilters)
          }
          else {
            const allCategoriesVisible = Object
              .keys(newCategoryFilters)
              .reduce((keysSoFar, newKey) => ({
                ...keysSoFar,
                [newKey]: true
              }), {})
            onSetCategoryFilters(allCategoriesVisible)
          }
        }}
      >
        {categoryFilter}
      </button>
    ))}
    {Object.keys(currencyFilters).map(currencyFilter => (
      <button
        key={currencyFilter}
        type='button'
        style={{
          display: 'block',
          width: '100%',
          border: '3px solid',
          borderColor: currencyFilters[currencyFilter] ? 'green' : 'red'
        }}
        onClick={() => {
          const newCurrencyFilters = {
            ...currencyFilters,
            [currencyFilter]: !currencyFilters[currencyFilter]
          }
          if (Object.values(newCurrencyFilters).includes(true)) {
            onSetCurrencyFilters(newCurrencyFilters)
          }
          else {
            const allCurrenciesVisible = Object
              .keys(newCurrencyFilters)
              .reduce((keysSoFar, newKey) => ({
                ...keysSoFar,
                [newKey]: true
              }), {})
            onSetCurrencyFilters(allCurrenciesVisible)
          }
        }}
      >
        {currencyFilter}
      </button>
    ))}
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
