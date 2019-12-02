import React from 'react'
import {oneOf} from 'prop-types'

import {calculateStyle} from './spinner.presenter.utility'
import './spinner.styles.css'

const Spinner = ({
  size = 'normal',
  thickness = 'normal'
}) => (
  <div
    className='spinner'
    style={calculateStyle({size, thickness})}
  />
)

Spinner.propTypes = {
  size: oneOf(['tiny', 'small', 'normal', 'big']),
  thickness: oneOf(['thin', 'normal', 'thick'])
}

export default Spinner
