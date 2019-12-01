const locales = {
  'en-GB': {
    noReceiptAttached: () => 'No receipt was attached yet.',
    oneReceiptAttached: () => '1 receipt was attached.',
    multipleReceiptsAttached: ({numberOfReceipts}) => `${numberOfReceipts} receipts were attached.`,
    clickToUploadReceipt: () => 'Click to upload receipt.',
    clickToUploadAnotherReceipt: () => 'Click to upload another one.',
    uploadReceipt: () => 'Upload receipt'
  },
  'en-US': {
    noReceiptAttached: () => 'No receipt was attached yet.',
    oneReceiptAttached: () => '1 receipt was attached.',
    multipleReceiptsAttached: ({numberOfReceipts}) => `${numberOfReceipts} receipts were attached.`,
    clickToUploadReceipt: () => 'Click to upload receipt.',
    clickToUploadAnotherReceipt: () => 'Click to upload another one.',
    uploadReceipt: () => 'Upload receipt'
  },
  'dk-DK': {
    noReceiptAttached: () => 'Der er ikke knyttet nogen kvittering endnu.',
    oneReceiptAttached: () => 'En kvittering blev vedhæftet.',
    multipleReceiptsAttached: ({numberOfReceipts}) => `${numberOfReceipts} kvittering blev vedhæftet.`,
    clickToUploadReceipt: () => 'Klik for at uploade kvitteringen.',
    clickToUploadAnotherReceipt: () => 'Klik for at uploade en anden kvittering',
    uploadReceipt: () => 'Upload kvittering'
  }
}

export default locales
