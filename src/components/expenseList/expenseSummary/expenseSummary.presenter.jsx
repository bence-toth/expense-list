import React from 'react'
import {shape, string, bool} from 'prop-types'

import {formatFullDate, formatCurrency, getIconNameByCategory} from './expenseSummary.presenter.utility'

import './expenseSummary.styles.css'

const ExpenseSummary = ({
  category,
  merchant,
  user,
  date,
  amount,
  isUserDisplayed = true
}) => (
  <div className='expenseSummary'>
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
        {isUserDisplayed && (
          <div className='user'>
            {`${user.first} ${user.last}`}
          </div>
        )}
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
  </div>
)

ExpenseSummary.propTypes = {
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
  isUserDisplayed: bool
}

export default ExpenseSummary
