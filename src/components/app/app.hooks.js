import {useState} from 'react'

const useLocalStorage = key => {
  const [value, setValue] = useState(localStorage.getItem(key))

  const readFromLocalStorage = () => {
    const oldValue = value
    const newValue = localStorage.getItem(key)
    if (newValue !== oldValue) {
      setValue(newValue)
    }
    return newValue
  }

  const writeToLocalStorage = newValue => {
    if (newValue !== undefined) {
      localStorage.setItem(key, newValue)
    }
    else {
      localStorage.removeItem(key)
    }
    setValue(newValue)
  }

  return [readFromLocalStorage, writeToLocalStorage]
}

const useUserSettings = () => {
  const locales = [
    'en-GB',
    'en-US',
    'dk-DK'
  ]
  const [onGetLanguage, onSetLanguage] =
    useLocalStorage('user_setting_locale')
  if (!locales.includes(onGetLanguage())) {
    onSetLanguage(locales[0])
  }
  const currencies = [
    'EUR',
    'GBP',
    'DKK'
  ]
  const [onGetPreferredCurrency, onSetPreferredCurrency] =
    useLocalStorage('user_setting_preferred_currency')
  if (!currencies.includes(onGetPreferredCurrency())) {
    onSetPreferredCurrency(currencies[0])
  }
  // TODO: Update lang attribute on <html> when locale changes
  return {
    locales,
    locale: onGetLanguage() || locales[0],
    onSetLanguage,
    currencies,
    preferredCurrency: onGetPreferredCurrency() || currencies[0],
    onSetPreferredCurrency
  }
}

// eslint-disable-next-line import/prefer-default-export
export {useUserSettings}
