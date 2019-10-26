import React from 'react'
import {node, number, instanceOf, shape, func} from 'prop-types'
import classNames from 'classnames'

import {useModalState, modalStates} from './modal.hooks'
import {getInitialModalPosition} from './modal.presenter.utility'

import './modal.styles.css'

const {unmounted, transitioningIn, open, transitioningOut} = modalStates

const Modal = ({
  children,
  animationDurationIn = 500,
  animationDurationOut = 350,
  animationTargetElement: {current: animationTargetElement},
  onModalHasClosed
}) => {
  const {modalState, modalRef, onSetModalState} = useModalState({animationTargetElement})
  return (modalState !== unmounted) && (
    <div className='modalContainer'>
      <div
        className={classNames('overlay', {
          visible: [transitioningIn, open].includes(modalState)
        })}
        style={{
          transitionDuration: [transitioningIn, open].includes(modalState)
            ? `${animationDurationIn}ms`
            : `${animationDurationOut}ms`
        }}
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
          type='button'
          onClick={() => {
            onSetModalState(transitioningOut)
          }}
        >
          Then click me
        </button>
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: node,
  animationDurationIn: number,
  animationDurationOut: number,
  animationTargetElement: shape({
    current: instanceOf(Element)
  }).isRequired,
  onModalHasClosed: func
}

export default Modal
