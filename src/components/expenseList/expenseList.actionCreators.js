import {selectionActions, expensesActions} from './expenseList.actions'

const onPreselectExpense = ({id}) => ({
  type: selectionActions.onPreselectExpense,
  id
})

const onSelectExpense = ({id}) => ({
  type: selectionActions.onSelectExpense,
  id
})

const onUnselectExpense = () => ({
  type: selectionActions.onUnselectExpense
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
