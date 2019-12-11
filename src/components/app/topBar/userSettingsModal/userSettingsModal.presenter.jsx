import React from 'react'
import {arrayOf, string, func} from 'prop-types'
import classNames from 'classnames'

import copy from './userSettingsModal.locales'

import './userSettingsModal.styles.css'

const UserSettingsModal = ({
  locales,
  locale,
  onSetLanguage,
  currencies,
  preferredCurrency,
  onSetPreferredCurrency
}) => (
  <div className='settingsModalInnerWrapper'>
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */}
    <label>{copy[locale].language()}</label>
    <div className='buttonGroup language'>
      {locales.map(localeOption => (
        <button
          key={localeOption}
          type='button'
          onClick={() => {
            onSetLanguage(localeOption)
          }}
          className={classNames({
            selected: locale === localeOption
          })}
        >
          {copy[locale][localeOption]()}
        </button>
      ))}
    </div>
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */}
    <label>{copy[locale].preferredCurrency()}</label>
    <div className='buttonGroup currency'>
      {currencies.map(currencyOption => (
        <button
          key={currencyOption}
          type='button'
          onClick={() => {
            onSetPreferredCurrency(currencyOption)
          }}
          className={classNames({
            selected: preferredCurrency === currencyOption
          })}
        >
          {currencyOption}
        </button>
      ))}
    </div>
  </div>
)

UserSettingsModal.displayName = 'UserSettingsModalPresenter'

UserSettingsModal.propTypes = {
  locales: arrayOf(string).isRequired,
  locale: string.isRequired,
  onSetLanguage: func.isRequired,
  currencies: arrayOf(string).isRequired,
  preferredCurrency: string.isRequired,
  onSetPreferredCurrency: func.isRequired
}

export default UserSettingsModal
