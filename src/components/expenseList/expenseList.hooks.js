import {useRef, useReducer, useEffect} from 'react'

import {initialSelectionState, selectionReducer, initialExpensesState, expensesReducer} from './expenseList.reducer'
import {onUpdateExpenseComment} from './expenseList.actionCreators'
import {onLoadExpenses} from './expenseList.actionCreators.async'

const useExpenses = () => {
  const [
    {
      shouldFetchMore,
      isFetching,
      expenses,
      rawExpenses
    },
    dispatchExpensesAction
  ] = useReducer(expensesReducer, initialExpensesState)

  useEffect(() => {
    onLoadExpenses({
      dispatchExpensesAction,
      rawExpenses
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onFetchMoreExpenses = () => {
    if (shouldFetchMore && !isFetching) {
      onLoadExpenses({
        dispatchExpensesAction,
        rawExpenses
      })
    }
  }

  const onSetExpenseComment = ({expenseId, comment}) => {
    dispatchExpensesAction(onUpdateExpenseComment({
      expenseId,
      comment
    }))
  }

  return {
    expenses,
    isFetchingExpenses: isFetching,
    shouldFetchMoreExpenses: shouldFetchMore,
    onFetchMoreExpenses,
    onSetExpenseComment
  }
}

const useExpenseSelection = () => {
  const selectedExpenseRef = useRef(null)
  const [{
    preselectedExpenseId,
    selectedExpenseId
  }, dispatchSelectionAction] = useReducer(
    selectionReducer,
    initialSelectionState
  )
  return {
    preselectedExpenseId,
    selectedExpenseId,
    selectedExpenseRef,
    dispatchSelectionAction
  }
}

export {useExpenses, useExpenseSelection}
