import {useState, useRef, useReducer, useEffect} from 'react'

import {fetchExpenses} from './expenseList.consumers'
import {selectionReducer, initialSelectionState} from './expenseList.reducer'

const loadExpenses = async ({setExpenses}) => {
  const expenses = await fetchExpenses()
  setExpenses(expenses)
}

const useExpenses = () => {
  const [expenses, setExpenses] = useState(null)
  useEffect(() => {
    loadExpenses({setExpenses})
  }, [])
  return expenses
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
