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

const getSelectedExpense = ({expenses, selectedExpenseId}) => {
  const {
    id,
    amount,
    category,
    date,
    merchant,
    user,
    comment,
    receipts
  } = expenses
    .flatMap(({expenseItems}) => expenseItems)
    .find(({id: lookupId}) => (lookupId === selectedExpenseId))
  return {
    id,
    amount,
    category,
    date,
    merchant,
    user,
    comment,
    receipts
  }
}

export {
  formatMonth,
  generateGroupKeyFromDate,
  getSelectedExpense
}
