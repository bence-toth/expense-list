import React from 'react'
import {arrayOf, func, string, bool} from 'prop-types'

import Expenses from 'components/expenses/expenses.container'

import TopBar from './topBar/topBar.container'

import './app.styles.css'

const App = ({
  locales,
  locale,
  onSetLanguage,
  currencies,
  preferredCurrency,
  onSetPreferredCurrency,
  isExpensesControlsSidebarVisible,
  onToggleExpensesControlsSidebar
}) => (
  <>
    <TopBar
      locales={locales}
      locale={locale}
      onSetLanguage={onSetLanguage}
      currencies={currencies}
      preferredCurrency={preferredCurrency}
      onSetPreferredCurrency={onSetPreferredCurrency}
      isExpensesControlsSidebarVisible={isExpensesControlsSidebarVisible}
      onToggleExpensesControlsSidebar={onToggleExpensesControlsSidebar}
    />
    <main>
      <Expenses
        locale={locale}
        preferredCurrency={preferredCurrency}
        isExpensesControlsSidebarVisible={isExpensesControlsSidebarVisible}
      />
    </main>
  </>
)

App.displayName = 'AppPresenter'

App.propTypes = {
  locales: arrayOf(string).isRequired,
  locale: string.isRequired,
  onSetLanguage: func.isRequired,
  currencies: arrayOf(string).isRequired,
  preferredCurrency: string.isRequired,
  onSetPreferredCurrency: func.isRequired,
  isExpensesControlsSidebarVisible: bool,
  onToggleExpensesControlsSidebar: func.isRequired
}

export default App
