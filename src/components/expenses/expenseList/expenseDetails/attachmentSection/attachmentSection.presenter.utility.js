import copy from './attachmentSection.locales'

const receiptsAttached = ({numberOfReceipts, locale}) => {
  if (numberOfReceipts === 0) {
    return copy[locale].noReceiptAttached()
  }
  if (numberOfReceipts === 1) {
    return copy[locale].oneReceiptAttached()
  }
  return copy[locale].multipleReceiptsAttached({
    numberOfReceipts
  })
}

const clickToAttach = ({numberOfReceipts, locale}) => {
  if (numberOfReceipts === 0) {
    return copy[locale].clickToUploadReceipt()
  }
  return copy[locale].clickToUploadAnotherReceipt()
}

export {receiptsAttached, clickToAttach}
