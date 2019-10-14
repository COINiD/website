import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import SectionSplash from '../components/sections/splash'

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
  </Layout>
)

export default IndexPage
