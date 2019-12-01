import React from 'react'
import {func, string} from 'prop-types'

import copy from './expenseSearch.locales'

import './expenseSearch.styles.css'

const ExpenseSearch = ({
  searchQuery,
  onSetSearchQuery,
  locale
}) => (
  <div className='expenseSearch'>
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    <label htmlFor='expenseSearch'>
      {copy[locale].searchInExpenses()}
    </label>
    <input
      id='expenseSearch'
      type='search'
      placeholder='Find user, email or merchant'
      value={searchQuery}
      onChange={({target: {value}}) => {
        onSetSearchQuery(value)
      }}
    />
  </div>
)

ExpenseSearch.propTypes = {
  searchQuery: string.isRequired,
  onSetSearchQuery: func.isRequired,
  locale: string.isRequired
}

export default ExpenseSearch
