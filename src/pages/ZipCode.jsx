import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function ZipCode() {
  const [zip, setZip] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (zip.trim()) {
      navigate(`/results/${zip}`);
    }
  };

  return (
    <div className="zipcode-container">
      <h1 className="zipcode-title">Welcome to Job</h1>
      <p className="zipcode-subtext">
        Understand how taking a new job can affect your government benefits.
        Enter your ZIP code to get started.
      </p>

      <div className="zipcode-form">
        <input
          type="text"
          placeholder="Enter ZIP Code"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          className="zipcode-input"
        />
        <button onClick={handleContinue} className="zipcode-button">
          Continue
        </button>
      </div>
    </div>
  );
}

export default ZipCode;