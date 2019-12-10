/* eslint-disable sonarjs/no-duplicate-string */
import {formatMonth, generateGroupKeyFromDate, getSelectedExpense} from './expenseList.presenter.utility'

describe('formatMonth', () => {
  it('should format month correctly', () => {
    const actual = formatMonth({
      date: new Date('2019-12-10T22:00:00'),
      locale: 'en-US'
    })
    const expected = 'December 2019'
    expect(actual).toEqual(expected)
  })
})

describe('generateGroupKeyFromDate', () => {
  it('should generate correct key', () => {
    const actual = generateGroupKeyFromDate(new Date('2019-12-10T22:00:00'))
    const expected = '201912'
    expect(actual).toEqual(expected)
  })
})

describe('getSelectedExpense', () => {
  it('should select expense by id', () => {
    const expenses = [
      {
        groupStart: '2018-09-01T00:00:00.000Z',
        expenseItems: [
          {
            id: '5b996064dfd5b783915112f5',
            amount: {value: '1854.99', currency: 'EUR'},
            date: '2018-09-10T02:11:29.184Z',
            merchant: 'KAGE',
            receipts: [],
            comment: '',
            category: 'transport',
            user: {
              first: 'Vickie',
              last: 'Lee',
              email: 'vickie.lee@pleo.io',
              avatar: 'https://i.pravatar.cc/150'
            },
            index: 0,
            groupStartDate: '2018-09'
          }
        ]
      },
      {
        groupStart: '2018-08-01T00:00:00.000Z',
        expenseItems: [
          {
            id: '5b99606474ab17b7820b3922',
            amount: {value: '3222.88', currency: 'GBP'},
            date: '2018-08-13T07:11:01.680Z',
            merchant: 'ASSITIA',
            receipts: [],
            comment: '',
            category: 'food',
            user: {
              first: 'Lowe',
              last: 'Michael',
              email: 'lowe.michael@pleo.io',
              avatar: 'https://i.pravatar.cc/151'
            },
            index: 1,
            groupStartDate: '2018-08'
          },
          {
            id: '5b995dffa0864eddc16e2f76',
            amount: {value: '166', currency: 'GBP'},
            date: '2018-08-12T00:37:46.342Z',
            merchant: 'KONNECT',
            receipts: [],
            comment: '',
            category: 'hotel',
            user: {
              first: 'Pam',
              last: 'Noble',
              email: 'pam.noble@pleo.io',
              avatar: null
            },
            index: 2,
            groupStartDate: '2018-08'
          },
          {
            id: '5b995dffa0834eddc16e2f76',
            amount: {value: '166', currency: 'DKK'},
            date: '2018-08-12T00:37:46.342Z',
            merchant: 'ASDNECT',
            receipts: [],
            comment: '',
            category: null,
            user: {
              first: 'Pamela',
              last: 'Nobleson',
              email: 'pamela.nobleson@pleo.io',
              avatar: null
            },
            index: 2,
            groupStartDate: '2018-08'
          }
        ]
      }
    ]
    const actual = getSelectedExpense({
      expenses,
      selectedExpenseId: '5b995dffa0864eddc16e2f76'
    })
    const expected = {
      id: '5b995dffa0864eddc16e2f76',
      amount: {value: '166', currency: 'GBP'},
      date: '2018-08-12T00:37:46.342Z',
      merchant: 'KONNECT',
      receipts: [],
      comment: '',
      category: 'hotel',
      user: {
        first: 'Pam',
        last: 'Noble',
        email: 'pam.noble@pleo.io',
        avatar: null
      }
    }
    expect(actual).toEqual(expected)
  })
})
