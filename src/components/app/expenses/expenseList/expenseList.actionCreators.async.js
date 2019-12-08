import {fetchExpenses} from './expenseList.consumers'
import {onRequestExpenses, onReceiveExpenses} from './expenseList.actionCreators'

const onLoadExpenses = async ({
  rawExpenses,
  dispatchExpensesAction
}) => {
  dispatchExpensesAction(onRequestExpenses())
  const {
    shouldFetchMore,
    expenses,
    rawExpenses: newRawExpenses
  } = await fetchExpenses({rawExpenses})
  dispatchExpensesAction(onReceiveExpenses({
    shouldFetchMore,
    expenses,
    rawExpenses: newRawExpenses
  }))
}

// eslint-disable-next-line import/prefer-default-export
export {onLoadExpenses}
