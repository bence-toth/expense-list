import React from 'react'
import {arrayOf, string, func, shape, bool, instanceOf} from 'prop-types'

import Modal from 'components/modal/modal.container'

import UserSettingsModal from './userSettingsModal/userSettingsModal.presenter'

import './topBar.styles.css'

const TopBar = ({
  locales,
  locale,
  onSetLanguage,
  currencies,
  preferredCurrency,
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
        <UserSettingsModal
          locales={locales}
          locale={locale}
          onSetLanguage={onSetLanguage}
          currencies={currencies}
          preferredCurrency={preferredCurrency}
          onSetPreferredCurrency={onSetPreferredCurrency}
        />
      </Modal>
    )}
  </header>
)

TopBar.displayName = 'TopBarPresenter'

TopBar.propTypes = {
  locales: arrayOf(string).isRequired,
  locale: string.isRequired,
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

export default TopBar
