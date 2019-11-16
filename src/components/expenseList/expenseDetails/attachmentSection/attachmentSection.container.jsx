import React from 'react'
import {string, func, number} from 'prop-types'

import {addReceiptToExpense} from './attachmentSection.consumers'
import AttachmentSectionPresenter from './attachmentSection.presenter'

const AttachmentSection = ({
  expenseId,
  onSetExpenseReceipts,
  numberOfReceipts
}) => (
  <AttachmentSectionPresenter
    numberOfReceipts={numberOfReceipts}
    onAttachmentChange={({target: {files}}) => {
      if (files.length > 0) {
        addReceiptToExpense({
          expenseId,
          receipt: files[0]
        }).then(({receipts}) => {
          onSetExpenseReceipts({
            expenseId,
            receipts
          })
        })
      }
    }}
  />
)

AttachmentSection.propTypes = {
  expenseId: string.isRequired,
  onSetExpenseReceipts: func.isRequired,
  numberOfReceipts: number
}

export default AttachmentSection
