import {prepareExpenses} from './expenseList.consumers.utility'

const api = 'http://localhost:3000'

const pageSize = 15

const fetchExpenses = async ({rawExpenses}) => {
  const response = await fetch([
    api,
    '/expenses',
    `?limit=${pageSize}`,
    `&offset=${rawExpenses.length}`
  ].join(''))
  const {expenses} = await response.json()
  const allExpenses = [
    ...rawExpenses,
    ...expenses
  ]
  return {
    rawExpenses: allExpenses,
    expenses: prepareExpenses(allExpenses),
    shouldFetchMore: expenses.length === pageSize
  }
}

// eslint-disable-next-line import/prefer-default-export
export {fetchExpenses}
