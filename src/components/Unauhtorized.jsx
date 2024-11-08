import React from "react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="text-center p-14">
      <h1 className="text-3xl mt-5">403 - Unauthorized</h1>
      <p className="text-xl mt-5">
        You do not have permission to access this page.
      </p>
      <button onClick={goBack} className="px-5 py-3 text-lg cursor-pointer">
        Go Back
      </button>
    </div>
  );
};

export default Unauthorized;
