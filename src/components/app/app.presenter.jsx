import React from 'react'
import {arrayOf, func, string} from 'prop-types'

import Expenses from 'components/expenses/expenses.container'

import TopBar from './topBar/topBar.container'

import './app.styles.css'

const App = ({
  languages,
  language,
  onSetLanguage,
  currencies,
  preferredCurrency,
  onSetPreferredCurrency
}) => (
  <>
    <TopBar
      languages={languages}
      language={language}
      onSetLanguage={onSetLanguage}
      currencies={currencies}
      preferredCurrency={preferredCurrency}
      onSetPreferredCurrency={onSetPreferredCurrency}
    />
    <main>
      <Expenses
        language={language}
        preferredCurrency={preferredCurrency}
      />
    </main>
  </>
)

App.propTypes = {
  languages: arrayOf(string).isRequired,
  language: string.isRequired,
  onSetLanguage: func.isRequired,
  currencies: arrayOf(string).isRequired,
  preferredCurrency: string.isRequired,
  onSetPreferredCurrency: func.isRequired
}

export default App
