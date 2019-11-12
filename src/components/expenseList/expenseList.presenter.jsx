import React from 'react'
import {instanceOf, arrayOf, shape, string, func, bool, number} from 'prop-types'
import classNames from 'classnames'

import Modal from 'components/modal/modal.presenter'

import ExpenseSummary from './expenseSummary/expenseSummary.presenter'
import ExpenseDetails from './expenseDetails/expenseDetails.presenter'
import {formatMonth, generateGroupKeyFromDate, getSelectedExpense} from './expenseList.presenter.utility'

import './expenseList.styles.css'

const scrollToBottomDistanceThreshold = 15

const ExpenseListPresenter = ({
  expenses,
  selectedExpenseRef,
  preselectedExpenseId,
  selectedExpenseId,
  isFetchingExpenses,
  shouldFetchMoreExpenses,
  onPreselectExpense,
  onSelectExpense,
  onUnselectExpense,
  onFetchMoreExpenses,
  onSetExpenseComment,
  onSetExpenseReceipts,
  currencyExchangeData,
  defaultCurrency
}) => (
  <div
    className='expenses'
    onScroll={({
      target: {
        scrollHeight,
        scrollTop,
        clientHeight
      }
    }) => {
      if (shouldFetchMoreExpenses) {
        const maxScrollTop = scrollHeight - clientHeight
        const distanceFromBottom = maxScrollTop - scrollTop
        if (distanceFromBottom <= scrollToBottomDistanceThreshold) {
          onFetchMoreExpenses()
        }
      }
    }}
  >
    {expenses && (
      <ul className='expenseGroup'>
        {expenses.map(({groupStart, expenseItems}) => (
          <li
            key={generateGroupKeyFromDate(groupStart)}
          >
            <div className='expenseGroupHeading'>
              {formatMonth(({date: groupStart, locale: 'en-GB'}))}
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
                      defaultCurrency={defaultCurrency}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </li>
        ))}
        {isFetchingExpenses && (
          <li>Wait for it...</li>
        )}
      </ul>
    )}
    {selectedExpenseId && (
      <Modal
        animationTargetElement={selectedExpenseRef}
        onModalHasClosed={onUnselectExpense}
        shouldCloseOnOverlayClick
      >
        <ExpenseDetails
          selectedExpense={getSelectedExpense({
            expenses,
            selectedExpenseId
          })}
          onSetExpenseComment={onSetExpenseComment}
          onSetExpenseReceipts={onSetExpenseReceipts}
          currencyExchangeData={currencyExchangeData}
          defaultCurrency={defaultCurrency}
        />
      </Modal>
    )}
  </div>
)

ExpenseListPresenter.propTypes = {
  expenses: arrayOf(shape({
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
    }).isRequired).isRequired
  })),
  selectedExpenseRef: shape({
    current: instanceOf(Element)
  }).isRequired,
  onPreselectExpense: func.isRequired,
  onSelectExpense: func.isRequired,
  onUnselectExpense: func.isRequired,
  preselectedExpenseId: string,
  selectedExpenseId: string,
  isFetchingExpenses: bool,
  shouldFetchMoreExpenses: bool,
  onFetchMoreExpenses: func.isRequired,
  onSetExpenseComment: func.isRequired,
  onSetExpenseReceipts: func.isRequired,
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
  defaultCurrency: string.isRequired
}

export default ExpenseListPresenter
