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

export {receiptsAttached, clickToAttach}
