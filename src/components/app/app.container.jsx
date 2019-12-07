import React, {useEffect} from 'react'

import {useUserSettings, useFlag} from './app.hooks'
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
  const [
    isExpensesControlsSidebarVisible,
    onToggleExpensesControlsSidebar
  ] = useFlag(false)
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
      isExpensesControlsSidebarVisible={isExpensesControlsSidebarVisible}
      onToggleExpensesControlsSidebar={onToggleExpensesControlsSidebar}
    />
  )
}

App.displayName = 'AppContainer'

export default App
