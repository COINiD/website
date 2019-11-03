import React, { PureComponent } from 'react'
import Lottie from 'react-lottie-web'
import * as phoneControlData from '../../animations/phone-control.json'

class PhoneControl extends PureComponent {
  render() {
    let { activeScreen } = this.props

    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: phoneControlData.default,
    }

    console.log('screen', { activeScreen })

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
          height={780}
          width={591}
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
