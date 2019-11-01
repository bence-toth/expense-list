import React from 'react'
import {shape, string} from 'prop-types'
import classNames from 'classnames'

import Avatar from 'components/avatar/avatar.presenter'

import ExpenseSummary from '../expenseSummary/expenseSummary.presenter'

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
    <div
      className={classNames(
        'expense',
        selectedExpense.category
      )}
    >
      <ExpenseSummary
        isUserDisplayed={false}
        {...selectedExpense}
      />
    </div>
    <div className='userSection'>
      <Avatar
        name={`${first} ${last}`}
        avatarURL={avatar}
      />
      <div className='userNameSection'>
        <div className='name'>
          {first}
          {' '}
          {last}
        </div>
        <div className='email'>
          {email}
        </div>
      </div>
      <div className='sendEmailSection'>
        <a
          className='sendEmailButton'
          href={`mailto:${email}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fas fa-paper-plane' />
          <span>Send email</span>
        </a>
      </div>
    </div>
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
      avatar: string
    }).isRequired,
    category: string,
    date: string.isRequired,
    id: string.isRequired
  }).isRequired
}

export default ExpenseDetails
