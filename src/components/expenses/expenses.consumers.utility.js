// Get a deterministic random-like number based on the id
const getMagicNumber = ({id}) => parseInt(id.slice(-4), 16)

// Add mock categories, use `null` sometimes
const categories = ['transport', 'plane', 'hotel', 'food', null]
const addMockCategories = expense => ({
  ...expense,
  category: categories[getMagicNumber(expense) % 5]
})

// Add mock user avatars, use `null` sometimes
const addMockUserAvatars = (expense, expenseIndex) => ({
  ...expense,
  user: {
    ...expense.user,
    avatar: ((getMagicNumber(expense) % 10) > 0)
      ? `https://i.pravatar.cc/${150 + expenseIndex}`
      : null
  }
})

// Sort expenses by date, oldest to newest
const sortByDate = (left, right) => {
  const leftDate = new Date(left.date)
  const rightDate = new Date(right.date)
  if (leftDate > rightDate) {
    return 1
  }
  if (leftDate < rightDate) {
    return -1
  }
  return 0
}

// Add month start date to expenses
const generateGroupStartDate = expense => {
  const date = new Date(expense.date)
  const groupStartDate = new Date(0)
  groupStartDate.setFullYear(date.getFullYear())
  groupStartDate.setMonth(date.getMonth() + 1)
  return {
    ...expense,
    groupStartDate
  }
}

// Turn array of expenses to object of months with expenses in them
const generateKey = ({groupStartDate}) => {
  const year = groupStartDate.getFullYear()
  const month = (`0${groupStartDate.getMonth()}`).slice(-2)
  return `${year}-${month}`
}
const groupByGroupStartDate = (accumulator, expense) => {
  const key = generateKey(expense)
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
  // eslint-disable-next-line fp/no-mutating-methods
  const transformedExpenses = [...expenses]
    .map(addMockCategories)
    .map(addMockUserAvatars)
    .sort(sortByDate)
    .map(generateGroupStartDate)
    .reduce(groupByGroupStartDate, {})
  return groupsToArray(transformedExpenses)
}

// eslint-disable-next-line import/prefer-default-export
export {prepareExpenses}
