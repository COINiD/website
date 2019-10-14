import React from 'react'

import SectionBase from './base'
import ScreenFlip from './content/screen-flip'

const SectionScreens = ({ title, subTitle, flipConfig, theme = 'light' }) => (
  <SectionBase theme={theme} style="screen">
    <div className="wrapper">
      <h2>{title}</h2>
      {subTitle && <p className="u-font-size--medium">{subTitle}</p>}
      <ScreenFlip base="wallet-btc" flipConfig={flipConfig} />
    </div>
  </SectionBase>
)

export default SectionScreens
