import React from 'react'

import SectionBase from './base'

const SectionSplash = ({ children, backgroundImage }) => (
  <SectionBase theme="dark" style="splash" backgroundImage={backgroundImage}>
    <div className="wrapper">{children}</div>
  </SectionBase>
)

export default SectionSplash
