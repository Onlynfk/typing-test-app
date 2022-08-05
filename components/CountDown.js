import React from 'react'
import secondsToHms from '../utils/secondsCoverter'
function CountDown({ countDown }) {
  return (
    <div className='section'>
      <h2 className="display-5 fw-bold text-success">
        {secondsToHms(countDown)}
      </h2>

    </div>
  )
}

export default CountDown