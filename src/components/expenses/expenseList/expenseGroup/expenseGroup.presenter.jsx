import React from 'react'
import {instanceOf, shape, arrayOf, string, func, number} from 'prop-types'
import classNames from 'classnames'

import ExpenseSummary from '../expenseSummary/expenseSummary.presenter'
import {formatMonth} from './expenseGroup.presenter.utility'

import './expenseGroup.styles.css'

const ExpenseGroup = ({
  selectedExpenseRef,
  preselectedExpenseId,
  selectedExpenseId,
  onPreselectExpense,
  onSelectExpense,
  currencyExchangeData,
  preferredCurrency,
  locale,
  groupStart,
  expenseItems
}) => (
  <li>
    <div className='expenseGroupHeading'>
      {formatMonth(({date: groupStart, locale}))}
    </div>
    <ul className='expenseList'>
      {expenseItems.map(({
        id,
        amount,
        merchant,
        user,
        category,
        date
      }) => (
        <li
          key={id}
          className={classNames('expense', category)}
          {...((id === preselectedExpenseId) && {
            ref: selectedExpenseRef
          })}
        >
          <button
            type='button'
            className='expenseButton'
            onFocus={() => {
              if (!selectedExpenseId) {
                onPreselectExpense({id})
              }
            }}
            onClick={() => {
              onPreselectExpense({id})
              requestAnimationFrame(() => {
                onSelectExpense({id})
              })
            }}
          >
            <ExpenseSummary
              category={category}
              merchant={merchant}
              user={user}
              date={date}
              amount={amount}
              currencyExchangeData={currencyExchangeData}
              preferredCurrency={preferredCurrency}
              locale={locale}
            />
          </button>
        </li>
      ))}
    </ul>
  </li>
)

ExpenseGroup.propTypes = {
  groupStart: instanceOf(Date).isRequired,
  expenseItems: arrayOf(shape({
    amount: shape({
      value: string.isRequired,
      currency: string.isRequired
    }).isRequired,
    merchant: string.isRequired,
    user: shape({
      first: string.isRequired,
      last: string.isRequired,
      avatar: string,
      email: string.isRequired
    }).isRequired,
    category: string,
    date: string.isRequired,
    id: string.isRequired,
    comment: string.isRequired,
    receipts: arrayOf(shape({
      url: string.isRequired
    }).isRequired)
  }).isRequired).isRequired,
  selectedExpenseRef: shape({
    current: instanceOf(Element)
  }).isRequired,
  onPreselectExpense: func.isRequired,
  onSelectExpense: func.isRequired,
  preselectedExpenseId: string,
  selectedExpenseId: string,
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

export default ExpenseGroup
