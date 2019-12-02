import React from 'react'
import {instanceOf, arrayOf, shape, string, func, bool, number} from 'prop-types'

import Modal from 'components/modal/modal.presenter'

import ExpenseGroup from './expenseGroup/expenseGroup.presenter'
import ExpenseDetails from './expenseDetails/expenseDetails.presenter'
import {generateGroupKeyFromDate, getSelectedExpense} from './expenseList.presenter.utility'

import './expenseList.styles.css'

const scrollToBottomDistanceThreshold = 15

const ExpenseListPresenter = ({
  expenses,
  selectedExpenseRef,
  preselectedExpenseId,
  selectedExpenseId,
  isFetchingExpenses,
  shouldFetchMoreExpenses,
  onPreselectExpense,
  onSelectExpense,
  onUnselectExpense,
  onFetchMoreExpenses,
  onSetExpenseComment,
  onSetExpenseReceipts,
  currencyExchangeData,
  preferredCurrency,
  scrollableAreaRef,
  locale
}) => (
  <div
    ref={scrollableAreaRef}
    className='expenses'
    onScroll={({
      target: {
        scrollHeight,
        scrollTop,
        clientHeight
      }
    }) => {
      if (shouldFetchMoreExpenses) {
        const maxScrollTop = scrollHeight - clientHeight
        const distanceFromBottom = maxScrollTop - scrollTop
        if (distanceFromBottom <= scrollToBottomDistanceThreshold) {
          onFetchMoreExpenses()
        }
      }
    }}
  >
    {expenses && (
      <ul className='expenseGroup'>
        {expenses.map(({groupStart, expenseItems}) => (
          <ExpenseGroup
            key={generateGroupKeyFromDate(groupStart)}
            selectedExpenseRef={selectedExpenseRef}
            preselectedExpenseId={preselectedExpenseId}
            selectedExpenseId={selectedExpenseId}
            onPreselectExpense={onPreselectExpense}
            onSelectExpense={onSelectExpense}
            currencyExchangeData={currencyExchangeData}
            preferredCurrency={preferredCurrency}
            locale={locale}
            groupStart={groupStart}
            expenseItems={expenseItems}
          />
        ))}
        {isFetchingExpenses && (
          <li>
            Wait for it...
            {/* TODO: Add spinner here instead of text */}
          </li>
        )}
      </ul>
    )}
    {selectedExpenseId && (
      <Modal
        animationTargetElement={selectedExpenseRef}
        onModalHasClosed={onUnselectExpense}
        shouldCloseOnOverlayClick
      >
        <ExpenseDetails
          selectedExpense={getSelectedExpense({
            expenses,
            selectedExpenseId
          })}
          onSetExpenseComment={onSetExpenseComment}
          onSetExpenseReceipts={onSetExpenseReceipts}
          currencyExchangeData={currencyExchangeData}
          preferredCurrency={preferredCurrency}
          locale={locale}
        />
      </Modal>
    )}
  </div>
)

ExpenseListPresenter.propTypes = {
  expenses: arrayOf(shape({
    groupStart: instanceOf(Date).isRequired,
    expenseItems: arrayOf(shape({
      amount: shape({
        value: string.isRequired,
        currency: string.isRequired
      }).isRequired,
      merchant: string.isRequired,
      user: shape({
        first: string.isRequired,
        last: string.isRequired,
        avatar: string,
        email: string.isRequired
      }).isRequired,
      category: string,
      date: string.isRequired,
      id: string.isRequired,
      comment: string.isRequired,
      receipts: arrayOf(shape({
        url: string.isRequired
      }).isRequired)
    }).isRequired).isRequired
  })),
  selectedExpenseRef: shape({
    current: instanceOf(Element)
  }).isRequired,
  onPreselectExpense: func.isRequired,
  onSelectExpense: func.isRequired,
  onUnselectExpense: func.isRequired,
  preselectedExpenseId: string,
  selectedExpenseId: string,
  isFetchingExpenses: bool,
  shouldFetchMoreExpenses: bool,
  onFetchMoreExpenses: func.isRequired,
  onSetExpenseComment: func.isRequired,
  onSetExpenseReceipts: func.isRequired,
  currencyExchangeData: shape({
    DKK: shape({
      EUR: number.isRequired,
      GBP: number.isRequired
    }).isRequired,
    EUR: shape({
      DKK: number.isRequired,
      GBP: number.isRequired
    }).isRequired,
    GBP: shape({
      DKK: number.isRequired,
      EUR: number.isRequired
    }).isRequired
  }),
  preferredCurrency: string.isRequired,
  scrollableAreaRef: shape({
    current: instanceOf(Element)
  }).isRequired,
  locale: string.isRequired
}

export default ExpenseListPresenter
