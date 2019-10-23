import React from 'react'
import {instanceOf, arrayOf, shape, string, bool, func} from 'prop-types'
import classNames from 'classnames'

import Modal from 'components/modal/modal.presenter'

import {formatMonth, formatFullDate, formatCurrency, generateGroupKeyFromDate} from './expenseList.presenter.utility'

import './expenseList.styles.css'

const getIconNameByCategory = category => ({
  plane: 'fas fa-plane',
  transport: 'fas fa-taxi',
  hotel: 'fas fa-hotel',
  food: 'fas fa-utensils'
})[category] || 'fas fa-question'

const ExpenseListPresenter = ({
  expenses,
  selectedExpenseRef,
  isModalVisible,
  onSetModalVisibility
}) => (
  <div className='expenses'>
    {expenses && (
      <ul className='expenseGroup'>
        {expenses.map(({groupStart, expenseItems}, expenseGroupIndex) => (
          <li
            key={generateGroupKeyFromDate(groupStart)}
          >
            <div className='expenseGroupHeading'>
              {formatMonth(({date: groupStart, locale: 'en-GB'}))}
            </div>
            <ul className='expenseList'>
              {expenseItems.map(({id, amount, merchant, user, category, date}, expenseIndex) => (
                <li
                  key={id}
                  className={classNames('expense', category)}
                  {...((expenseGroupIndex === 0) && (expenseIndex === 0) && {
                    ref: selectedExpenseRef
                  })}
                >
                  <div className='left'>
                    <div className='category'>
                      <div className='categoryIcon'>
                        <i className={getIconNameByCategory(category)} />
                      </div>
                      <div className='categoryName'>{category || 'Unknown'}</div>
                    </div>
                    <div className='merchantAndUser'>
                      <div className='merchant'>
                        {merchant}
                        <button
                          type='button'
                          onClick={() => {
                            onSetModalVisibility(true)
                          }}
                        >
                          Click me
                        </button>
                      </div>
                      <div className='user'>
                        {`${user.first} ${user.last}`}
                      </div>
                      <div className='date'>
                        {formatFullDate(({date, locale: 'en-GB'}))}
                      </div>
                    </div>
                  </div>
                  <div className='right'>
                    <div className='amount'>
                      {formatCurrency({
                        amount: amount.value,
                        currency: amount.currency,
                        locale: 'en-GB'
                      })}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    )}
    {isModalVisible && (
      <Modal
        animationTargetElement={selectedExpenseRef}
        onModalHasClosed={() => {
          onSetModalVisibility(false)
        }}
      />
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
      }).isRequired
    }).isRequired).isRequired
  })),
  selectedExpenseRef: shape({
    current: instanceOf(Element)
  }).isRequired,
  isModalVisible: bool,
  onSetModalVisibility: func.isRequired
}

export default ExpenseListPresenter
