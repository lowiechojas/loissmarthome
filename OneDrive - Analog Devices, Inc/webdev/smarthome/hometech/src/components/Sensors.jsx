import React, { useState } from 'react'
import bulb from '../assets/bulb.svg'
import switchIcon from '../assets/switch.svg'
import './Sensors.css'

const Sensors = ({ name,area }) => {
    const initialState = JSON.parse(localStorage.getItem(`${area}-${name}`)) || false;
    const [isOn, setIsOn] = useState(initialState);

  const toggleSensor = () => {
    const newState = !isOn;
    setIsOn(newState);
    localStorage.setItem(`${area}-${name}`, JSON.stringify(newState));
  };

  const getIcon = () => {
    if (name.type === 'bulb' || name.toLowerCase().includes('bulb')) return bulb;
    if (name.type === 'switch' || name.toLowerCase().includes('switch')) return switchIcon;
    return bulb; // default icon
  };

  return (
    
    <div
      className={`sensor-card ${isOn ? "on" : "off"}`}
      onClick={toggleSensor}
    >
      <img src={getIcon()} alt="Light Bulb" className="sensor-icon" />
      <p className='label'>{name}</p>
      <p className="status label">{isOn ? "ON" : "OFF"}</p>
    </div>
  )
}

export default Sensors
