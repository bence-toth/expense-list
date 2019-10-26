const formatMonth = ({date, locale}) => {
  const options = {
    year: 'numeric',
    month: 'long'
  }
  const formatter = new Intl.DateTimeFormat(locale, options)
  return formatter.format(date)
}

const generateGroupKeyFromDate = date =>
  `${date.getFullYear()}${date.getMonth()}`

const getSelectedExpenseData = ({expenses, selectedExpenseId}) => {
  const {amount, category, date, merchant, user} = expenses
    .flatMap(({expenseItems}) => expenseItems)
    .find(({id}) => (id === selectedExpenseId))
  return {amount, category, date, merchant, user}
}

export {
  formatMonth,
  generateGroupKeyFromDate,
  getSelectedExpenseData
}
