import React from 'react';

const UserDataDisplay = ({ userData }) => {
  return (
    <div>
      <h2>User Data</h2>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Age:</strong> {userData.age}</p>
      <p><strong>Gender:</strong> {userData.gender}</p>
      <p><strong>Message:</strong> {userData.message}</p>
      <p><strong>Number:</strong> {userData.number}</p>
      <p><strong>Favorite Color:</strong> <span style={{ backgroundColor: userData.favoriteColor, padding: '2px 5px', color: '#fff' }}>{userData.favoriteColor}</span></p>
    </div>
  );
};

export default UserDataDisplay;
