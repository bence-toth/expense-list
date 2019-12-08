/* eslint-disable sonarjs/no-duplicate-string */
// import each from 'mocha-each'

import {
  initialSelectionState,
  selectionReducer,
  initialExpensesState,
  expensesReducer
} from './expenseList.reducer'
import {
  onPreselectExpense,
  onSelectExpense,
  onUnselectExpense,
  onRequestExpenses,
  onReceiveExpenses,
  onUpdateExpenseComment,
  onUpdateExpenseReceipts
} from './expenseList.actionCreators'

describe('selectionReducer', () => {
  it('onPreselectExpense should update state correctly', () => {
    const action = onPreselectExpense({id: 'fake-id'})
    const endState = selectionReducer(initialSelectionState, action)
    expect(endState).toEqual({
      preselectedExpenseId: 'fake-id',
      selectedExpenseId: null
    })
  })
  it('onSelectExpense should update state correctly', () => {
    const action = onSelectExpense({id: 'fake-id'})
    const endState = selectionReducer({
      preselectedExpenseId: 'fake-id',
      selectedExpenseId: null
    }, action)
    expect(endState).toEqual({
      preselectedExpenseId: 'fake-id',
      selectedExpenseId: 'fake-id'
    })
  })
  it('onUnselectExpense should update state correctly', () => {
    const action = onUnselectExpense()
    const endState = selectionReducer({
      preselectedExpenseId: 'fake-id',
      selectedExpenseId: 'fake-id'
    }, action)
    expect(endState).toEqual({
      preselectedExpenseId: 'fake-id',
      selectedExpenseId: null
    })
  })
  it('unknown action should not update state', () => {
    const action = ({type: 'no-such-action'})
    const endState = selectionReducer(initialSelectionState, action)
    expect(endState).toEqual(initialSelectionState)
  })
})

describe('expensesReducer', () => {
  it('onRequestExpenses should update state correctly', () => {
    const action = onRequestExpenses()
    const endState = expensesReducer(initialExpensesState, action)
    expect(endState).toEqual({
      shouldFetchMore: true,
      isFetching: true,
      expenses: [],
      rawExpenses: []
    })
  })
  it('onReceiveExpenses should update state correctly', () => {
    const action = onReceiveExpenses({
      expenses: [
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
            }
          ]
        }
      ],
      rawExpenses: [
        {
          id: '5b996064dfd5b783915112f5',
          amount: {
            value: '1854.99',
            currency: 'EUR'
          },
          date: '2018-09-10T02:11:29.184Z',
          merchant: 'KAGE',
          receipts: [],
          comment: '',
          category: '',
          user: {
            first: 'Vickie',
            last: 'Lee',
            email: 'vickie.lee@pleo.io'
          },
          index: 0
        },
        {
          id: '5b99606474ab17b7820b3922',
          amount: {value: '3222.88', currency: 'GBP'},
          date: '2018-08-13T07:11:01.680Z',
          merchant: 'ASSITIA',
          receipts: [],
          comment: '',
          category: '',
          user: {first: 'Lowe', last: 'Michael', email: 'lowe.michael@pleo.io'},
          index: 1
        },
        {
          id: '5b995dffa0864eddc16e2f76',
          amount: {value: '166', currency: 'GBP'},
          date: '2018-08-12T00:37:46.342Z',
          merchant: 'KONNECT',
          receipts: [],
          comment: '',
          category: '',
          user: {first: 'Pam', last: 'Noble', email: 'pam.noble@pleo.io'},
          index: 2
        }
      ],
      shouldFetchMore: false
    })
    const endState = expensesReducer({
      shouldFetchMore: true,
      isFetching: true,
      expenses: [],
      rawExpenses: []
    }, action)
    expect(endState).toEqual({
      shouldFetchMore: false,
      isFetching: false,
      expenses: [
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
            }
          ]
        }
      ],
      rawExpenses: [
        {
          id: '5b996064dfd5b783915112f5',
          amount: {
            value: '1854.99',
            currency: 'EUR'
          },
          date: '2018-09-10T02:11:29.184Z',
          merchant: 'KAGE',
          receipts: [],
          comment: '',
          category: '',
          user: {
            first: 'Vickie',
            last: 'Lee',
            email: 'vickie.lee@pleo.io'
          },
          index: 0
        },
        {
          id: '5b99606474ab17b7820b3922',
          amount: {value: '3222.88', currency: 'GBP'},
          date: '2018-08-13T07:11:01.680Z',
          merchant: 'ASSITIA',
          receipts: [],
          comment: '',
          category: '',
          user: {first: 'Lowe', last: 'Michael', email: 'lowe.michael@pleo.io'},
          index: 1
        },
        {
          id: '5b995dffa0864eddc16e2f76',
          amount: {value: '166', currency: 'GBP'},
          date: '2018-08-12T00:37:46.342Z',
          merchant: 'KONNECT',
          receipts: [],
          comment: '',
          category: '',
          user: {first: 'Pam', last: 'Noble', email: 'pam.noble@pleo.io'},
          index: 2
        }
      ]
    })
  })
  it('onUpdateExpenseComment should update state correctly', () => {
    const action = onUpdateExpenseComment({
      expenseId: '5b99606474ab17b7820b3922',
      comment: 'New comment'
    })
    const endState = expensesReducer({
      expenses: [
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
            }
          ]
        }
      ],
      rawExpenses: [
        {
          id: '5b996064dfd5b783915112f5',
          amount: {
            value: '1854.99',
            currency: 'EUR'
          },
          date: '2018-09-10T02:11:29.184Z',
          merchant: 'KAGE',
          receipts: [],
          comment: '',
          category: '',
          user: {
            first: 'Vickie',
            last: 'Lee',
            email: 'vickie.lee@pleo.io'
          },
          index: 0
        },
        {
          id: '5b99606474ab17b7820b3922',
          amount: {value: '3222.88', currency: 'GBP'},
          date: '2018-08-13T07:11:01.680Z',
          merchant: 'ASSITIA',
          receipts: [],
          comment: '',
          category: '',
          user: {first: 'Lowe', last: 'Michael', email: 'lowe.michael@pleo.io'},
          index: 1
        },
        {
          id: '5b995dffa0864eddc16e2f76',
          amount: {value: '166', currency: 'GBP'},
          date: '2018-08-12T00:37:46.342Z',
          merchant: 'KONNECT',
          receipts: [],
          comment: '',
          category: '',
          user: {first: 'Pam', last: 'Noble', email: 'pam.noble@pleo.io'},
          index: 2
        }
      ],
      shouldFetchMore: false,
      isFetching: false
    }, action)
    expect(endState).toEqual({
      shouldFetchMore: false,
      isFetching: false,
      expenses: [
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
              comment: 'New comment',
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
            }
          ]
        }
      ],
      rawExpenses: [
        {
          id: '5b996064dfd5b783915112f5',
          amount: {
            value: '1854.99',
            currency: 'EUR'
          },
          date: '2018-09-10T02:11:29.184Z',
          merchant: 'KAGE',
          receipts: [],
          comment: '',
          category: '',
          user: {
            first: 'Vickie',
            last: 'Lee',
            email: 'vickie.lee@pleo.io'
          },
          index: 0
        },
        {
          id: '5b99606474ab17b7820b3922',
          amount: {value: '3222.88', currency: 'GBP'},
          date: '2018-08-13T07:11:01.680Z',
          merchant: 'ASSITIA',
          receipts: [],
          comment: 'New comment',
          category: '',
          user: {first: 'Lowe', last: 'Michael', email: 'lowe.michael@pleo.io'},
          index: 1
        },
        {
          id: '5b995dffa0864eddc16e2f76',
          amount: {value: '166', currency: 'GBP'},
          date: '2018-08-12T00:37:46.342Z',
          merchant: 'KONNECT',
          receipts: [],
          comment: '',
          category: '',
          user: {first: 'Pam', last: 'Noble', email: 'pam.noble@pleo.io'},
          index: 2
        }
      ]
    })
  })
  it('onUpdateExpenseReceipts should update state correctly', () => {
    const action = onUpdateExpenseReceipts({
      expenseId: '5b99606474ab17b7820b3922',
      receipts: [
        {url: '/receipts/5b996064dfd5b783915112f5-0'},
        {url: '/receipts/5b996064dfd5b783915112f5-1'}
      ]
    })
    const endState = expensesReducer({
      expenses: [
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
            }
          ]
        }
      ],
      rawExpenses: [
        {
          id: '5b996064dfd5b783915112f5',
          amount: {
            value: '1854.99',
            currency: 'EUR'
          },
          date: '2018-09-10T02:11:29.184Z',
          merchant: 'KAGE',
          receipts: [],
          comment: '',
          category: '',
          user: {
            first: 'Vickie',
            last: 'Lee',
            email: 'vickie.lee@pleo.io'
          },
          index: 0
        },
        {
          id: '5b99606474ab17b7820b3922',
          amount: {value: '3222.88', currency: 'GBP'},
          date: '2018-08-13T07:11:01.680Z',
          merchant: 'ASSITIA',
          receipts: [],
          comment: '',
          category: '',
          user: {first: 'Lowe', last: 'Michael', email: 'lowe.michael@pleo.io'},
          index: 1
        },
        {
          id: '5b995dffa0864eddc16e2f76',
          amount: {value: '166', currency: 'GBP'},
          date: '2018-08-12T00:37:46.342Z',
          merchant: 'KONNECT',
          receipts: [],
          comment: '',
          category: '',
          user: {first: 'Pam', last: 'Noble', email: 'pam.noble@pleo.io'},
          index: 2
        }
      ],
      shouldFetchMore: false,
      isFetching: false
    }, action)
    expect(endState).toEqual({
      shouldFetchMore: false,
      isFetching: false,
      expenses: [
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
              receipts: [
                {url: '/receipts/5b996064dfd5b783915112f5-0'},
                {url: '/receipts/5b996064dfd5b783915112f5-1'}
              ],
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
            }
          ]
        }
      ],
      rawExpenses: [
        {
          id: '5b996064dfd5b783915112f5',
          amount: {
            value: '1854.99',
            currency: 'EUR'
          },
          date: '2018-09-10T02:11:29.184Z',
          merchant: 'KAGE',
          receipts: [],
          comment: '',
          category: '',
          user: {
            first: 'Vickie',
            last: 'Lee',
            email: 'vickie.lee@pleo.io'
          },
          index: 0
        },
        {
          id: '5b99606474ab17b7820b3922',
          amount: {value: '3222.88', currency: 'GBP'},
          date: '2018-08-13T07:11:01.680Z',
          merchant: 'ASSITIA',
          receipts: [
            {url: '/receipts/5b996064dfd5b783915112f5-0'},
            {url: '/receipts/5b996064dfd5b783915112f5-1'}
          ],
          comment: '',
          category: '',
          user: {first: 'Lowe', last: 'Michael', email: 'lowe.michael@pleo.io'},
          index: 1
        },
        {
          id: '5b995dffa0864eddc16e2f76',
          amount: {value: '166', currency: 'GBP'},
          date: '2018-08-12T00:37:46.342Z',
          merchant: 'KONNECT',
          receipts: [],
          comment: '',
          category: '',
          user: {first: 'Pam', last: 'Noble', email: 'pam.noble@pleo.io'},
          index: 2
        }
      ]
    })
  })
  it('unknown action should not update state', () => {
    const action = ({type: 'no-such-action'})
    const endState = expensesReducer(initialSelectionState, action)
    expect(endState).toEqual(initialSelectionState)
  })
})
