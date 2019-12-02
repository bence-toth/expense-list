import React from 'react'
import {string} from 'prop-types'

import {useExpenseFilters, useCurrencyConversion} from './expenses.hooks'
import Presenter from './expenses.presenter'

const Expenses = ({
  locale,
  preferredCurrency
}) => {
  const {
    searchQuery,
    onSetSearchQuery,
    amountFilters,
    onSetAmountFilters,
    categoryFilters,
    onSetCategoryFilters,
    currencyFilters,
    onSetCurrencyFilters
  } = useExpenseFilters({
    preferredCurrency
  })
  const currencyExchangeData = useCurrencyConversion()
  return (
    <Presenter
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
  )
}

Expenses.displayName = 'ExpensesContainer'

Expenses.propTypes = {
  locale: string.isRequired,
  preferredCurrency: string.isRequired
}

export default Expenses
