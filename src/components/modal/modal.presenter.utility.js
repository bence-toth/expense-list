const getInitialModalPosition = ({animationTargetElement}) => {
  if (animationTargetElement) {
    const {width, height, top, left} = animationTargetElement.getBoundingClientRect()
    return {width, height, top, left}
  }
  return { // Off viewport
    left: '200%',
    top: '200%'
  }
}

// eslint-disable-next-line import/prefer-default-export
export {getInitialModalPosition}
