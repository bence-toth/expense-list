const api = 'http://localhost:3000'

const addReceiptToExpense = async ({expenseId, receipt}) => {
  const formData = new FormData()
  formData.set('receipt', receipt)
  const response = await fetch([
    api,
    '/expenses',
    `/${expenseId}`,
    '/receipts'
  ].join(''), {
    method: 'POST',
    body: formData
  })
  return response.json()
}

// eslint-disable-next-line import/prefer-default-export
export {addReceiptToExpense}
