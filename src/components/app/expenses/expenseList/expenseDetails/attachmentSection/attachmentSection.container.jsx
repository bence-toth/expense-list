import React from 'react'
import {string, func, number} from 'prop-types'

import {addReceiptToExpense} from './attachmentSection.consumers'
import Presenter from './attachmentSection.presenter'

const AttachmentSection = ({
  expenseId,
  onSetExpenseReceipts,
  numberOfReceipts,
  locale
}) => (
  <Presenter
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
    locale={locale}
  />
)

AttachmentSection.displayName = 'AttachmentSectionContainer'

AttachmentSection.propTypes = {
  expenseId: string.isRequired,
  onSetExpenseReceipts: func.isRequired,
  numberOfReceipts: number,
  locale: string.isRequired
}

export default AttachmentSection
