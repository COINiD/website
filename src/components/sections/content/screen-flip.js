import React, { PureComponent } from 'react'
import classNames from 'classnames'
import PhoneControl from '../../graphics/phone-control'

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
        <strong className="u-font-weight--medium">{title}</strong>
        <br />
        {description}
      </a>
    )
  }

  render() {
    let { flipConfig } = this.props
    let { activeScreen } = this.state

    return (
      <div className="screen-flip">
        <div className="screen-flip__phone">
          <PhoneControl activeScreen={activeScreen} />
        </div>
        <div className="screen-flip__content">
          {flipConfig.map(config => this.renderContent(config))}
        </div>
      </div>
    )
  }
}

export default ScreenFlip
