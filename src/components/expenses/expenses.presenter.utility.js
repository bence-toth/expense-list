const formatDate = ({date, locale}) => {
  const options = {
    year: 'numeric',
    month: 'long'
  }
  const formatter = new Intl.DateTimeFormat(locale, options)
  return formatter.format(date)
}

const generateGroupKey = date =>
  `${date.getFullYear()}${date.getMonth()}`

export {formatDate, generateGroupKey}
