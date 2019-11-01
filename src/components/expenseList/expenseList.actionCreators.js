import {selectionActions, expensesActions} from './expenseList.actions'

const onPreselectExpense = ({id}) => ({
  type: selectionActions.preselectExpense,
  id
})

const onSelectExpense = ({id}) => ({
  type: selectionActions.selectExpense,
  id
})

const onUnselectExpense = () => ({
  type: selectionActions.unselectExpense
})

const onRequestExpenses = () => ({
  type: expensesActions.onRequestExpenses
})

const onReceiveExpenses = ({
  expenses,
  rawExpenses,
  shouldFetchMore
}) => ({
  type: expensesActions.onReceiveExpenses,
  expenses,
  rawExpenses,
  shouldFetchMore
})

export {
  onPreselectExpense,
  onSelectExpense,
  onUnselectExpense,
  onRequestExpenses,
  onReceiveExpenses
}
