import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import logoRound from '../images/logo-round.svg'

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header__container wrapper">
      <h1 className="header__title">
        <Link
          to="/"
          title={siteTitle}
          aria-label={`Visit ${siteTitle} (opens in a new window)`}
        >
          <img width="24px" height="24px" alt="COINiD Logo" src={logoRound} />
        </Link>
      </h1>
      <ul className="header__menu">
        <li className="header__menu-item">
          <Link to="/wallet" class="header__menu-link">
            Wallet
          </Link>
        </li>
        <li className="header__menu-item">
          <Link to="/vault" class="header__menu-link">
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
