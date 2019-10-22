import React from 'react'

import BannerBase from './base'

const BannerQuote = ({ quote, author, theme = 'beige' }) => (
  <BannerBase theme={theme} style="quote">
    <div className="wrapper wrapper--narrow">
      <blockquote className="banner-quote__body">“{quote}”</blockquote>
      <p className="banner-quote__author">{author}</p>
    </div>
  </BannerBase>
)

export default BannerQuote
