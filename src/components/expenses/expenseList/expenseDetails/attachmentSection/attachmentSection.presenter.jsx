import React from 'react'
import {func, number, string} from 'prop-types'

import {receiptsAttached, clickToAttach} from './attachmentSection.presenter.utility'
import copy from './attachmentSection.locales'

import './attachmentSection.styles.css'

const fileInputId = 'uploadReceipt'

const AttachmentSection = ({
  onAttachmentChange,
  numberOfReceipts,
  locale
}) => (
  <div className='attachmentSection'>
    <div className='iconContainer'>
      <i className='fas fa-paperclip' />
    </div>
    <div className='receiptDescription'>
      <p>
        {receiptsAttached({
          numberOfReceipts,
          locale
        })}
      </p>
      <p>
        {clickToAttach({
          numberOfReceipts,
          locale
        })}
      </p>
    </div>
    <input
      type='file'
      id={fileInputId}
      onChange={onAttachmentChange}
    />
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    <label htmlFor={fileInputId}>
      {copy[locale].uploadReceipt()}
    </label>
  </div>
)

AttachmentSection.propTypes = {
  onAttachmentChange: func.isRequired,
  numberOfReceipts: number,
  locale: string.isRequired
}

export default AttachmentSection
