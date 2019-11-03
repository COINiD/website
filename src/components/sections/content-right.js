import React, { PureComponent } from 'react'

import SectionBase from './base'

class SectionContentRight extends PureComponent {
  renderHighlight = (highlight, key) => {
    return (
      <li className="section__highlight" key={`highlight-${key}`}>
        {highlight}
      </li>
    )
  }

  renderHighlights = highlights => {
    return (
      <ul className="section__highlights">
        {highlights.map((highlight, key) =>
          this.renderHighlight(highlight, key)
        )}
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
