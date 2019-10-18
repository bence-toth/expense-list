import React from 'react'
import {shape, number, string} from 'prop-types'

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
  expenses: shape({
    amount: shape({
      value: number.isRequired,
      currency: string.isRequired
    }).isRequired,
    merchant: string.isRequired,
    user: shape({
      first: string.isRequired,
      last: string.isRequired
    }).isRequired
  }).isRequired
}

export default ExpensesPresenter
