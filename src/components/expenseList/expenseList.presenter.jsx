import React from 'react'
import {instanceOf, arrayOf, shape, string, func} from 'prop-types'
import classNames from 'classnames'

import Modal from 'components/modal/modal.presenter'

import ExpenseSummary from './expenseSummary/expenseSummary.presenter'
import {formatMonth, generateGroupKeyFromDate, getSelectedExpenseData} from './expenseList.presenter.utility'

import './expenseList.styles.css'

const ExpenseListPresenter = ({
  expenses,
  selectedExpenseRef,
  preselectedExpenseId,
  selectedExpenseId,
  onPreselectExpense,
  onSelectExpense,
  onUnselectExpense
}) => (
  <div className='expenses'>
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
              {expenseItems.map(({id, amount, merchant, user, category, date}) => (
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
                    />
                  </button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    )}
    {selectedExpenseId && (
      <Modal
        animationTargetElement={selectedExpenseRef}
        onModalHasClosed={onUnselectExpense}
      >
        <div
          className={classNames(
            'expense',
            getSelectedExpenseData({
              expenses,
              selectedExpenseId
            }).category
          )}
        >
          <ExpenseSummary
            isUserDisplayed={false}
            {...getSelectedExpenseData({expenses, selectedExpenseId})}
          />
        </div>
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
        avatar: string
      }).isRequired,
      category: string,
      date: string.isRequired,
      id: string.isRequired
    }).isRequired).isRequired
  })),
  selectedExpenseRef: shape({
    current: instanceOf(Element)
  }).isRequired,
  onPreselectExpense: func.isRequired,
  onSelectExpense: func.isRequired,
  onUnselectExpense: func.isRequired,
  preselectedExpenseId: string,
  selectedExpenseId: string
}

export default ExpenseListPresenter
