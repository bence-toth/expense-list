import React from 'react'
import {string} from 'prop-types'

import {generateInitials, generateBackgroundColor} from './avatar.presenter.utility'
import './avatar.styles.css'

const Avatar = ({
  avatarURL,
  name
}) => (
  <div className='avatarWrapper'>
    <div className='avatar'>
      {avatarURL && (
        <img
          src={avatarURL}
          alt=''
        />
      )}
      <div
        aria-hidden='true'
        className='initials'
        style={{
          backgroundColor: generateBackgroundColor({name})
        }}
      >
        {generateInitials({name})}
      </div>
    </div>
  </div>
)

Avatar.propTypes = {
  avatarURL: string,
  name: string.isRequired
}

export default Avatar
