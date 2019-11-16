// Get a deterministic random-like number based on the id
const getMagicNumber = ({id}) => parseInt(id.slice(-4), 16)

// Add mock categories, use `null` sometimes
const categories = [
  'transport',
  'transport',
  'transport',
  'transport',
  'hotel',
  'hotel',
  'hotel',
  'food',
  'food',
  'plane',
  null
]

const addMockCategory = expense => ({
  ...expense,
  category: categories[getMagicNumber(expense) % categories.length]
})

// Add mock user avatars, use `null` sometimes
const addMockUserAvatar = (expense, expenseIndex) => ({
  ...expense,
  user: {
    ...expense.user,
    avatar: ((getMagicNumber(expense) % 5) > 0)
      ? `https://i.pravatar.cc/${150 + expenseIndex}`
      : null
  }
})

// Add month start date to expenses
const generateGroupStartDate = expense => ({
  ...expense,
  groupStartDate: expense.date.slice(0, 'YYYY-MM'.length)
})

const groupByGroupStartDate = (accumulator, expense) => {
  const key = expense.groupStartDate
  return ({
    ...accumulator,
    [key]: accumulator[key]
      ? [...accumulator[key], expense]
      : [expense]
  })
}

// Turn object to array of arrays that represents group structure
const groupsToArray = groups =>
  Object.keys(groups).map(date => ({
    groupStart: new Date(date),
    expenseItems: groups[date]
  }))

// Compose all preparations
const prepareExpenses = expenses => {
  const transformedExpenses = expenses
    .map(addMockCategory)
    .map(addMockUserAvatar)
    .map(generateGroupStartDate)
    .reduce(groupByGroupStartDate, {})
  return groupsToArray(transformedExpenses)
}

// eslint-disable-next-line import/prefer-default-export
export {prepareExpenses}
