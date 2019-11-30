import React from 'react'
import {arrayOf, string, func, shape, bool, instanceOf} from 'prop-types'

import Modal from 'components/modal/modal.presenter'

import copy from './topBar.locales'

import './topBar.styles.css'

const TopBarPresenter = ({
  locales,
  // locale,
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
        {locales.map(localeOption => (
          <button
            key={localeOption}
            type='button'
            onClick={() => {
              onSetLanguage(localeOption)
            }}
            lang={localeOption}
          >
            {copy['en-GB'][localeOption]()}
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
  locales: arrayOf(string).isRequired,
  // locale: string.isRequired,
  onSetLanguage: func.isRequired,
  currencies: arrayOf(string).isRequired,
  // preferredCurrency: string.isRequired,
  onSetPreferredCurrency: func.isRequired,
  isUserSettingsOpen: bool,
  onShowUserSettings: func.isRequired,
  onHideUserSettings: func.isRequired,
  userSettingsButtonRef: shape({
    current: instanceOf(Element)
  }).isRequired
}

export default TopBarPresenter
