import React, {useEffect} from 'react'

import {useUserSettings} from './app.hooks'
import AppPresenter from './app.presenter'

const App = () => {
  const {
    locales,
    locale,
    onSetLanguage,
    currencies,
    preferredCurrency,
    onSetPreferredCurrency
  } = useUserSettings()
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])
  return (
    <AppPresenter
      locales={locales}
      locale={locale}
      onSetLanguage={onSetLanguage}
      currencies={currencies}
      preferredCurrency={preferredCurrency}
      onSetPreferredCurrency={onSetPreferredCurrency}
    />
  )
}

export default App
