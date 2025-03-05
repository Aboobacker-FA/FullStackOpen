import React from "react";

const Noti = ({ message }) => {
  if (message === null) {
    return null;
  }

  return (
    <>
      <div className={`notification ${message.type}`}>{message.message}</div>
    </>
  );
};

export default Noti;
