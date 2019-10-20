import React from 'react'
import {instanceOf, arrayOf, shape, string} from 'prop-types'
import classNames from 'classnames'

import {formatMonth, formatFullDate, formatCurrency, generateGroupKeyFromDate} from './expenseList.presenter.utility'

import './expenseList.styles.css'

const getIconNameByCategory = category => ({
  plane: 'fas fa-plane',
  transport: 'fas fa-taxi',
  hotel: 'fas fa-hotel',
  food: 'fas fa-utensils'
})[category] || 'fas fa-question'

const ExpenseListPresenter = ({expenses}) => (
  <div className='expenses'>
    {expenses && (
      <ul className='expenseGroup'>
        {expenses.map(({groupStart, expenseItems}) => (
          <li key={generateGroupKeyFromDate(groupStart)}>
            <div className='expenseGroupHeading'>
              {formatMonth(({date: groupStart, locale: 'en-GB'}))}
            </div>
            <ul className='expenseList'>
              {expenseItems.map(({id, amount, merchant, user, category, date}) => (
                <li
                  key={id}
                  className={classNames('expense', category)}
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
  }))
}

export default ExpenseListPresenter
