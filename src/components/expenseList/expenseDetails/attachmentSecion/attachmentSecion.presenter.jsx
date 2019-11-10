import React from 'react'
import {string, func, number} from 'prop-types'

import {addReceiptToExpense} from './attachmentSecion.consumers'

import './attachmentSecion.styles.css'

const receiptsAttached = ({numberOfReceipts}) => {
  if (numberOfReceipts === 0) {
    return 'No receipt was attached yet.'
  }
  if (numberOfReceipts === 1) {
    return '1 receipt was attached.'
  }
  return `${numberOfReceipts} receipts were attached.`
}

const clickToAttach = ({numberOfReceipts}) => {
  if (numberOfReceipts === 0) {
    return 'Click to upload receipt.'
  }
  return 'Click to upload another one.'
}

const AttachmentSection = ({
  expenseId,
  onSetExpenseReceipts,
  numberOfReceipts
}) => (
  <div className='attachmentSection'>
    <div className='iconContainer'>
      <i className='fas fa-paperclip' />
    </div>
    <div className='receiptDescription'>
      <p>{receiptsAttached({numberOfReceipts})}</p>
      <p>{clickToAttach({numberOfReceipts})}</p>
    </div>
    <input
      type='file'
      id='uploadReceipt'
      onChange={event => {
        if (event.target.files.length > 0) {
          addReceiptToExpense({
            expenseId,
            receipt: event.target.files[0]
          }).then(({receipts}) => {
            onSetExpenseReceipts({
              expenseId,
              receipts
            })
          })
        }
      }}
    />
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    <label htmlFor='uploadReceipt'>
      Upload receipt
    </label>
  </div>
)

AttachmentSection.propTypes = {
  expenseId: string.isRequired,
  onSetExpenseReceipts: func.isRequired,
  numberOfReceipts: number
}

export default AttachmentSection
