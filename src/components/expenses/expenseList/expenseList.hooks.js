import {useRef, useReducer, useEffect, useState} from 'react'

import {initialSelectionState, selectionReducer, initialExpensesState, expensesReducer} from './expenseList.reducer'
import {onUpdateExpenseComment, onUpdateExpenseReceipts} from './expenseList.actionCreators'
import {onLoadExpenses} from './expenseList.actionCreators.async'
import {fetchCurrencyExchangeData} from './expenseList.consumers'

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

  const onSetExpenseReceipts = ({expenseId, receipts}) => {
    dispatchExpensesAction(onUpdateExpenseReceipts({
      expenseId,
      receipts
    }))
  }

  return {
    expenses,
    isFetchingExpenses: isFetching,
    shouldFetchMoreExpenses: shouldFetchMore,
    onFetchMoreExpenses,
    onSetExpenseComment,
    onSetExpenseReceipts
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

const useCurrencyConversion = () => {
  const [
    currencyExchangeData,
    setCurrencyExchangeData
  ] = useState(null)

  useEffect(() => {
    fetchCurrencyExchangeData().then(newCurrencyExchangeData => {
      setCurrencyExchangeData(newCurrencyExchangeData)
    })
  }, [])

  return currencyExchangeData
}

export {useExpenses, useExpenseSelection, useCurrencyConversion}
