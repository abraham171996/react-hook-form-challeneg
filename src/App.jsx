import React, { useState } from 'react';
import UserForm from './components/Form';
import UserDataDisplay from './components/UserDataDisplay';
import "./style.css"
const App = () => {
  const [userData, setUserData] = useState(null);

  const handleFormData = (data) => {
    setUserData(data);
  };

  return (
    <div className='main'>
      <h1>React Hook Form Challenge</h1>
      <div className="cards">
      <UserForm onSubmit={handleFormData} />
      {userData && <UserDataDisplay userData={userData} />}
      </div>
    </div>
  );
};

export default App;
