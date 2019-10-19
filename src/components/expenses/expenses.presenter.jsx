import React from 'react'
import {arrayOf, shape, string} from 'prop-types'

import './expenses.styles.css'

const ExpensesPresenter = ({expenses}) => (
  <div className='expenses'>
    {expenses && (
      <ul>
        {expenses.map(({id, amount, merchant, user}) => (
          <li key={id}>
            <div>
              {`${amount.value} ${amount.currency}`}
            </div>
            <div>
              {merchant}
            </div>
            <div>
              {`${user.first} ${user.last}`}
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
