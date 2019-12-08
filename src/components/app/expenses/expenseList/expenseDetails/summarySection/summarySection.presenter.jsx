import React from 'react'
import {shape, string, number} from 'prop-types'
import classNames from 'classnames'

import ExpenseSummary from '../../expenseSummary/expenseSummary.presenter'

import './summarySection.styles.css'

const SummarySection = ({
  selectedExpense,
  currencyExchangeData,
  preferredCurrency,
  locale
}) => (
  <div
    className={classNames(
      'expense',
      selectedExpense.category
    )}
  >
    <ExpenseSummary
      isUserDisplayed={false}
      currencyExchangeData={currencyExchangeData}
      preferredCurrency={preferredCurrency}
      locale={locale}
      {...selectedExpense}
    />
  </div>
)

SummarySection.displayName = 'SummarySectionPresenter'

SummarySection.propTypes = {
  selectedExpense: shape({
    amount: shape({
      value: string.isRequired,
      currency: string.isRequired
    }).isRequired,
    merchant: string.isRequired,
    user: shape({
      first: string.isRequired,
      last: string.isRequired
    }).isRequired,
    category: string,
    date: string.isRequired,
    id: string.isRequired
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
  preferredCurrency: string.isRequired,
  locale: string.isRequired
}

export default SummarySection
