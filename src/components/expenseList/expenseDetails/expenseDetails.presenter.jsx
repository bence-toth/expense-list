import React from 'react'
import {shape, string, func, arrayOf} from 'prop-types'

import UserSection from './userSection/userSection.presenter'
import SummarySection from './summarySection/summarySection.presenter'
import AttachmentSection from './attachmentSecion/attachmentSecion.presenter'
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
    comment,
    receipts
  },
  selectedExpense,
  onSetExpenseComment,
  onSetExpenseReceipts
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
    <AttachmentSection
      expenseId={id}
      onSetExpenseReceipts={onSetExpenseReceipts}
      numberOfReceipts={receipts.length}
    />
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
    comment: string.isRequired,
    receipts: arrayOf(shape({
      url: string.isRequired
    }).isRequired)
  }).isRequired,
  onSetExpenseComment: func.isRequired,
  onSetExpenseReceipts: func.isRequired
}

export default ExpenseDetails
