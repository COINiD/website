import React from 'react'
import classNames from 'classnames'

const Loader = ({ theme = 'light' }) => {
  let classes = classNames('loader', {
    [`loader--${theme}`]: theme,
  })
  return (
    <div className={classes}>
      <div className="loader__rip"></div>
      <div className="loader__rip"></div>
    </div>
  )
}

export default Loader
