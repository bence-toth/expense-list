import React from 'react'
import {func, number, shape, string} from 'prop-types'
import InputRange from 'react-input-range'

import copy from './amountFilter.locales'

import './amountFilter.styles.css'

const AmountFilter = ({
  amountFilters,
  onSetAmountFilters,
  locale,
  preferredCurrency
}) => {
  const maxValue = (preferredCurrency === 'DKK') ? 36000 : 5000
  return (
    <div className='amountFilter'>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor='minAmount'>
        {copy[locale].filterOnExpenseAmount({
          currency: preferredCurrency
        })}
      </label>
      <div className='keyboardInputs'>
        <input
          id='minAmount'
          type='number'
          value={amountFilters.min}
          onChange={({target: {value}}) => {
            onSetAmountFilters({
              min: Number(value),
              max: Math.max(amountFilters.max, Number(value) + 1)
            })
          }}
          min={0}
          max={maxValue - 1}
        />
        <span className='connector'>
          –
        </span>
        <input
          id='maxAmount'
          type='number'
          value={amountFilters.max}
          onChange={({target: {value}}) => {
            onSetAmountFilters({
              min: Math.min(amountFilters.min, Number(value) - 1),
              max: Number(value)
            })
          }}
          min={1}
          max={maxValue}
        />
      </div>
      <div className='rangeInput'>
        <InputRange
          minValue={0}
          maxValue={maxValue}
          value={amountFilters}
          onChange={onSetAmountFilters}
          formatLabel={value => value.toLocaleString(locale, {
            style: 'currency',
            currency: preferredCurrency,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          })}
        />
      </div>
    </div>
  )
}

AmountFilter.displayName = 'AmountFilterPresenter'

AmountFilter.propTypes = {
  amountFilters: shape({
    min: number.isRequired,
    max: number.isRequired
  }).isRequired,
  onSetAmountFilters: func.isRequired,
  locale: string.isRequired,
  preferredCurrency: string.isRequired
}

export default AmountFilter
