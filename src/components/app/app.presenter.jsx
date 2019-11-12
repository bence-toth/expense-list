import React, {useState} from 'react'

import ExpensesListContainer from 'components/expenseList/expenseList.container'

import './app.styles.css'

const App = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilters, setCategoryFilters] = useState({
    transport: true,
    plane: true,
    hotel: true,
    food: true,
    unknown: true
  })
  const [currencyFilters, setCurrencyFilters] = useState({
    DKK: true,
    GBP: true,
    EUR: true
  })
  return (
    <main>
      <div className='expensesControlsWrapper'>
        <input
          type='search'
          value={searchQuery}
          onChange={({target: {value}}) => {
            setSearchQuery(value)
          }}
        />
        {Object.keys(categoryFilters).map(categoryFilter => (
          <button
            key={categoryFilter}
            type='button'
            style={{
              display: 'block',
              width: '100%',
              border: '3px solid',
              borderColor: categoryFilters[categoryFilter] ? 'green' : 'red'
            }}
            onClick={() => {
              const newCategoryFilters = {
                ...categoryFilters,
                [categoryFilter]: !categoryFilters[categoryFilter]
              }
              if (Object.values(newCategoryFilters).includes(true)) {
                setCategoryFilters(newCategoryFilters)
              }
              else {
                const allCategoriesVisible = Object
                  .keys(newCategoryFilters)
                  .reduce((keysSoFar, newKey) => ({
                    ...keysSoFar,
                    [newKey]: true
                  }), {})
                setCategoryFilters(allCategoriesVisible)
              }
            }}
          >
            {categoryFilter}
          </button>
        ))}
        {Object.keys(currencyFilters).map(currencyFilter => (
          <button
            key={currencyFilter}
            type='button'
            style={{
              display: 'block',
              width: '100%',
              border: '3px solid',
              borderColor: currencyFilters[currencyFilter] ? 'green' : 'red'
            }}
            onClick={() => {
              const newCurrencyFilters = {
                ...currencyFilters,
                [currencyFilter]: !currencyFilters[currencyFilter]
              }
              if (Object.values(newCurrencyFilters).includes(true)) {
                setCurrencyFilters(newCurrencyFilters)
              }
              else {
                const allCurrenciesVisible = Object
                  .keys(newCurrencyFilters)
                  .reduce((keysSoFar, newKey) => ({
                    ...keysSoFar,
                    [newKey]: true
                  }), {})
                setCurrencyFilters(allCurrenciesVisible)
              }
            }}
          >
            {currencyFilter}
          </button>
        ))}
      </div>
      <div className='expensesListWrapper'>
        <ExpensesListContainer
          categoryFilters={categoryFilters}
          currencyFilters={currencyFilters}
          searchQuery={searchQuery}
        />
      </div>
    </main>
  )
}

export default App
