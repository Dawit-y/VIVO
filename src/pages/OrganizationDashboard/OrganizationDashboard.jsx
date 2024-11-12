import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Sidebar from "../../partials/Organization/Sidebar";

function OrganizationDashboard(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div className="flex gap-2 overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="flex flex-col flex-1 overflow-x-hidden">
        <div className="flex justify-end mt-5 mr-5">
          <button
            type="button"
            onClick={handleBack}
            className={
              "w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-bg-gray-600 hover:bg-white-600 font-medium bg-slate-50"
            }
          >
            <div className="flex flex-row align-middle">
              <svg
                className="w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p className="ml-2">Back</p>
            </div>
          </button>
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default OrganizationDashboard;
