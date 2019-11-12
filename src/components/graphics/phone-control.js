import React, { PureComponent } from 'react'
import Lottie from 'react-lottie-web'
import * as phoneControlData from '../../animations/phone-control.json'
import imgPhoneControl from '../../animations/screens/phone-control.png'
import imgScreenHot from '../../animations/screens/hot.png'
import imgScreenCold from '../../animations/screens/cold.png'

class PhoneControl extends PureComponent {
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

    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: phoneControlData.default,
    }

    let screenMap = {
      cold: { segments: [1, 29], direction: 1 },
      hot: { segments: [29, 1], direction: -1 },
    }

    console.log(`Screen: ${activeScreen}`, screenMap[activeScreen].segments)
    let { segments, direction } = screenMap[activeScreen]

    return (
      <div className="phone-control">
        <Lottie
          options={defaultOptions}
          speed={0.75}
          segments={segments}
          direction={direction}
          forceSegments={true}
        />
      </div>
    )
  }
}

export default PhoneControl
