const formatMonth = ({date, locale}) => {
  const options = {
    year: 'numeric',
    month: 'long'
  }
  const formatter = new Intl.DateTimeFormat(locale, options)
  return formatter.format(date)
}

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

const generateGroupKeyFromDate = date =>
  `${date.getFullYear()}${date.getMonth()}`

export {formatMonth, formatFullDate, formatCurrency, generateGroupKeyFromDate}
