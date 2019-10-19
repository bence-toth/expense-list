import React from 'react'
import {arrayOf, shape, string} from 'prop-types'

import './expenses.styles.css'

const ExpensesPresenter = ({expenses}) => (
  <div className='expenses'>
    {expenses && (
      <ul>
        {expenses.map(expense => (
          <li>
            <div>
              {`${expense.amount.value} ${expense.amount.currency}`}
            </div>
            <div>
              {expense.merchant}
            </div>
            <div>
              {`${expense.user.first} ${expense.user.last}`}
            </div>
            <hr />
          </li>
        ))}
      </ul>
    )}
  </div>
)

ExpensesPresenter.propTypes = {
  expenses: arrayOf(shape({
    amount: shape({
      value: string.isRequired,
      currency: string.isRequired
    }).isRequired,
    merchant: string.isRequired,
    user: shape({
      first: string.isRequired,
      last: string.isRequired
    }).isRequired
  }).isRequired).isRequired
}

export default ExpensesPresenter
