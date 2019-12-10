import {getIconNameByCategory} from './categoryFilter.presenter.utility'

describe('getIconNameByCategory', () => {
  it('should format currency correctly', () => {
    expect(getIconNameByCategory('plane')).toEqual('fas fa-plane')
    expect(getIconNameByCategory('transport')).toEqual('fas fa-taxi',)
    expect(getIconNameByCategory('hotel')).toEqual('fas fa-hotel',)
    expect(getIconNameByCategory('food')).toEqual('fas fa-utensils')
    expect(getIconNameByCategory(null)).toEqual('fas fa-question')
  })
})
