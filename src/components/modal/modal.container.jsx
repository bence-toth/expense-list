import React from 'react'
import {node, number, instanceOf, shape, func, bool} from 'prop-types'

import ModalPresenter from './modal.presenter'
import {useModalState, modalStates} from './modal.hooks'

import './modal.styles.css'

const {unmounted} = modalStates

const Modal = ({
  children,
  animationDurationIn = 350,
  animationDurationOut = 300,
  animationTargetElement: {current: animationTargetElement},
  onModalHasClosed,
  shouldCloseOnOverlayClick
}) => {
  const {
    modalState,
    modalRef,
    onSetModalState
  } = useModalState({animationTargetElement})
  return (modalState !== unmounted) && (
    <ModalPresenter
      modalState={modalState}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      animationDurationIn={animationDurationIn}
      animationDurationOut={animationDurationOut}
      onSetModalState={onSetModalState}
      modalRef={modalRef}
      animationTargetElement={animationTargetElement}
      onModalHasClosed={onModalHasClosed}
    >
      {children}
    </ModalPresenter>
  )
}

Modal.propTypes = {
  children: node,
  animationDurationIn: number,
  animationDurationOut: number,
  animationTargetElement: shape({
    current: instanceOf(Element)
  }).isRequired,
  onModalHasClosed: func,
  shouldCloseOnOverlayClick: bool
}

export default Modal
