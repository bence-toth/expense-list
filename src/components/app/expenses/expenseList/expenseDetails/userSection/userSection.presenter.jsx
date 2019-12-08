import React from 'react'
import {string} from 'prop-types'

import Avatar from 'components/avatar/avatar.presenter'

import copy from './userSection.locales'

import './userSection.styles.css'

const UserSection = ({
  name,
  avatar,
  email,
  locale
}) => (
  <div className='userSection'>
    <Avatar
      name={name}
      avatarURL={avatar}
    />
    <div className='userNameSection'>
      <div className='name'>
        {name}
      </div>
      <div className='email'>
        {email}
      </div>
    </div>
    <div className='sendEmailSection'>
      <a
        className='sendEmailButton'
        href={`mailto:${email}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='fas fa-paper-plane' />
        <span>
          {copy[locale].sendEmail()}
        </span>
      </a>
    </div>
  </div>
)

UserSection.displayName = 'UserSectionPresenter'

UserSection.propTypes = {
  name: string.isRequired,
  email: string.isRequired,
  avatar: string,
  locale: string.isRequired
}

export default UserSection
