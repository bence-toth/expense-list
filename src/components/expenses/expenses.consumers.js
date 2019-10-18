const api = 'http://localhost:3000'

const fetchExpenses = async () => {
  const response = await fetch(`${api}/expenses`)
  const result = await response.json()
  return result.expenses
}

export {fetchExpenses}
