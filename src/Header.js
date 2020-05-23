import React from 'react'
import Logo from './images/logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

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
              <li><AnchorLink className="btn btn--header btn--medium" href="#contact">Get Started</AnchorLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header