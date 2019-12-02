import React, {useState, useRef} from 'react'
import {arrayOf, string, func} from 'prop-types'

import Presenter from './topBar.presenter'

const TopBar = ({
  locales,
  locale,
  onSetLanguage,
  currencies,
  preferredCurrency,
  onSetPreferredCurrency
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
  onSetPreferredCurrency: func.isRequired
}

export default TopBar
