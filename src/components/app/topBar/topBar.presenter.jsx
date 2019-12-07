import React from 'react'
import {arrayOf, string, func, shape, bool, instanceOf} from 'prop-types'
import classNames from 'classnames'

import Modal from 'components/modal/modal.container'

import UserSettingsModal from './userSettingsModal/userSettingsModal.presenter'
import copy from './topBar.locales'

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
  userSettingsButtonRef,
  isExpensesControlsSidebarVisible,
  onToggleExpensesControlsSidebar
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
            type='button'
            className={classNames('toolbarButton', 'mobile', {
              active: isExpensesControlsSidebarVisible
            })}
            onClick={onToggleExpensesControlsSidebar}
          >
            <i className='fas fa-sliders-h' />
          </button>
          <button
            ref={userSettingsButtonRef}
            type='button'
            className='toolbarButton'
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
        title={copy[locale].userSettings()}
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
  }).isRequired,
  isExpensesControlsSidebarVisible: bool,
  onToggleExpensesControlsSidebar: func.isRequired
}

export default TopBar
