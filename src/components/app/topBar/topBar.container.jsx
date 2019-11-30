import React, {useState, useRef} from 'react'
import {arrayOf, string, func} from 'prop-types'

import TopBarPresenter from './topBar.presenter'

const TopBarContainer = ({
  languages,
  language,
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
    <TopBarPresenter
      languages={languages}
      language={language}
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

TopBarContainer.propTypes = {
  languages: arrayOf(string).isRequired,
  language: string.isRequired,
  onSetLanguage: func.isRequired,
  currencies: arrayOf(string).isRequired,
  preferredCurrency: string.isRequired,
  onSetPreferredCurrency: func.isRequired
}

export default TopBarContainer
