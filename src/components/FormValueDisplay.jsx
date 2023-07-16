import React from 'react';

const FormValueDisplay = ({ formData }) => {
  return (
    <div className="card">
      <h2>Form Values</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Age:</strong> {formData.age}</p>
      <p><strong>Gender:</strong> {formData.gender}</p>
      <p><strong>Message:</strong> {formData.message}</p>
      <p><strong>Number:</strong> {formData.number}</p>
      <p><strong>Favorite Color:</strong> <span style={{ backgroundColor: formData.favoriteColor, padding: '2px 5px', color: '#fff', borderRadius: '5px' }}>{formData.favoriteColor}</span></p>
    </div>
  );
};

export default FormValueDisplay;
