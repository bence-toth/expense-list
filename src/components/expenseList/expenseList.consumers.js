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

const fetchCurrencyExchangeData = async () => {
  const dkkResponse = await fetch('https://api.exchangeratesapi.io/latest?base=DKK')
  const eurResponse = await fetch('https://api.exchangeratesapi.io/latest?base=EUR')
  const gbpResponse = await fetch('https://api.exchangeratesapi.io/latest?base=GBP')
  const {rates: {EUR: dkkToEur, GBP: dkkToGbp}} = await dkkResponse.json()
  const {rates: {DKK: eurToDkk, GBP: eurToGbp}} = await eurResponse.json()
  const {rates: {EUR: gbpToEur, DKK: gbpToDkk}} = await gbpResponse.json()
  return {
    DKK: {
      EUR: dkkToEur,
      GBP: dkkToGbp
    },
    EUR: {
      DKK: eurToDkk,
      GBP: eurToGbp
    },
    GBP: {
      DKK: gbpToDkk,
      EUR: gbpToEur
    }
  }
}

export {fetchExpenses, fetchCurrencyExchangeData}
