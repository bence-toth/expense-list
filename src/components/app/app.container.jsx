import React from 'react'

import {useUserSettings} from './app.hooks'
import AppPresenter from './app.presenter'

const App = () => {
  const {
    languages,
    language,
    onSetLanguage,
    currencies,
    preferredCurrency,
    onSetPreferredCurrency
  } = useUserSettings()
  return (
    <AppPresenter
      languages={languages}
      language={language}
      onSetLanguage={onSetLanguage}
      currencies={currencies}
      preferredCurrency={preferredCurrency}
      onSetPreferredCurrency={onSetPreferredCurrency}
    />
  )
}

export default App
