const api = 'http://localhost:3000'

const addCommentToExpense = async ({expenseId, comment}) => {
  const formData = new FormData()
  formData.set('comment', comment)
  const response = await fetch([
    api,
    '/expenses',
    `/${expenseId}`
  ].join(''), {
    method: 'POST',
    body: formData
  })
  const result = await response.json()
  return result
}

// eslint-disable-next-line import/prefer-default-export
export {addCommentToExpense}
