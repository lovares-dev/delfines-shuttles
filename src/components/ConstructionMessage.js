import React from 'react';

const ConstructionMessage = () => {
  return (
    <div className="construction-container d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1 className="display-4 text-white">Los Delfines Shuttles</h1>
        <h2 className="text-white">Welcome to Los Delfines Shuttles</h2>
        <p className="text-white">
          Experience safe and comfortable travel with our premium shuttle
          services.
        </p>
        <p className="lead text-white">
          We are working to give you the best experience.
        </p>
        <button className="btn btn-primary btn-lg">More information</button>
      </div>
    </div>
  );
};

export default ConstructionMessage;
