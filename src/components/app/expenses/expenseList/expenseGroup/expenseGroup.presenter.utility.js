const formatMonth = ({date, locale}) => {
  const options = {
    year: 'numeric',
    month: 'long'
  }
  const formatter = new Intl.DateTimeFormat(locale, options)
  return formatter.format(date)
}

// eslint-disable-next-line import/prefer-default-export
export {formatMonth}
