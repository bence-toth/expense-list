import React, {useState, useEffect, useRef} from 'react'
import {node, number, instanceOf, shape, func} from 'prop-types'
import classNames from 'classnames'

import './modal.styles.css'

const modalStates = {
  unmounted: 'unmounted',
  mounted: 'mounted',
  transitioningIn: 'transitioningIn',
  open: 'open',
  transitioningOut: 'transitioningOut'
}

const {unmounted, mounted, transitioningIn, open, transitioningOut} = modalStates

const getInitialPosition = ({animationTargetElement}) => {
  if (!animationTargetElement) {
    return {
      left: '200%',
      top: '200%'
    }
  }
  const {width, height, top, left} = animationTargetElement.getBoundingClientRect()
  return {width, height, top, left}
}

const Modal = ({
  children,
  animationDurationIn = 5000,
  animationDurationOut = 3500,
  animationTargetElement: {current: animationTargetElement},
  onModalHasClosed
}) => {
  const [modalState, onSetModalState] = useState(unmounted)
  useEffect(() => {
    if (modalState === mounted) {
      requestAnimationFrame(() => {
        onSetModalState(transitioningIn)
      })
    }
  }, [modalState])
  useEffect(() => {
    onSetModalState(mounted)
  }, [])
  const onCloseModal = () => {
    onSetModalState(transitioningOut)
  }
  const modalRef = useRef()
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
              ...getInitialPosition({animationTargetElement})
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
          onClick={onCloseModal}
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
