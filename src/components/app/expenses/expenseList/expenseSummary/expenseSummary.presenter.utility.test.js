import {formatFullDate, formatCurrency, getIconNameByCategory, convertCurrency} from './expenseSummary.presenter.utility'

describe('formatFullDate', () => {
  it('should format date correctly', () => {
    const actual = formatFullDate({
      date: new Date('2019-12-10T12:34:56'),
      locale: 'en-GB'
    })
    const expected = '12/10/19, 12:34 PM'
    expect(actual).toEqual(expected)
  })
})

describe('formatCurrency', () => {
  it('should format currency correctly', () => {
    const actual = formatCurrency({
      amount: 1000,
      currency: 'GBP',
      locale: 'en-GB'
    })
    const expected = '£1,000.00'
    expect(actual).toEqual(expected)
  })
})

describe('getIconNameByCategory', () => {
  it('should format currency correctly', () => {
    expect(getIconNameByCategory('plane')).toEqual('fas fa-plane')
    expect(getIconNameByCategory('transport')).toEqual('fas fa-taxi',)
    expect(getIconNameByCategory('hotel')).toEqual('fas fa-hotel',)
    expect(getIconNameByCategory('food')).toEqual('fas fa-utensils')
    expect(getIconNameByCategory(null)).toEqual('fas fa-question')
  })
})

describe('convertCurrency', () => {
  it('should get correct conversion', () => {
    const currencyExchangeData = {
      DKK: {EUR: 0.1338, GBP: 0.1125},
      EUR: {DKK: 7.4731, GBP: 0.8407},
      GBP: {DKK: 8.8888, EUR: 1.1894}
    }
    expect(convertCurrency({
      from: 'DKK',
      to: 'EUR',
      amount: 10,
      currencyExchangeData
    })).toEqual(1.338)
    expect(convertCurrency({
      from: 'EUR',
      to: 'DKK',
      amount: 10,
      currencyExchangeData
    })).toEqual(74.731)
    expect(convertCurrency({
      from: 'GBP',
      to: 'EUR',
      amount: 10,
      currencyExchangeData
    })).toEqual(11.894)
    expect(convertCurrency({
      from: 'DKK',
      to: 'GBP',
      amount: 10,
      currencyExchangeData
    })).toEqual(1.125)
  })
})
