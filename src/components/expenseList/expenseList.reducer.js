import actions from './expenseList.actions'

const initialSelectionState = {
  preselectedExpenseId: null,
  selectedExpenseId: null
}

const selectionReducer = (state, action) => {
  if (action.type === actions.preselectExpense) {
    return {
      ...state,
      preselectedExpenseId: action.id
    }
  }
  if (action.type === actions.selectExpense) {
    return {
      ...state,
      selectedExpenseId: action.id
    }
  }
  if (action.type === actions.unselectExpense) {
    return {
      ...state,
      selectedExpenseId: null
    }
  }
  return state
}

export {initialSelectionState, selectionReducer}
