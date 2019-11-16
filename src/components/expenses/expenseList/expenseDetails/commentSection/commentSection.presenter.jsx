import React from 'react'
import {string, func} from 'prop-types'
import classNames from 'classnames'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import './commentSection.styles.css'

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],
    [{list: 'ordered'}, {list: 'bullet'}],
    ['link'],
    ['clean']
  ]
}

const formats = ['bold', 'italic', 'underline', 'strike', 'list', 'bullet', 'link']

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
      formats={formats}
      modules={modules}
    />
    <div
      className={classNames('placeholder', {
        invisible: (
          (comment.length > 0) && (comment !== '<p><br></p>')
        )
      })}
    >
      Add description
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
