import React from 'react'
import {shape, func, bool, string} from 'prop-types'

import './expensesControls.styles.css'

const ExpensesControls = ({
  searchQuery,
  onSetSearchQuery,
  categoryFilters,
  onSetCategoryFilters,
  currencyFilters,
  onSetCurrencyFilters
}) => (
  <>
    <input
      type='search'
      value={searchQuery}
      onChange={({target: {value}}) => {
        onSetSearchQuery(value)
      }}
    />
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
  onSetCurrencyFilters: func.isRequired
}

export default ExpensesControls
