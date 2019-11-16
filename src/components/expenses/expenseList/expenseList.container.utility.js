const applyCategoryFilters = categoryFilters => (expenseGroup => ({
  ...expenseGroup,
  expenseItems:
    expenseGroup.expenseItems
      .filter(expense => categoryFilters[expense.category || 'unknown'])
}))

const applyCurrencyFilters = currencyFilters => (expenseGroup => ({
  ...expenseGroup,
  expenseItems:
    expenseGroup.expenseItems
      .filter(expense => currencyFilters[
        expense.amount.currency
      ])
}))

const applySearchQueryFilter = searchQuery => (expenseGroup => ({
  ...expenseGroup,
  expenseItems:
    expenseGroup.expenseItems
      .filter(expense => {
        if (searchQuery.trim().length === 0) {
          return true
        }
        const needles = searchQuery
          .toLowerCase()
          .split(' ')
          .filter(({length}) => (length > 0))
        const haystacks = [
          expense.merchant.toLowerCase(),
          expense.user.email.toLowerCase(),
          expense.user.first.toLowerCase(),
          expense.user.last.toLowerCase()
        ]
        return needles.every(needle =>
          haystacks.some(haystack =>
            haystack.includes(needle)))
      })
}))

const isExpenseGroupNotEmpty =
  ({expenseItems}) => (expenseItems.length > 0)

const filterExpenses = ({
  expenses,
  categoryFilters,
  currencyFilters,
  searchQuery
}) => (
  expenses
    .map(applyCategoryFilters(categoryFilters))
    .map(applyCurrencyFilters(currencyFilters))
    .map(applySearchQueryFilter(searchQuery))
    .filter(isExpenseGroupNotEmpty)
)

// eslint-disable-next-line import/prefer-default-export
export {filterExpenses}
