import {prepareExpenses} from './expenses.consumers.utility'

const api = 'http://localhost:3000'

const fetchExpenses = async () => {
  const response = await fetch(`${api}/expenses`)
  const {expenses} = await response.json()
  return prepareExpenses(expenses)
}

// eslint-disable-next-line import/prefer-default-export
export {fetchExpenses}
