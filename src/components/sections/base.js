import React from 'react'

import classNames from 'classnames'

const SectionBase = ({ children, style, theme }) => {
  let sectionClasses = classNames('section', {
    [`section--${theme}`]: theme,
    [`section--${style}`]: style,
  })
  return <section className={sectionClasses}>{children}</section>
}

export default SectionBase
