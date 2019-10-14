import React, { PureComponent } from 'react'
import classNames from 'classnames'

import Image from '../../image'

class ScreenFlip extends PureComponent {
  state = {
    activeScreen: null,
  }

  constructor(props) {
    super(props)
    let { flipConfig } = this.props
    let [firstConfig] = flipConfig
    this.state = { activeScreen: firstConfig.id }
  }

  handleChangeScreen = id => {
    this.setState({ activeScreen: id })
  }

  renderScreen = ({ screen, id }) => {
    let { activeScreen } = this.state

    let classes = classNames('screen-flip__screen', {
      [`screen-flip__screen--${id}`]: id,
      [`screen-flip__screen--active`]: activeScreen === id,
    })
    return (
      <Image
        key={`image-${id}`}
        filename={`screens/${screen}.png`}
        className={classes}
      />
    )
  }

  renderContent = ({ title, description, id }) => {
    let { activeScreen } = this.state

    let classes = classNames('screen-flip__link', {
      [`screen-flip__link--${id}`]: id,
      [`screen-flip__link--active`]: activeScreen === id,
    })
    return (
      <a
        key={`link-${id}`}
        className={classes}
        onClick={() => this.handleChangeScreen(id)}
      >
        <strong>{title}</strong>
        <br />
        {description}
      </a>
    )
  }

  render() {
    let { flipConfig } = this.props
    return (
      <div className="screen-flip">
        <div className="screen-flip__screens">
          {flipConfig.map(config => this.renderScreen(config))}
        </div>
        <div className="screen-flip__content">
          {flipConfig.map(config => this.renderContent(config))}
        </div>
      </div>
    )
  }
}

export default ScreenFlip
