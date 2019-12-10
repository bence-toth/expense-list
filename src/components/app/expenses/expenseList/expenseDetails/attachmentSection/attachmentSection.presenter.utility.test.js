import {receiptsAttached, clickToAttach} from './attachmentSection.presenter.utility'

describe('receiptsAttached', () => {
  it('should return correct copy', () => {
    expect(receiptsAttached({
      numberOfReceipts: 0,
      locale: 'en-GB'
    })).toEqual('No receipt was attached yet.')
    expect(receiptsAttached({
      numberOfReceipts: 1,
      locale: 'en-GB'
    })).toEqual('1 receipt was attached.')
    expect(receiptsAttached({
      numberOfReceipts: 10,
      locale: 'en-GB'
    })).toEqual('10 receipts were attached.')
  })
})

describe('clickToAttach', () => {
  it('should return correct copy', () => {
    expect(clickToAttach({
      numberOfReceipts: 0,
      locale: 'en-GB'
    })).toEqual('Click to upload receipt.')
    expect(clickToAttach({
      numberOfReceipts: 2,
      locale: 'en-GB'
    })).toEqual('Click to upload another one.')
  })
})
