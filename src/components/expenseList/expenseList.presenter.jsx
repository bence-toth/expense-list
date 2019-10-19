import React from 'react'
import {instanceOf, arrayOf, shape, string} from 'prop-types'

import {formatDate, generateGroupKey} from './expenseList.presenter.utility'

import './expenseList.styles.css'

const ExpenseListPresenter = ({expenses}) => (
  <div className='expenses'>
    {expenses && (
      <ul className='expenseGroup'>
        {expenses.map(({groupStart, expenseItems}) => (
          <li key={generateGroupKey(groupStart)}>
            <div className='expenseGroupHeading'>
              {formatDate(({date: groupStart, locale: 'en-GB'}))}
            </div>
            <ul>
              {expenseItems.map(({id, amount, merchant, user}) => (
                <li
                  key={id}
                  className='expense'
                >
                  <div>
                    {`${amount.value} ${amount.currency}`}
                  </div>
                  <div>
                    {merchant}
                  </div>
                  <div>
                    {`${user.first} ${user.last}`}
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
