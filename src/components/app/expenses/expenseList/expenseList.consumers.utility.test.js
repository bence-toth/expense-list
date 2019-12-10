/* eslint-disable sonarjs/no-duplicate-string */
import each from 'mocha-each'

import {prepareExpenses} from './expenseList.consumers.utility'

describe('prepareExpenses', () => {
  it('should create groups properly', () => {
    const rawExpenses = [
      {
        id: '5b996064dfd5b783915112f5',
        date: '2018-09-10T02:11:29.184Z'
      },
      {
        id: '5b99606474ab17b7820b3922',
        date: '2018-08-13T07:11:01.680Z'
      },
      {
        id: '5b995dffa0864eddc16e2f76',
        date: '2018-08-12T00:37:46.342Z'
      }
    ]
    const preparedExpenses = prepareExpenses(rawExpenses)
    expect(preparedExpenses.length).toEqual(2)
    expect(preparedExpenses[0].groupStart.toISOString()).toEqual('2018-09-01T00:00:00.000Z')
    expect(preparedExpenses[0].expenseItems.length).toEqual(1)
    expect(preparedExpenses[0].expenseItems[0].id).toEqual('5b996064dfd5b783915112f5')
    expect(preparedExpenses[1].groupStart.toISOString()).toEqual('2018-08-01T00:00:00.000Z')
    expect(preparedExpenses[1].expenseItems.length).toEqual(2)
    expect(preparedExpenses[1].expenseItems[0].id).toEqual('5b99606474ab17b7820b3922')
    expect(preparedExpenses[1].expenseItems[1].id).toEqual('5b995dffa0864eddc16e2f76')
  })

  it('should mock user avatars', () => {
    const rawExpenses = [
      {
        id: '5b996064dfd5b783915112f5',
        date: '2018-09-10T02:11:29.184Z'
      },
      {
        id: '5b996064dfd5b783915112f6',
        date: '2018-09-10T02:12:29.184Z'
      },
      {
        id: '5b996064dfd5b783915112f7',
        date: '2018-09-10T02:13:29.184Z'
      },
      {
        id: '5b996064dfd5b783915112f8',
        date: '2018-09-10T02:14:29.184Z'
      },
      {
        id: '5b996064dfd5b783915112f9',
        date: '2018-09-10T02:15:29.184Z'
      },
      {
        id: '5b996064dfd5b783915112e7',
        date: '2018-09-10T02:16:29.184Z'
      },
      {
        id: '5b996064dfd5b783915112d5',
        date: '2018-09-10T02:17:29.184Z'
      },
      {
        id: '5b996064dfd5b783915112c6',
        date: '2018-09-10T02:18:29.184Z'
      },
      {
        id: '5b996064dfd5b783915112b7',
        date: '2018-09-10T02:19:29.184Z'
      }
    ]
    const preparedExpenses = prepareExpenses(rawExpenses)
    expect(preparedExpenses[0].expenseItems.some(expense =>
      expense.user.avatar.startsWith('https://i.pravatar.cc/'))).toEqual(true)
  })

  const rawExpenses = [
    {
      id: '5b996064dfd5b783915112f5',
      date: '2018-09-10T02:11:29.184Z',
      category: ''
    },
    {
      id: '5b996064dfd5b783915112f6',
      date: '2018-09-10T02:12:29.184Z',
      category: ''
    },
    {
      id: '5b996064dfd5b783915112f7',
      date: '2018-09-10T02:13:29.184Z',
      category: ''
    }
  ]
  const preparedExpenses = prepareExpenses(rawExpenses)
  const categories = ['transport', 'hotel', 'food', 'plane', null]
  each(preparedExpenses[0].expenseItems.map((expenseItem, index) => [
    `Should generate category for color #${index}`,
    expenseItem
  ]))
    .it('%s', (_, {category}) => {
      expect(categories.includes(category)).toEqual(true)
    })
})

// // Compose all preparations
// const prepareExpenses = expenses => {
//   const transformedExpenses = expenses
//     .map(addMockCategory)
//     .map(addMockUserAvatar)
//     .map(generateGroupStartDate)
//     .reduce(groupByGroupStartDate, {})
//   return groupsToArray(transformedExpenses)

// it('should create groups properly', () => {
//   const rawExpenses = [
//     {
//       id: '5b996064dfd5b783915112f5',
//       date: '2018-09-10T02:11:29.184Z',
//       merchant: 'KAGE',
//       receipts: [],
//       comment: '',
//       category: '',
//       user: {
//         first: 'Vickie',
//         last: 'Lee',
//         email: 'vickie.lee@pleo.io'
//       },
//       index: 0
//     },
//     {
//       id: '5b99606474ab17b7820b3922',
//       amount: {value: '3222.88', currency: 'GBP'},
//       date: '2018-08-13T07:11:01.680Z',
//       merchant: 'ASSITIA',
//       receipts: [],
//       comment: '',
//       category: '',
//       user: {first: 'Lowe', last: 'Michael', email: 'lowe.michael@pleo.io'},
//       index: 1
//     },
//     {
//       id: '5b995dffa0864eddc16e2f76',
//       amount: {value: '166', currency: 'GBP'},
//       date: '2018-08-12T00:37:46.342Z',
//       merchant: 'KONNECT',
//       receipts: [],
//       comment: '',
//       category: '',
//       user: {first: 'Pam', last: 'Noble', email: 'pam.noble@pleo.io'},
//       index: 2
//     }
//   ]
//   const preparedExpenses = prepareExpenses(rawExpenses)
//   expect(preparedExpenses.length).toEqual(2)
//   expect(preparedExpenses[0].groupStart.toISOString()).toEqual('2018-09-01T00:00:00.000Z')
//   expect(preparedExpenses[0].expenseItems.length).toEqual(1)
//   expect(preparedExpenses[0].expenseItems[0].id).toEqual('5b996064dfd5b783915112f5')
//   expect(preparedExpenses[1].groupStart.toISOString()).toEqual('2018-08-01T00:00:00.000Z')
//   expect(preparedExpenses[1].expenseItems.length).toEqual(2)
//   expect(preparedExpenses[1].expenseItems[0].id).toEqual('5b99606474ab17b7820b3922')
//   expect(preparedExpenses[1].expenseItems[1].id).toEqual('5b995dffa0864eddc16e2f76')
// })
