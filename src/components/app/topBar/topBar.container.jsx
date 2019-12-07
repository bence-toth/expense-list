import React, {useState, useRef} from 'react'
import {arrayOf, string, func, bool} from 'prop-types'

import Presenter from './topBar.presenter'

const TopBar = ({
  locales,
  locale,
  onSetLanguage,
  currencies,
  preferredCurrency,
  onSetPreferredCurrency,
  isExpensesControlsSidebarVisible,
  onToggleExpensesControlsSidebar
}) => {
  const [isUserSettingsOpen, onSetUserSettings] = useState(false)
  const onShowUserSettings = () => {
    onSetUserSettings(true)
  }
  const onHideUserSettings = () => {
    onSetUserSettings(false)
  }
  const userSettingsButtonRef = useRef(null)
  return (
    <Presenter
      locales={locales}
      locale={locale}
      onSetLanguage={onSetLanguage}
      currencies={currencies}
      preferredCurrency={preferredCurrency}
      onSetPreferredCurrency={onSetPreferredCurrency}
      isUserSettingsOpen={isUserSettingsOpen}
      onShowUserSettings={onShowUserSettings}
      onHideUserSettings={onHideUserSettings}
      userSettingsButtonRef={userSettingsButtonRef}
      isExpensesControlsSidebarVisible={isExpensesControlsSidebarVisible}
      onToggleExpensesControlsSidebar={onToggleExpensesControlsSidebar}
    />
  )
}

TopBar.displayName = 'TopBarContainer'

TopBar.propTypes = {
  locales: arrayOf(string).isRequired,
  locale: string.isRequired,
  onSetLanguage: func.isRequired,
  currencies: arrayOf(string).isRequired,
  preferredCurrency: string.isRequired,
  onSetPreferredCurrency: func.isRequired,
  isExpensesControlsSidebarVisible: bool,
  onToggleExpensesControlsSidebar: func.isRequired
}

export default TopBar
