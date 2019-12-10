/* eslint-disable sonarjs/no-duplicate-string */
import {filterExpenses} from './expenseList.container.utility'

describe('filterExpenses', () => {
  const currencyExchangeData = {
    DKK: {EUR: 0.1338, GBP: 0.1125},
    EUR: {DKK: 7.4731, GBP: 0.8407},
    GBP: {DKK: 8.8888, EUR: 1.1894}
  }

  it('should apply currency filters', () => {
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
    const noGBPActual = filterExpenses({
      expenses,
      amountFilters: {min: 0, max: 36000},
      categoryFilters: {transport: true, plane: true, hotel: true, food: true, unknown: true},
      currencyExchangeData,
      currencyFilters: {DKK: true, GBP: false, EUR: true},
      searchQuery: '',
      preferredCurrency: 'DKK'
    })
    const noGBPExpected = [
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
    expect(noGBPActual).toEqual(noGBPExpected)
  })

  it('should apply category filters', () => {
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
    const noFoodNoUnknownActual = filterExpenses({
      expenses,
      amountFilters: {min: 0, max: 36000},
      categoryFilters: {transport: true, plane: true, hotel: true, food: false, unknown: false},
      currencyExchangeData,
      currencyFilters: {DKK: true, GBP: true, EUR: true},
      searchQuery: '',
      preferredCurrency: 'DKK'
    })
    const noFoodNoUnknownExpected = [
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
    ]
    expect(noFoodNoUnknownActual).toEqual(noFoodNoUnknownExpected)
  })

  it('should apply search query', () => {
    const expenses = [
      {
        groupStart: '2018-09-01T00:00:00.000Z',
        expenseItems: [
          {
            id: '5b996064dfd5b783915112f5',
            amount: {value: '1854.99', currency: 'EUR'},
            date: '2018-09-10T02:11:29.184Z',
            merchant: 'MICHA',
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
            merchant: 'KAGE',
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
    const searchForMichaActual = filterExpenses({
      expenses,
      amountFilters: {min: 0, max: 36000},
      categoryFilters: {transport: true, plane: true, hotel: true, food: true, unknown: true},
      currencyExchangeData,
      currencyFilters: {DKK: true, GBP: true, EUR: true},
      searchQuery: 'micha',
      preferredCurrency: 'DKK'
    })
    const searchForMichaAndPleoActual = filterExpenses({
      expenses,
      amountFilters: {min: 0, max: 36000},
      categoryFilters: {transport: true, plane: true, hotel: true, food: true, unknown: true},
      currencyExchangeData,
      currencyFilters: {DKK: true, GBP: true, EUR: true},
      searchQuery: 'micha pleo',
      preferredCurrency: 'DKK'
    })
    const searchForMichaExpected = [
      {
        groupStart: '2018-09-01T00:00:00.000Z',
        expenseItems: [
          {
            id: '5b996064dfd5b783915112f5',
            amount: {value: '1854.99', currency: 'EUR'},
            date: '2018-09-10T02:11:29.184Z',
            merchant: 'MICHA',
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
          }
        ]
      }
    ]
    expect(searchForMichaActual).toEqual(searchForMichaExpected)
    expect(searchForMichaAndPleoActual).toEqual(searchForMichaExpected)
  })

  it('should apply amount filter', () => {
    const expenses = [
      {
        groupStart: '2018-09-01T00:00:00.000Z',
        expenseItems: [
          {
            id: '5b996064dfd5b783915112f5',
            amount: {value: '3000.99', currency: 'EUR'},
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
            amount: {value: '20', currency: 'GBP'},
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
            amount: {value: '50000', currency: 'DKK'},
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
    const noSmallExpenseActual = filterExpenses({
      expenses,
      amountFilters: {min: 20000, max: 100000},
      categoryFilters: {transport: true, plane: true, hotel: true, food: true, unknown: true},
      currencyExchangeData,
      currencyFilters: {DKK: true, GBP: true, EUR: true},
      searchQuery: '',
      preferredCurrency: 'DKK'
    })
    const noSmallExpenseExpected = [
      {
        groupStart: '2018-09-01T00:00:00.000Z',
        expenseItems: [
          {
            id: '5b996064dfd5b783915112f5',
            amount: {value: '3000.99', currency: 'EUR'},
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
            id: '5b995dffa0834eddc16e2f76',
            amount: {value: '50000', currency: 'DKK'},
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
    expect(noSmallExpenseActual).toEqual(noSmallExpenseExpected)
  })

  it('should bail out from amount filters if no currency exchange data was provided', () => {
    const expenses = [
      {
        groupStart: '2018-09-01T00:00:00.000Z',
        expenseItems: [
          {
            id: '5b996064dfd5b783915112f5',
            amount: {value: '3000.99', currency: 'EUR'},
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
            amount: {value: '20', currency: 'GBP'},
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
            amount: {value: '50000', currency: 'DKK'},
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
    const noCurrencyExchangeDataActual = filterExpenses({
      expenses,
      amountFilters: {min: 20000, max: 35000},
      categoryFilters: {transport: true, plane: true, hotel: true, food: true, unknown: true},
      currencyExchangeData: null,
      currencyFilters: {DKK: true, GBP: true, EUR: true},
      searchQuery: '',
      preferredCurrency: 'DKK'
    })
    expect(noCurrencyExchangeDataActual).toEqual(expenses)
  })

  it('should delete empty groups', () => {
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
    const noTransportActual = filterExpenses({
      expenses,
      amountFilters: {min: 0, max: 36000},
      categoryFilters: {transport: false, plane: true, hotel: true, food: true, unknown: true},
      currencyExchangeData,
      currencyFilters: {DKK: true, GBP: true, EUR: true},
      searchQuery: '',
      preferredCurrency: 'DKK'
    })
    const noTransportExpected = [
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
    expect(noTransportActual).toEqual(noTransportExpected)
  })
})
