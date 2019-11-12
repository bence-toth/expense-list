const formatFullDate = ({date, locale}) => {
  const options = {
    dateStyle: 'short',
    timeStyle: 'short'
  }
  const formatter = new Intl.DateTimeFormat(locale, options)
  return formatter.format(new Date(date))
}

const formatCurrency = ({amount, currency, locale}) => {
  const options = {
    style: 'currency',
    currency
  }
  const formatter = new Intl.NumberFormat(locale, options)
  return formatter.format(Number(amount))
}

const getIconNameByCategory = category => ({
  plane: 'fas fa-plane',
  transport: 'fas fa-taxi',
  hotel: 'fas fa-hotel',
  food: 'fas fa-utensils'
})[category] || 'fas fa-question'

const convertCurrency = ({
  from,
  to,
  amount,
  currencyExchangeData
}) => amount * currencyExchangeData[from][to]

export {formatFullDate, formatCurrency, getIconNameByCategory, convertCurrency}
