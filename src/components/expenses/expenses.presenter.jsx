import React from 'react'
import {shape, func, bool, string} from 'prop-types'

import ExpensesListContainer from './expenseList/expenseList.container'
import ExpensesControls from './expensesControls/expensesControls.presenter'

import './expenses.styles.css'

const Expenses = ({
  searchQuery,
  onSetSearchQuery,
  categoryFilters,
  onSetCategoryFilters,
  currencyFilters,
  onSetCurrencyFilters
}) => (
  <>
    <div className='expensesControlsWrapper'>
      <ExpensesControls
        searchQuery={searchQuery}
        onSetSearchQuery={onSetSearchQuery}
        categoryFilters={categoryFilters}
        onSetCategoryFilters={onSetCategoryFilters}
        currencyFilters={currencyFilters}
        onSetCurrencyFilters={onSetCurrencyFilters}
      />
    </div>
    <div className='expensesListWrapper'>
      <ExpensesListContainer
        categoryFilters={categoryFilters}
        currencyFilters={currencyFilters}
        searchQuery={searchQuery}
      />
    </div>
  </>
)

Expenses.propTypes = {
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

export default Expenses
