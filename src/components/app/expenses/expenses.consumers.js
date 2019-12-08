const api = 'https://api.exchangeratesapi.io/latest'

const fetchCurrencyExchangeData = async () => {
  const dkkResponse = await fetch(`${api}?base=DKK`)
  const eurResponse = await fetch(`${api}?base=EUR`)
  const gbpResponse = await fetch(`${api}?base=GBP`)
  const {rates: {EUR: dkkToEur, GBP: dkkToGbp}} = await dkkResponse.json()
  const {rates: {DKK: eurToDkk, GBP: eurToGbp}} = await eurResponse.json()
  const {rates: {EUR: gbpToEur, DKK: gbpToDkk}} = await gbpResponse.json()
  return {
    DKK: {
      EUR: dkkToEur,
      GBP: dkkToGbp
    },
    EUR: {
      DKK: eurToDkk,
      GBP: eurToGbp
    },
    GBP: {
      DKK: gbpToDkk,
      EUR: gbpToEur
    }
  }
}

// eslint-disable-next-line import/prefer-default-export
export {fetchCurrencyExchangeData}
