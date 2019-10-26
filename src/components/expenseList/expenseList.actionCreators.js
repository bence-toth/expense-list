import actions from './expenseList.actions'

const onPreselectExpense = ({id}) => ({
  type: actions.preselectExpense,
  id
})

const onSelectExpense = ({id}) => ({
  type: actions.selectExpense,
  id
})

const onUnselectExpense = () => ({
  type: actions.unselectExpense
})

export {
  onPreselectExpense,
  onSelectExpense,
  onUnselectExpense
}
