import React, {useEffect} from 'react'

import {useUserSettings} from './app.hooks'
import Presenter from './app.presenter'

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
    <Presenter
      locales={locales}
      locale={locale}
      onSetLanguage={onSetLanguage}
      currencies={currencies}
      preferredCurrency={preferredCurrency}
      onSetPreferredCurrency={onSetPreferredCurrency}
    />
  )
}

App.displayName = 'AppContainer'

export default App
