import React from 'react'
import {func, number, shape} from 'prop-types'
import InputRange from 'react-input-range'

import './amountFilter.styles.css'

const AmountFilter = ({
  amountFilters,
  onSetAmountFilters
}) => (
  <div className='amountFilter'>
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    <label htmlFor='minAmount'>
      Filter on expense amount (€)
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
        max={4999}
      />
      <span className='connector'>
        –
      </span>
      <input
        type='number'
        value={amountFilters.max}
        onChange={({target: {value}}) => {
          onSetAmountFilters({
            min: Math.min(amountFilters.min, Number(value) - 1),
            max: Number(value)
          })
        }}
        min={1}
        max={5000}
      />
    </div>
    <InputRange
      minValue={0}
      maxValue={5000}
      value={amountFilters}
      onChange={onSetAmountFilters}
      formatLabel={value => value.toLocaleString('en-GB', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      })}
    />
  </div>
)

AmountFilter.propTypes = {
  amountFilters: shape({
    min: number.isRequired,
    max: number.isRequired
  }).isRequired,
  onSetAmountFilters: func.isRequired
}

export default AmountFilter
