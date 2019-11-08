import React from 'react'
import {string, func} from 'prop-types'
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
  onEditComment
}) => (
  <div className='commentSection'>
    <ReactQuill
      value={comment}
      onChange={onEditComment}
      formats={formats}
      modules={modules}
    />
  </div>
)

CommentSection.propTypes = {
  comment: string.isRequired,
  onEditComment: func.isRequired
}

export default CommentSection
