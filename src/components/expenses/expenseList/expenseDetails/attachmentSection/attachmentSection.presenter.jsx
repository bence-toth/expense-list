import React from 'react'
import {func, number} from 'prop-types'

import {receiptsAttached, clickToAttach} from './attachmentSection.presenter.utility'

import './attachmentSection.styles.css'

const fileInputId = 'uploadReceipt'

const AttachmentSection = ({
  onAttachmentChange,
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
      id={fileInputId}
      onChange={onAttachmentChange}
    />
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    <label htmlFor={fileInputId}>
      Upload receipt
    </label>
  </div>
)

AttachmentSection.propTypes = {
  onAttachmentChange: func.isRequired,
  numberOfReceipts: number
}

export default AttachmentSection
