import React from 'react'

import { allInOneSolution as allInOneSolutionFlipConfig } from '../constants/flip-screens'
import Layout from '../components/layout'
import SEO from '../components/seo'

import SectionSplash from '../components/sections/splash'
import SectionScreens from '../components/sections/screens'
import BannerWallets from '../components/banners/wallets'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SectionSplash>
      <div className="section__content">
        <h1>Secure, fast & easy.</h1>
        <p className="u-font-size--large">
          Lowering the bar of entry to offline crypto storage, all you need is a
          spare phone and 7 minutes. COINiD makes it easy!
        </p>
      </div>
    </SectionSplash>
    <BannerWallets />
    <SectionScreens
      title="All-in-one solution."
      subTitle="With COINiD, all your wallets are in one place.
Two in one. And no more overpaying for less security."
      flipConfig={allInOneSolutionFlipConfig}
    />
  </Layout>
)

export default IndexPage
