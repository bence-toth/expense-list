import React from 'react'
import {string, func} from 'prop-types'

import {usePersistedComment} from './commentSection.hooks'
import Presenter from './commentSection.presenter'

import './commentSection.styles.css'

const CommentSection = ({
  expenseId,
  initialComment,
  onSetExpenseComment,
  locale
}) => {
  const [comment, onEditComment] = usePersistedComment({
    initialComment,
    expenseId
  })
  return (
    <Presenter
      comment={comment}
      onEditComment={onEditComment}
      onSetExpenseComment={onSetExpenseComment}
      expenseId={expenseId}
      locale={locale}
    />
  )
}

CommentSection.displayName = 'CommentSectionContainer'

CommentSection.propTypes = {
  expenseId: string.isRequired,
  initialComment: string.isRequired,
  onSetExpenseComment: func.isRequired,
  locale: string.isRequired
}

export default CommentSection
