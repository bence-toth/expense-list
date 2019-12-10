import {formatMonth} from './expenseGroup.presenter.utility'

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
