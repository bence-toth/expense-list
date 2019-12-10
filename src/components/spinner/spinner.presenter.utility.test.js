import {calculateStyle} from './spinner.presenter.utility'

describe('calculateStyle', () => {
  it('should return correct border width', () => {
    expect(calculateStyle({
      size: 'normal',
      thickness: 'thin'
    })).toEqual({
      borderWidth: 2,
      height: 30,
      width: 30
    })
    expect(calculateStyle({
      size: 'normal',
      thickness: 'normal'
    })).toEqual({
      borderWidth: 3,
      height: 30,
      width: 30
    })
    expect(calculateStyle({
      size: 'normal',
      thickness: 'thick'
    })).toEqual({
      borderWidth: 4,
      height: 30,
      width: 30
    })
  })

  it('should return correct dimensions', () => {
    expect(calculateStyle({
      size: 'tiny',
      thickness: 'normal'
    })).toEqual({
      borderWidth: 3,
      height: 15,
      width: 15
    })
    expect(calculateStyle({
      size: 'small',
      thickness: 'normal'
    })).toEqual({
      borderWidth: 3,
      height: 22.5,
      width: 22.5
    })
    expect(calculateStyle({
      size: 'normal',
      thickness: 'normal'
    })).toEqual({
      borderWidth: 3,
      height: 30,
      width: 30
    })
    expect(calculateStyle({
      size: 'big',
      thickness: 'normal'
    })).toEqual({
      borderWidth: 3,
      height: 45,
      width: 45
    })
  })
})
