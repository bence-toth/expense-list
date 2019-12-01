import React from 'react'
import {func, shape, bool, string} from 'prop-types'
import classNames from 'classnames'

import copy from './currencyFilter.locales'

import './currencyFilter.styles.css'

const CurrencyFilter = ({
  currencyFilters,
  onSetCurrencyFilters,
  locale
}) => (
  <div className='currencyFilter'>
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    <label htmlFor='minAmount'>
      {copy[locale].filterOnCurrency()}
    </label>
    <div className='filterButtonGroup'>
      {Object.keys(currencyFilters).map(currencyFilter => (
        <button
          key={currencyFilter}
          type='button'
          className={classNames('currencyFilterButton', {
            selected: currencyFilters[currencyFilter]
          })}
          onClick={() => {
            const newCurrencyFilters = {
              ...currencyFilters,
              [currencyFilter]: !currencyFilters[currencyFilter]
            }
            if (Object.values(newCurrencyFilters).includes(true)) {
              onSetCurrencyFilters(newCurrencyFilters)
            }
            else {
              const allCurrenciesVisible = Object
                .keys(newCurrencyFilters)
                .reduce((keysSoFar, newKey) => ({
                  ...keysSoFar,
                  [newKey]: true
                }), {})
              onSetCurrencyFilters(allCurrenciesVisible)
            }
          }}
        >
          {currencyFilter}
        </button>
      ))}
    </div>
  </div>
)

CurrencyFilter.propTypes = {
  currencyFilters: shape({
    DKK: bool,
    GBP: bool,
    EUR: bool
  }).isRequired,
  onSetCurrencyFilters: func.isRequired,
  locale: string.isRequired
}

export default CurrencyFilter
