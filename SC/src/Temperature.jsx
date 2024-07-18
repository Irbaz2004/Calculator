import React, { useState } from 'react';

const Temperature = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [kelvin, setKelvin] = useState('');

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit(value !== '' ? ((value * 9/5) + 32).toFixed(2) : '');
    setKelvin(value !== '' ? (parseFloat(value) + 273.15).toFixed(2) : '');
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius(value !== '' ? ((value - 32) * 5/9).toFixed(2) : '');
    setKelvin(value !== '' ? (((value - 32) * 5/9) + 273.15).toFixed(2) : '');
  };

  const handleKelvinChange = (e) => {
    const value = e.target.value;
    setKelvin(value);
    setCelsius(value !== '' ? (value - 273.15).toFixed(2) : '');
    setFahrenheit(value !== '' ? (((value - 273.15) * 9/5) + 32).toFixed(2) : '');
  };

  return (
    <div>
      <div className="container d-flex flex-column">
      <h1 className='m-4'>Temperature Converter</h1>
      <div>
        <label className='fw-bold'>
          Celsius:
          <input
            type="text"
            value={celsius}
            onChange={handleCelsiusChange}
            placeholder="Enter Celsius"
          />
        </label>
      </div>
      <div>
        <label className='fw-bold'>
          Fahrenheit:
          <input
            type="text"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            placeholder="Enter Fahrenheit"
          />
        </label>
      </div>
      <div>
        <label className='fw-bold'>
          Kelvin:
          <input
            type="text"
            value={kelvin}
            onChange={handleKelvinChange}
            placeholder="Enter Kelvin"
          />
        </label>
      </div>
    </div>
    </div>
  );
};

export default Temperature;
