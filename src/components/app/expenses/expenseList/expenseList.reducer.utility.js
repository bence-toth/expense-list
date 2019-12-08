const updateComment = action => (expense => {
  if (expense.id === action.expenseId) {
    return {
      ...expense,
      comment: action.comment
    }
  }
  return expense
})

const updateReceipts = action => (expense => {
  if (expense.id === action.expenseId) {
    return {
      ...expense,
      receipts: action.receipts
    }
  }
  return expense
})

export {
  updateComment,
  updateReceipts
}
