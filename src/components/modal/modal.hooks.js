import {useState, useEffect, useRef} from 'react'

const modalStates = {
  unmounted: 'unmounted',
  mounted: 'mounted',
  transitioningIn: 'transitioningIn',
  open: 'open',
  transitioningOut: 'transitioningOut'
}

const {unmounted, mounted, transitioningIn} = modalStates

const useModalState = ({animationTargetElement}) => {
  const [modalState, onSetModalState] = useState(unmounted)

  useEffect(() => {
    if (modalState === mounted) {
      const mountWhenAnimationTargetElementIsAvailable = () => {
        if (animationTargetElement) {
          onSetModalState(transitioningIn)
        }
        else {
          setTimeout(mountWhenAnimationTargetElementIsAvailable, 10)
        }
      }
      requestAnimationFrame(() => {
        mountWhenAnimationTargetElementIsAvailable()
      })
    }
  }, [modalState, animationTargetElement])

  useEffect(() => {
    onSetModalState(mounted)
  }, [])

  const modalRef = useRef()

  return {modalState, modalRef, onSetModalState}
}

export {useModalState, modalStates}
