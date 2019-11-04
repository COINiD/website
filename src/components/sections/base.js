import React from 'react'

import classNames from 'classnames'

import SectionBaseWithBg from './base-with-bg'

const SectionBase = ({ children, style, theme, backgroundImage }) => {
  let sectionClasses = classNames('section', {
    [`section--${theme}`]: theme,
    [`section--${style}`]: style,
  })
  if (backgroundImage) {
    return (
      <SectionBaseWithBg
        className={sectionClasses}
        backgroundImage={backgroundImage}
      >
        {children}
      </SectionBaseWithBg>
    )
  } else {
    return <section className={sectionClasses}>{children}</section>
  }
}

export default SectionBase
