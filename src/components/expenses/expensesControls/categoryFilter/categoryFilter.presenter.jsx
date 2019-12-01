import React from 'react'
import {func, shape, bool, string} from 'prop-types'
import classNames from 'classnames'

import {getIconNameByCategory} from './categoryFilter.presenter.utility'
import copy from './categoryFilter.locales'

import './categoryFilter.styles.css'

const CategoryFilter = ({
  categoryFilters,
  onSetCategoryFilters,
  locale
}) => (
  <div className='categoryFilter'>
    {/* eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control */}
    <label>
      {copy[locale].filterOnCategory()}
    </label>
    <div className='filterButtonGroup'>
      {Object.keys(categoryFilters).map(category => (
        <button
          key={category}
          type='button'
          className={classNames('categoryFilterButton', category, {
            selected: categoryFilters[category]
          })}
          onClick={() => {
            const newCategoryFilters = {
              ...categoryFilters,
              [category]: !categoryFilters[category]
            }
            if (Object.values(newCategoryFilters).includes(true)) {
              onSetCategoryFilters(newCategoryFilters)
            }
            else {
              const allCategoriesVisible = Object
                .keys(newCategoryFilters)
                .reduce((keysSoFar, newKey) => ({
                  ...keysSoFar,
                  [newKey]: true
                }), {})
              onSetCategoryFilters(allCategoriesVisible)
            }
          }}
        >
          <i className={classNames('icon', getIconNameByCategory(category))} />
          <span className='categoryName'>
            {copy[locale][category]()}
          </span>
        </button>
      ))}
    </div>
  </div>
)

CategoryFilter.propTypes = {
  categoryFilters: shape({
    transport: bool,
    plane: bool,
    hotel: bool,
    food: bool,
    unknown: bool
  }).isRequired,
  onSetCategoryFilters: func.isRequired,
  locale: string.isRequired
}

export default CategoryFilter
