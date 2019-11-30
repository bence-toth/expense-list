import React from 'react'
import {shape, string, bool, number} from 'prop-types'
import classNames from 'classnames'

import {formatFullDate, formatCurrency, getIconNameByCategory, convertCurrency} from './expenseSummary.presenter.utility'
import copy from './expenseSummary.locales'

import './expenseSummary.styles.css'

const ExpenseSummary = ({
  category,
  merchant,
  user,
  date,
  amount,
  isUserDisplayed = true,
  currencyExchangeData,
  defaultCurrency
}) => (
  <div className='expenseSummary'>
    <div className='left'>
      <div className='category'>
        <div className='categoryIcon'>
          <i className={getIconNameByCategory(category)} />
        </div>
        <div className='categoryName'>
          {copy['en-GB'][category || 'unknown']()}
        </div>
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
      {currencyExchangeData && (amount.currency !== defaultCurrency) && (
        <div className={classNames('amount', 'converted')}>
          {formatCurrency({
            amount: convertCurrency({
              from: amount.currency,
              to: defaultCurrency,
              amount: amount.value,
              currencyExchangeData
            }),
            currency: defaultCurrency,
            locale: 'en-GB'
          })}
        </div>
      )}
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
  isUserDisplayed: bool,
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

export default ExpenseSummary
