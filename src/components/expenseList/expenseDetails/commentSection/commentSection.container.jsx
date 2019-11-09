import React from 'react'
import {string, func} from 'prop-types'

import {usePersistedComment} from './commentSection.hooks'
import CommentSectionPresenter from './commentSection.presenter'

import './commentSection.styles.css'

const CommentSection = ({
  expenseId,
  initialComment,
  onSetExpenseComment
}) => {
  const [comment, onEditComment] = usePersistedComment({
    initialComment,
    expenseId
  })
  return (
    <CommentSectionPresenter
      comment={comment}
      onEditComment={onEditComment}
      onSetExpenseComment={onSetExpenseComment}
      expenseId={expenseId}
    />
  )
}

CommentSection.propTypes = {
  expenseId: string.isRequired,
  initialComment: string.isRequired,
  onSetExpenseComment: func.isRequired
}

export default CommentSection
