import React, { useState } from 'react';
import './AddressForm.css'; // Import the CSS file for styling

const AddressForm = ({ userData, onPreview }) => {
  const [address, setAddress] = useState('');
  const [toggleValue, setToggleValue] = useState(false);
  const [numberField, setNumberField] = useState('');
  const [alphabetField, setAlphabetField] = useState('');
  const [alphanumericField, setAlphanumericField] = useState('');
  const [error, setError] = useState('');

  const countries = [
    'India',
    'Belgium',
    'France',
    'Russia',
    'Netherlands',
    'Spain',
    'UK',
    'Ireland',
    'Ukraine',
  ];

  const handlePreview = () => {
    // Add validation for different fields
    if (!address || !numberField || !alphabetField || !alphanumericField) {
      setError('Please fill out all the fields.');
    } else {
      onPreview({
        ...userData,
        address,
        toggleValue,
        numberField,
        alphabetField,
        alphanumericField,
      });
    }
  };

  // Add validation logic for different field types
  const handleNumberChange = (e) => {
    const value = e.target.value;
    // Allow only numbers in the numberField and limit to 6 digits
    if (/^[0-9]{0,6}$/.test(value)) {
      setNumberField(value);
    }
  };

  const handleAlphabetChange = (e) => {
    const value = e.target.value;
    // Allow only alphabets in the alphabetField and limit to 20 characters
    if (/^[A-Za-z]{0,20}$/.test(value)) {
      setAlphabetField(value);
    }
  };

  const handleAlphanumericChange = (e) => {
    const value = e.target.value;
    // Allow only alphanumeric characters in the alphanumericField and limit to 30 characters
    if (/^[a-zA-Z0-9]{0,30}$/.test(value)) {
      setAlphanumericField(value);
    }
  };

  return (
    <div className="address-form-container">
      <h2 className="form-heading">Address Form</h2>
      <div className="form-group">
        <label>Email:</label>
        <input type="text" value={userData.email} readOnly />
      </div>
      <div className="form-group">
        <label>Country:</label>
        <select value={address} onChange={(e) => setAddress(e.target.value)}>
          <option value="" disabled selected>
            Select your country
          </option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Preferred Language English:</label>
        <input
          type="checkbox"
          checked={toggleValue}
          onChange={() => setToggleValue((prev) => !prev)}
        />
      </div>
      <div className="form-group">
        <label>Pin Code (Max 6 digits):</label>
        <input type="text" value={numberField} onChange={handleNumberChange} />
      </div>
      <div className="form-group">
        <label>City (Max 20 alphabets):</label>
        <input type="text" value={alphabetField} onChange={handleAlphabetChange} />
      </div>
      <div className="form-group">
        <label>Home Address (Max 30 characters):</label>
        <input type="text" value={alphanumericField} onChange={handleAlphanumericChange} />
      </div>
      {error && <div className="error">{error}</div>}
      <button className="form-btn" onClick={handlePreview}>
        Preview
      </button>
    </div>
  );
};

export default AddressForm;
