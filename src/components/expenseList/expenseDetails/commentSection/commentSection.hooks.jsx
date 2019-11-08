import {useState, useEffect} from 'react'

import {addCommentToExpense} from './commentSection.consumers'

const usePersistedComment = ({
  initialComment,
  expenseId
}) => {
  const [comment, onEditComment] = useState(initialComment)
  useEffect(() => {
    addCommentToExpense({ // TODO: Debounce
      expenseId,
      comment
    })
  }, [comment, expenseId])

  return [comment, onEditComment]
}

export {usePersistedComment}
