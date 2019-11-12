import React, { PureComponent } from 'react'
import Lottie from 'react-lottie-web'
import classNames from 'classnames'
import Loader from './loader'
import * as phoneControlData from '../../animations/phone-control.json'
import imgPhoneControl from '../../animations/screens/phone-control.png'
import imgShadow from '../../animations/screens/shadow.png'
import imgScreenHot from '../../animations/screens/hot.png'
import imgScreenCold from '../../animations/screens/cold.png'

class PhoneControl extends PureComponent {
  state = {
    loaded: false,
  }

  render() {
    let { activeScreen } = this.props

    phoneControlData.assets = []

    phoneControlData.assets.push({
      id: 'screen1',
      w: 750,
      h: 1624,
      u: '',
      p: imgScreenHot,
    })
    phoneControlData.assets.push({
      id: 'screen2',
      w: 750,
      h: 1624,
      u: '',
      p: imgScreenCold,
    })
    phoneControlData.assets.push({
      id: 'device-lottie',
      w: 920,
      h: 1776,
      u: '',
      p: imgPhoneControl,
    })

    phoneControlData.assets.push({
      id: 'shadow',
      w: 496,
      h: 928,
      u: '',
      p: imgShadow,
    })

    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: phoneControlData.default,
    }

    let screenMap = {
      cold: { segments: [1, 29], direction: 1 },
      hot: { segments: [29, 1], direction: -1 },
    }

    let { segments, direction } = screenMap[activeScreen]

    let { loaded } = this.state
    let controlClasses = classNames('phone-control', {
      [`phone-control--loaded`]: loaded,
    })

    return (
      <div className={controlClasses}>
        <span className="phone-control__loading">
          <Loader />
        </span>
        <Lottie
          options={defaultOptions}
          speed={0.75}
          segments={segments}
          direction={direction}
          forceSegments={true}
          eventListeners={[
            {
              eventName: 'loaded_images',
              callback: () => this.setState({ loaded: true }),
            },
          ]}
        />
      </div>
    )
  }
}

export default PhoneControl
