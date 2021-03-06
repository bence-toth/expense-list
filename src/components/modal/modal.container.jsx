import React from 'react'
import {node, number, instanceOf, shape, func, bool, string} from 'prop-types'

import Presenter from './modal.presenter'
import {useModalState, modalStates} from './modal.hooks'

import './modal.styles.css'

const {unmounted} = modalStates

const Modal = ({
  children,
  animationDurationIn = 350,
  animationDurationOut = 300,
  animationTargetElement: {current: animationTargetElement},
  onModalHasClosed,
  shouldCloseOnOverlayClick,
  title
}) => {
  const {
    modalState,
    modalRef,
    onSetModalState
  } = useModalState({animationTargetElement})
  return (modalState !== unmounted) && (
    <Presenter
      modalState={modalState}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      animationDurationIn={animationDurationIn}
      animationDurationOut={animationDurationOut}
      onSetModalState={onSetModalState}
      modalRef={modalRef}
      animationTargetElement={animationTargetElement}
      onModalHasClosed={onModalHasClosed}
      title={title}
    >
      {children}
    </Presenter>
  )
}

Modal.displayName = 'ModalContainer'

Modal.propTypes = {
  children: node,
  animationDurationIn: number,
  animationDurationOut: number,
  animationTargetElement: shape({
    current: instanceOf(Element)
  }).isRequired,
  onModalHasClosed: func,
  shouldCloseOnOverlayClick: bool,
  title: string.isRequired
}

export default Modal
