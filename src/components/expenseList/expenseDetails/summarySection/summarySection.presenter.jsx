import React from 'react'
import {shape, string} from 'prop-types'
import classNames from 'classnames'

import ExpenseSummary from '../../expenseSummary/expenseSummary.presenter'

import './summarySection.styles.css'

const SummarySection = ({
  selectedExpense
}) => (
  <div
    className={classNames(
      'expense',
      selectedExpense.category
    )}
  >
    <ExpenseSummary
      isUserDisplayed={false}
      {...selectedExpense}
    />
  </div>
)

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
  }).isRequired
}

export default SummarySection
