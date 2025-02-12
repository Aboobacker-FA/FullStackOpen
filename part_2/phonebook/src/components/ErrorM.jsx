import React from "react";

const ErrorM = ({ errorMessage }) => {
  if (errorMessage === null) {
    return null;
  }

  return (
    <>
      <div className="error">{errorMessage}</div>
    </>
  );
};

export default ErrorM;
