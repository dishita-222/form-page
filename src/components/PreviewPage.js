import React from 'react';

const PreviewPage = ({ userData }) => {
  return (
    <div>
      <h2>Preview Page</h2>
      <div>
        <strong>Email:</strong> {userData.email}
      </div>
      <div>
        <strong>Country:</strong> {userData.address}
      </div>
      <div>
        <strong>English Preferred Language:</strong> {userData.toggleValue ? 'Yes' : 'No'}
      </div>
      <div>
        <strong>Pin Code :</strong> {userData.numberField}
      </div>
      <div>
        <strong>City :</strong> {userData.alphabetField}
      </div>
      <div>
        <strong>Home Address :</strong> {userData.alphanumericField}
      </div>
      {/* Display other fields here */}
    </div>
  );
};

export default PreviewPage;
