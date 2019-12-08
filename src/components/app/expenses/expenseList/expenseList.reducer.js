import {selectionActions, expensesActions} from './expenseList.actions'
import {updateComment, updateReceipts} from './expenseList.reducer.utility'

const initialSelectionState = {
  preselectedExpenseId: null,
  selectedExpenseId: null
}

const selectionReducer = (state, action) => {
  if (action.type === selectionActions.onPreselectExpense) {
    return {
      ...state,
      preselectedExpenseId: action.id
    }
  }
  if (action.type === selectionActions.onSelectExpense) {
    return {
      ...state,
      selectedExpenseId: action.id
    }
  }
  if (action.type === selectionActions.onUnselectExpense) {
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
  if (action.type === expensesActions.onUpdateExpenseComment) {
    return {
      ...state,
      rawExpenses: state.rawExpenses.map(updateComment(action)),
      expenses: state.expenses.map(({expenseItems, ...rest}) => ({
        ...rest,
        expenseItems: expenseItems.map(updateComment(action))
      }))
    }
  }
  if (action.type === expensesActions.onUpdateExpenseReceipts) {
    return {
      ...state,
      rawExpenses: state.rawExpenses.map(updateReceipts(action)),
      expenses: state.expenses.map(({expenseItems, ...rest}) => ({
        ...rest,
        expenseItems: expenseItems.map(updateReceipts(action))
      }))
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
