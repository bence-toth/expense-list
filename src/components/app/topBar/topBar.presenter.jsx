import React from 'react'
import {arrayOf, string, func, shape, bool, instanceOf} from 'prop-types'

import Modal from 'components/modal/modal.presenter'

import './topBar.styles.css'

const TopBarPresenter = ({
  languages,
  // language,
  onSetLanguage,
  currencies,
  // preferredCurrency,
  onSetPreferredCurrency,
  isUserSettingsOpen,
  onShowUserSettings,
  onHideUserSettings,
  userSettingsButtonRef
}) => (
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

TopBarPresenter.propTypes = {
  languages: arrayOf(string).isRequired,
  language: string.isRequired,
  onSetLanguage: func.isRequired,
  currencies: arrayOf(string).isRequired,
  preferredCurrency: string.isRequired,
  onSetPreferredCurrency: func.isRequired,
  isUserSettingsOpen: bool,
  onShowUserSettings: func.isRequired,
  onHideUserSettings: func.isRequired,
  userSettingsButtonRef: shape({
    current: instanceOf(Element)
  }).isRequired
}

export default TopBarPresenter
