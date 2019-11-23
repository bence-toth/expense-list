const getIconNameByCategory = category => ({
  plane: 'fas fa-plane',
  transport: 'fas fa-taxi',
  hotel: 'fas fa-hotel',
  food: 'fas fa-utensils'
})[category] || 'fas fa-question'

// eslint-disable-next-line import/prefer-default-export
export {getIconNameByCategory}
