import React from 'react'
import {shape, func, bool, string, number} from 'prop-types'

import ExpensesListContainer from './expenseList/expenseList.container'
import ExpensesControls from './expensesControls/expensesControls.presenter'

import './expenses.styles.css'

const Expenses = ({
  searchQuery,
  onSetSearchQuery,
  categoryFilters,
  onSetCategoryFilters,
  currencyFilters,
  onSetCurrencyFilters,
  amountFilters,
  onSetAmountFilters,
  currencyExchangeData,
  locale,
  preferredCurrency
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
        amountFilters={amountFilters}
        onSetAmountFilters={onSetAmountFilters}
        currencyExchangeData={currencyExchangeData}
        locale={locale}
        preferredCurrency={preferredCurrency}
      />
    </div>
    <div className='expensesListWrapper'>
      <ExpensesListContainer
        categoryFilters={categoryFilters}
        currencyFilters={currencyFilters}
        searchQuery={searchQuery}
        amountFilters={amountFilters}
        currencyExchangeData={currencyExchangeData}
        locale={locale}
        preferredCurrency={preferredCurrency}
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
  }),
  locale: string.isRequired,
  preferredCurrency: string.isRequired
}

export default Expenses
