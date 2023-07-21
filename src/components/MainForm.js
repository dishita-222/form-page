import React, { useState } from 'react';
import LoginPage from './LoginPage';
import AddressForm from './AddressForm';
import PreviewPage from './PreviewPage';

const MainForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [userData, setUserData] = useState({});
  
  const handleNext = (data) => {
    setUserData(data);
    setCurrentPage((prev) => prev + 1);
  };

  const handlePreview = (data) => {
    setUserData((prevData) => ({ ...prevData, ...data }));
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="main-form-container">
      {currentPage === 1 && <LoginPage onNext={handleNext} />}
      {currentPage === 2 && <AddressForm userData={userData} onPreview={handlePreview} />}
      {currentPage === 3 && <PreviewPage userData={userData} />}
    </div>
  );
};

export default MainForm;