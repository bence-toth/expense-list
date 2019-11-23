import React from 'react'

import './topBar.styles.css'

const TopBar = () => (
  <header className='topBar'>
    <div className='topBarInnerWrapper'>
      <div>
        <div className='logoWrapper'>
          <img
            className='logo'
            src='https://www.pleo.io/666263d870ccc2f436255a3de1315801.svg'
            alt='Pleo'
          />
        </div>
      </div>
      <div>
        <div className='toolbarWrapper'>
          <button
            type='button'
            className='settingsButton'
          >
            <i className='icon fas fa-cog' />
          </button>
        </div>
      </div>
    </div>
  </header>
)

export default TopBar
