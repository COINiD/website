import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import logoRound from '../images/logo-round.svg'

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header__container wrapper">
      <Link
        to="/"
        title={siteTitle}
        aria-label={`Visit ${siteTitle} (opens in a new window)`}
        className="header__title"
      >
        <img width="24px" height="24px" alt="COINiD Logo" src={logoRound} />
      </Link>
      <ul className="header__menu u-font-size--small">
        <li className="header__menu__item">
          <Link to="/wallet" className="header__menu__link">
            Wallet
          </Link>
        </li>
        <li className="header__menu__item">
          <Link to="/vault" className="header__menu__link">
            Vault
          </Link>
        </li>
      </ul>
      <div className="header__hamburger">HB</div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
