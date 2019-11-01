import {selectionActions, expensesActions} from './expenseList.actions'

const initialSelectionState = {
  preselectedExpenseId: null,
  selectedExpenseId: null
}

const selectionReducer = (state, action) => {
  if (action.type === selectionActions.preselectExpense) {
    return {
      ...state,
      preselectedExpenseId: action.id
    }
  }
  if (action.type === selectionActions.selectExpense) {
    return {
      ...state,
      selectedExpenseId: action.id
    }
  }
  if (action.type === selectionActions.unselectExpense) {
    return {
      ...state,
      selectedExpenseId: null
    }
  }
  return state
}

const initialExpensesState = {
  shouldFetchMore: true,
  isFetching: false,
  expenses: [],
  rawExpenses: []
}

const expensesReducer = (state, action) => {
  if (action.type === expensesActions.onRequestExpenses) {
    return {
      ...state,
      isFetching: true
    }
  }
  if (action.type === expensesActions.onReceiveExpenses) {
    return {
      isFetching: false,
      shouldFetchMore: action.shouldFetchMore,
      expenses: action.expenses,
      rawExpenses: action.rawExpenses
    }
  }
  return state
}

export {
  initialSelectionState,
  selectionReducer,
  initialExpensesState,
  expensesReducer
}
