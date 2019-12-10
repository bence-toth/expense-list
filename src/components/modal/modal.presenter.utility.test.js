import {getInitialModalPosition} from './modal.presenter.utility'

describe('getInitialModalPosition', () => {
  it('should return correct position', () => {
    expect(getInitialModalPosition({
      animationTargetElement: {
        getBoundingClientRect: () => ({
          width: 200,
          height: 120,
          top: 300,
          left: 600
        })
      }
    })).toEqual({
      width: 200,
      height: 120,
      top: 300,
      left: 600
    })
  })

  it('should fall back to off canvas', () => {
    expect(getInitialModalPosition({
      animationTargetElement: null
    })).toEqual({
      top: '200%',
      left: '200%'
    })
  })
})

// eslint-disable-next-line import/prefer-default-export
