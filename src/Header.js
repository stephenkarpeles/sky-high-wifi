import React from 'react'
import Logo from './images/logo.svg'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <img src={Logo}/>
        </div>
        <div className="header__menu">
          <nav>
            <ul>
              <li><a className="btn btn--header btn--medium" href="/">Get Started</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header