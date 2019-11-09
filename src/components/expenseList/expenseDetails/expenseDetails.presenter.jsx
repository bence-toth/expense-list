import React from 'react'
import {shape, string, func} from 'prop-types'

import UserSection from './userSection/userSection.presenter'
import SummarySection from './summarySection/summarySection.presenter'
import CommentSection from './commentSection/commentSection.container'

import './expenseDetails.styles.css'

const ExpenseDetails = ({
  selectedExpense: {
    user: {
      first,
      last,
      avatar,
      email
    },
    id,
    comment
  },
  selectedExpense,
  onSetExpenseComment
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
    <CommentSection
      expenseId={id}
      initialComment={comment}
      onSetExpenseComment={onSetExpenseComment}
    />
  </div>
)

ExpenseDetails.propTypes = {
  selectedExpense: shape({
    user: shape({
      first: string.isRequired,
      last: string.isRequired,
      email: string.isRequired,
      avatar: string
    }).isRequired,
    id: string.isRequired,
    comment: string.isRequired
  }).isRequired,
  onSetExpenseComment: func.isRequired
}

export default ExpenseDetails
