import React from "react";

const Noti = ({ message }) => {
  if (message === null) {
    return null;
  }

  return (
    <>
      <div className="message">{message}</div>
    </>
  );
};

export default Noti;
