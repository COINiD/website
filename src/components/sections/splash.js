import React from 'react'

import SectionBase from './base'

const SectionSplash = ({ children }) => (
  <SectionBase theme="dark" style="splash">
    <div className="wrapper">{children}</div>
  </SectionBase>
)

export default SectionSplash
