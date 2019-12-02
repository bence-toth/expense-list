import React from 'react'
import {node, number, instanceOf, shape, func, bool, oneOf} from 'prop-types'
import classNames from 'classnames'

import {modalStates} from './modal.hooks'
import {getInitialModalPosition} from './modal.presenter.utility'

import './modal.styles.css'

const {unmounted, transitioningIn, open, transitioningOut} = modalStates

const Modal = ({
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
        open: [transitioningIn, open].includes(modalState)
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
        if ((propertyName === 'left') && (target === modalRef.current)) {
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
      {children}
      <button
        className='closeModalButton'
        type='button'
        onClick={() => {
          onSetModalState(transitioningOut)
        }}
      >
        <i className='far fa-times-circle' />
      </button>
    </div>
  </div>
)

Modal.propTypes = {
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
