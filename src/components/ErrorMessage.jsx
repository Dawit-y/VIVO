import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <h5 className="text-red-500 text-md">
        {message ? message : "Something Went Wrong"}
      </h5>
    </div>
  );
};

export default ErrorMessage;
