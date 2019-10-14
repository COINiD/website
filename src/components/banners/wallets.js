import React from 'react'
import { Link } from 'gatsby'

import BannerBase from './base'

const BannerWallets = () => (
  <BannerBase theme="dark" style="wallets">
    <div className="wrapper u-display--flex u-justify-content--center">
      <Link
        to="/wallets/bitcoin"
        title="Bitcoin wallet"
        aria-label="Go to Bitcoin wallet page"
        className="wallet-link wallet-link--bitcoin"
      >
        <span className="wallet-link__logo"></span>
        <span className="wallet-link__name">Bitcoin</span>
      </Link>
      <Link
        to="/wallets/myriad"
        title="Myriad wallet"
        aria-label="Go to Myriad wallet page"
        className="wallet-link wallet-link--myriad"
      >
        <span className="wallet-link__logo"></span>
        <span className="wallet-link__name">Myriad</span>
      </Link>
      <Link
        to="/wallets/groestlcoin"
        title="Groestlcoin Wallet"
        aria-label="Go to Groestlcoin wallet page"
        className="wallet-link wallet-link--groestlcoin"
      >
        <span className="wallet-link__logo"></span>
        <span className="wallet-link__name">Groestlcoin</span>
      </Link>
    </div>
  </BannerBase>
)

export default BannerWallets
