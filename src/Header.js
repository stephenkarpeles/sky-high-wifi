import React from 'react'
import Logo from './images/logo.svg'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <img src={Logo}/>
        </div>
      </div>
    </header>
  )
}

export default Header