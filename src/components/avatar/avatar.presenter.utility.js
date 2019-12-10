import md5 from 'md5'

const generateInitials = ({name}) => {
  const [firstName, lastName] = name.split(' ')
  const firstLetter = firstName.substring(0, 1)
  const secondLetter = lastName ? lastName.substring(0, 1) : ''
  return `${firstLetter}${secondLetter}`
}

const generateHslColor = ({hue}) =>
  `hsl(${hue}, 45%, 65%)` // I ❤ HSL

const generateBackgroundColor = ({name}) => {
  // This function generates an HSL color based on the name.
  // It's kinda random, but it's deterministic at the same time.
  // I have tests to prove the latter, and I need you to trust me on the former.
  // Plot twist: Let's not get very close to the brand color
  const brandColorHueValue = 345
  const minDistanceFromBrandColor = 50
  const forbiddenIntervalLength = 360 - (2 * minDistanceFromBrandColor)
  // Chebyshev polynomials!
  const randomNumber = (parseInt(md5(name).slice(0, 4), 16)) % forbiddenIntervalLength
  const forbiddenIntervalEnd = (brandColorHueValue + minDistanceFromBrandColor) % 360
  // NOTE: You may need to uncomment this if you change `brandColorHueValue`

  // const forbiddenIntervalStart = (brandColorHueValue - minDistanceFromBrandColor) % 360

  // // If the forbidden interval does not cross the 359|0 line
  // if (forbiddenIntervalStart < forbiddenIntervalEnd) {
  //   const hue = (
  //     (randomNumber < forbiddenIntervalStart)
  //       ? randomNumber
  //       : randomNumber + (2 * forbiddenIntervalLength)
  //   )
  //   return generateHslColor({hue})
  // }

  // If the forbidden interval crosses the 359|0 line
  const hue = forbiddenIntervalEnd + randomNumber
  return generateHslColor({hue})
}

export {generateInitials, generateBackgroundColor}
