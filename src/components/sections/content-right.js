import React, { PureComponent } from 'react'

import SectionBase from './base'

class SectionContentRight extends PureComponent {

  renderHighlights = highlights => {
    return (
      <ul className="section__highlights">
        {highlights.map(highlight => <li className="section__highlight">{highlight}</li>}
      </ul>
    )
  }

  render() {
    const { title, body, highlights, theme = 'light' } = this.props
    return (
      <SectionBase theme={theme} style="content">
        <div className="wrapper">
          <h2>{title}</h2>
          {body && <p className="section__body">{body}</p>}
          {highlights && this.renderHighlights(highlights)}
        </div>
      </SectionBase>
    )
  }
}

export default SectionContentRight
