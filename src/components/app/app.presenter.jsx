import React from 'react'
import {arrayOf, func, string} from 'prop-types'

import Expenses from 'components/expenses/expenses.container'

import TopBar from './topBar/topBar.container'

import './app.styles.css'

const App = ({
  locales,
  locale,
  onSetLanguage,
  currencies,
  preferredCurrency,
  onSetPreferredCurrency
}) => (
  <>
    <TopBar
      locales={locales}
      locale={locale}
      onSetLanguage={onSetLanguage}
      currencies={currencies}
      preferredCurrency={preferredCurrency}
      onSetPreferredCurrency={onSetPreferredCurrency}
    />
    <main>
      <Expenses
        locale={locale}
        preferredCurrency={preferredCurrency}
      />
    </main>
  </>
)

App.propTypes = {
  locales: arrayOf(string).isRequired,
  locale: string.isRequired,
  onSetLanguage: func.isRequired,
  currencies: arrayOf(string).isRequired,
  preferredCurrency: string.isRequired,
  onSetPreferredCurrency: func.isRequired
}

export default App
