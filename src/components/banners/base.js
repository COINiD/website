import React from 'react'

import classNames from 'classnames'

const BannerBase = ({ children, style, theme }) => {
  let bannerClasses = classNames('banner', {
    [`banner--${theme}`]: theme,
    [`banner--${style}`]: style,
  })
  return <section className={bannerClasses}>{children}</section>
}

export default BannerBase
