import React from 'react'

import { allInOneSolution as allInOneSolutionFlipConfig } from '../constants/flip-screens'
import Layout from '../components/layout'
import SEO from '../components/seo'

import SectionSplash from '../components/sections/splash'
import SectionScreens from '../components/sections/screens'
import SectionContentRight from '../components/sections/content-right'
import BannerWallets from '../components/banners/wallets'
import BannerQuote from '../components/banners/quote'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="u-height--viewport u-display--flex u-flex-direction--column">
      <SectionSplash>
        <div className="section__content">
          <h1 className="u-margin-top--xl">Secure, fast & easy.</h1>
          <p className="u-font-size--large">
            Lowering the bar of entry to offline crypto storage, all you need is
            a spare phone and 7 minutes. COINiD makes it easy!
          </p>
        </div>
      </SectionSplash>
      <BannerWallets />
    </div>
    <SectionScreens
      title="All-in-one solution."
      subTitle="With COINiD, all your wallets are in one place.
Two in one. And no more overpaying for less security."
      flipConfig={allInOneSolutionFlipConfig}
    />
    <SectionContentRight
      theme="orange"
      title="Security at your fingertip."
      body="When using a COINiD Wallet the private key will never leave your device.
In cold wallet-mode it will never be exposed to an online environment.
You are in control."
      highlights={[
        'Private key is stored as a 12 word mnemonic.',
        'Hides the balance in idle mode and when opening receive dialog.',
        'Ability to validate generated receive addresses to verify zero infiltration.',
      ]}
    />
    <BannerQuote
      quote="I like the idea that anyone with a spare phone can set up a free cold storage vault for their bitcoin holdings!"
      author="User 1"
    />
  </Layout>
)

export default IndexPage
