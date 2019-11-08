import React, {useState, useEffect} from 'react'
import {string} from 'prop-types'

import CommentSectionPresenter from './commentSection.presenter'
import {addCommentToExpense} from './commentSection.consumers'

import './commentSection.styles.css'

const CommentSection = ({
  expenseId,
  initialComment
}) => {
  const [comment, onEditComment] = useState(initialComment)
  useEffect(() => {
    addCommentToExpense({
      expenseId,
      comment
    })
  }, [comment, expenseId])
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
