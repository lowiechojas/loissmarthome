import React, { useState } from 'react'
import './Switch.css'

const Switch = ({ label, defaultOn = false, onToggle }) => {
  const [isOn, setIsOn] = useState(defaultOn)

  const handleClick = () => {
    const newState = !isOn
    setIsOn(newState)
    if (onToggle) onToggle(newState)
  }

  return (
    <div className="switch-wrapper">
      <div className={`switch ${isOn ? 'on' : 'off'}`} onClick={handleClick}>
        <div className="switch-handle"></div>
      </div>
      {label && <span className="switch-label">{label}</span>}
    </div>
  )
}

export default Switch
