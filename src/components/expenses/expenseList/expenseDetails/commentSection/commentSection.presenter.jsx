import React from 'react'
import {string, func} from 'prop-types'
import classNames from 'classnames'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import copy from './commentSection.locales'
import {reactQuillConfiguration} from './commentSection.data'

import './commentSection.styles.css'

const CommentSection = ({
  comment,
  expenseId,
  onEditComment,
  onSetExpenseComment
}) => (
  <div className='commentSection'>
    <ReactQuill
      value={comment}
      onChange={newComment => {
        onEditComment(newComment)
        onSetExpenseComment({
          expenseId,
          comment: newComment
        })
      }}
      formats={reactQuillConfiguration.formats}
      modules={reactQuillConfiguration.modules}
    />
    <div
      className={classNames('placeholder', {
        invisible: (
          (comment.length > 0) && (comment !== '<p><br></p>')
        )
      })}
    >
      {copy['en-GB'].addDescription()}
    </div>
  </div>
)

CommentSection.propTypes = {
  comment: string.isRequired,
  onEditComment: func.isRequired,
  expenseId: string.isRequired,
  onSetExpenseComment: func.isRequired
}

export default CommentSection
