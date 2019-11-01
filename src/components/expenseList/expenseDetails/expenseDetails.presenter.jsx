import React from 'react'
import {shape, string} from 'prop-types'

import UserSection from './userSection/userSection.presenter'
import SummarySection from './summarySection/summarySection.presenter'

import './expenseDetails.styles.css'

const ExpenseDetails = ({
  selectedExpense: {
    user: {
      first,
      last,
      avatar,
      email
    }
  },
  selectedExpense
}) => (
  <div className='expenseDetails'>
    <SummarySection
      selectedExpense={selectedExpense}
    />
    <UserSection
      name={`${first} ${last}`}
      avatar={avatar}
      email={email}
    />
    <div className='attachmentSection'>
      No receipt was attached yet
      <input type='file' />
    </div>
    <div className='commentsSection'>
      <div className='comments'>
        <article>
          <p>Hello world!</p>
        </article>
        <article>
          <p>Hello Pleo!</p>
        </article>
      </div>
      <div className='addComment'>
        <textarea />
        <button
          type='button'
        >
          Send
        </button>
      </div>
    </div>
  </div>
)

ExpenseDetails.propTypes = {
  selectedExpense: shape({
    amount: shape({
      value: string.isRequired,
      currency: string.isRequired
    }).isRequired,
    merchant: string.isRequired,
    user: shape({
      first: string.isRequired,
      last: string.isRequired,
      email: string.isRequired,
      avatar: string
    }).isRequired,
    category: string,
    date: string.isRequired,
    id: string.isRequired
  }).isRequired
}

export default ExpenseDetails
