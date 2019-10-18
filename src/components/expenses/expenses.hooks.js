import {useState, useEffect} from 'react'

import {fetchExpenses} from './expenses.consumers'

const loadExpenses = async ({setExpenses}) => {
  const expenses = await fetchExpenses()
  setExpenses(expenses)
}

const useExpenses = () => {
  const [expenses, setExpenses] = useState(null)
  useEffect(() => {
    loadExpenses({setExpenses})
  }, [])
  return expenses
}

export {useExpenses}
