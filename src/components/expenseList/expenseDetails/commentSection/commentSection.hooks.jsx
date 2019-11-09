import {useState, useEffect, useRef, useCallback} from 'react'

import {addCommentToExpense} from './commentSection.consumers'

const useDebounce = (functionToDebounce, delay, dependencies) => {
  const debounceTimeoutHandle = useRef(null)
  const debounce = () => {
    clearTimeout(debounceTimeoutHandle.current)
    debounceTimeoutHandle.current = setTimeout(() => {
      debounceTimeoutHandle.current = null
      functionToDebounce()
    }, delay)
  }
  const callback = useCallback(
    () => debounce(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dependencies
  )
  useEffect(() => {
    callback()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies, callback])
  return callback
}

// TODO: When closing and reopening expense, original comments loads and gets persisted
const usePersistedComment = ({
  initialComment,
  expenseId
}) => {
  const [comment, onEditComment] = useState(initialComment)
  useDebounce(() => {
    addCommentToExpense({
      expenseId,
      comment
    })
  }, 2000, [comment, expenseId])
  return [comment, onEditComment]
}

// eslint-disable-next-line import/prefer-default-export
export {usePersistedComment}
