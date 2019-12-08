import {useEffect, useState} from 'react'
import {fetchCurrencyExchangeData} from './expenses.consumers'

const useExpenseFilters = ({preferredCurrency}) => {
  const [searchQuery, onSetSearchQuery] = useState('')
  const [amountFilters, onSetAmountFilters] = useState({
    min: 0,
    max: (preferredCurrency === 'DKK') ? 36000 : 5000
  })
  const [categoryFilters, onSetCategoryFilters] = useState({
    transport: true,
    plane: true,
    hotel: true,
    food: true,
    unknown: true
  })
  const [currencyFilters, onSetCurrencyFilters] = useState({
    DKK: true,
    GBP: true,
    EUR: true
  })
  return {
    searchQuery,
    onSetSearchQuery,
    amountFilters,
    onSetAmountFilters,
    categoryFilters,
    onSetCategoryFilters,
    currencyFilters,
    onSetCurrencyFilters
  }
}

const useCurrencyConversion = () => {
  const [
    currencyExchangeData,
    setCurrencyExchangeData
  ] = useState(null)

  useEffect(() => {
    fetchCurrencyExchangeData().then(newCurrencyExchangeData => {
      setCurrencyExchangeData(newCurrencyExchangeData)
    })
  }, [])

  return currencyExchangeData
}

export {useExpenseFilters, useCurrencyConversion}
