import React, {useState, useRef} from 'react'
import {arrayOf, string, func} from 'prop-types'

import Modal from 'components/modal/modal.presenter'

import './topBar.styles.css'

const TopBar = ({
  languages,
  // language,
  onSetLanguage,
  currencies,
  // preferredCurrency,
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
    <header className='topBar'>
      <div className='topBarInnerWrapper'>
        <div>
          <div className='logoWrapper'>
            <img
              className='logo'
              src='https://www.pleo.io/666263d870ccc2f436255a3de1315801.svg'
              alt='Pleo'
            />
          </div>
        </div>
        <div>
          <div className='toolbarWrapper'>
            <button
              ref={userSettingsButtonRef}
              type='button'
              className='settingsButton'
              onClick={onShowUserSettings}
            >
              <i className='icon fas fa-cog' />
            </button>
          </div>
        </div>
      </div>
      {isUserSettingsOpen && (
        <Modal
          animationTargetElement={userSettingsButtonRef}
          onModalHasClosed={onHideUserSettings}
          shouldCloseOnOverlayClick
        >
          {languages.map(languageOption => (
            <button
              key={languageOption}
              type='button'
              onClick={() => {
                onSetLanguage(languageOption)
              }}
            >
              {languageOption}
            </button>
          ))}
          <hr />
          {currencies.map(currencyOption => (
            <button
              key={currencyOption}
              type='button'
              onClick={() => {
                onSetPreferredCurrency(currencyOption)
              }}
            >
              {currencyOption}
            </button>
          ))}
        </Modal>
      )}
    </header>
  )
}

TopBar.propTypes = {
  languages: arrayOf(string).isRequired,
  language: string.isRequired,
  onSetLanguage: func.isRequired,
  currencies: arrayOf(string).isRequired,
  preferredCurrency: string.isRequired,
  onSetPreferredCurrency: func.isRequired
}

export default TopBar
