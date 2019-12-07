import React from 'react'
import {node, number, instanceOf, shape, func, bool, oneOf, string} from 'prop-types'
import classNames from 'classnames'

import {modalStates} from './modal.hooks'
import {getInitialModalPosition} from './modal.presenter.utility'

import './modal.styles.css'

const {unmounted, transitioningIn, open, transitioningOut} = modalStates

const Modal = ({
  title,
  modalState,
  shouldCloseOnOverlayClick,
  animationDurationIn,
  animationDurationOut,
  onSetModalState,
  modalRef,
  animationTargetElement,
  onModalHasClosed,
  children
}) => (
  <div className='modalContainer'>
    <div
      className={classNames('overlay', {
        visible: [transitioningIn, open].includes(modalState),
        interactive: shouldCloseOnOverlayClick
      })}
      style={{
        transitionDuration: [transitioningIn, open].includes(modalState)
          ? `${animationDurationIn}ms`
          : `${animationDurationOut}ms`
      }}
      {...(shouldCloseOnOverlayClick && ({
        role: 'button',
        tabIndex: 0,
        onClick: () => {
          if (shouldCloseOnOverlayClick) {
            onSetModalState(transitioningOut)
          }
        }
      }))}
    />
    <div
      ref={modalRef}
      className={classNames('modal', {
        transitioningIn: modalState === transitioningIn,
        open: modalState === open
      })}
      style={
        [transitioningIn, open].includes(modalState)
          ? {
            transitionDuration: `${animationDurationIn}ms`
          }
          : {
            transitionDuration: `${animationDurationOut}ms`,
            ...getInitialModalPosition({animationTargetElement})
          }
      }
      onTransitionEnd={({target, propertyName}) => {
        if (
          ['left', 'top', 'width', 'height'].includes(propertyName)
            && (target === modalRef.current)
        ) {
          if (modalState === transitioningIn) {
            onSetModalState(open)
          }
          if (modalState === transitioningOut) {
            onSetModalState(unmounted)
            onModalHasClosed()
          }
        }
      }}
    >
      <header className='modalHeader'>
        <h2>{title}</h2>
        <button
          className='closeModalButton'
          type='button'
          onClick={() => {
            onSetModalState(transitioningOut)
          }}
        >
          <i className='fas fa-times' />
        </button>
      </header>
      {children}
    </div>
  </div>
)

Modal.displayName = 'ModalPresenter'

Modal.propTypes = {
  title: string.isRequired,
  children: node,
  animationDurationIn: number,
  animationDurationOut: number,
  animationTargetElement: shape({
    current: instanceOf(Element)
  }).isRequired,
  onModalHasClosed: func,
  shouldCloseOnOverlayClick: bool,
  modalState: oneOf(Object.values(modalStates)).isRequired,
  modalRef: shape({
    current: instanceOf(Element)
  }).isRequired,
  onSetModalState: func.isRequired
}

export default Modal
