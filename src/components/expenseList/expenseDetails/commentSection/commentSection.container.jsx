import React from 'react'
import {string} from 'prop-types'

import {usePersistedComment} from './commentSection.hooks'
import CommentSectionPresenter from './commentSection.presenter'

import './commentSection.styles.css'

const CommentSection = ({
  expenseId,
  initialComment
}) => {
  const [comment, onEditComment] = usePersistedComment({
    initialComment,
    expenseId
  })
  return (
    <CommentSectionPresenter
      comment={comment}
      onEditComment={onEditComment}
    />
  )
}

CommentSection.propTypes = {
  expenseId: string.isRequired,
  initialComment: string.isRequired
}

export default CommentSection
