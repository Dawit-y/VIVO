import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { userSelecter } from "../../../store/features/auth/authSlice";
import { useFetchAcceptedApplicantsQuery } from "../../../store/features/organization/apiSlice";

function DashboardCard07() {
  const [searchTerm, setSearchTerm] = useState("");
  const { organization_id } = useSelector(userSelecter);
  const {
    data: applicants = [],
    isLoading,
    error,
  } = useFetchAcceptedApplicantsQuery(organization_id);
  console.log(applicants);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = applicants?.filter(
    (data) =>
      data.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.spent.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.post.toLowerCase().includes(searchTerm.toLowerCase())
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching applications</div>;

  return (
    <>
      <main className="px-10">
        <div className="dark:bg-slate-900 bg-white flex items-center">
          <div className="container mx-auto">
            {/* Table of posts */}
            <div className="flex flex-col">
              <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                  <div className="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                    <div className="py-3 px-4">
                      <div className="relative max-w-xs">
                        <label className="sr-only">Search</label>
                        <input
                          type="text"
                          name="hs-table-with-pagination-search"
                          id="hs-table-with-pagination-search"
                          className="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                          placeholder="Search for items"
                          value={searchTerm}
                          onChange={handleSearchChange}
                        />
                        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                          <svg
                            className="h-4 w-4 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="overflow-x-auto">
                      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
                        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
                          Accepted Applicants
                        </h2>
                      </header>
                      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                            >
                              Name
                            </th>

                            <th
                              scope="col"
                              className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                            >
                              Post
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                            >
                              Date
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                            >
                              Email
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                            >
                              Progress
                            </th>
                          </tr>
                        </thead>
                        {filteredData.map((application) => {
                          return (
                            <tbody
                              key={application.id}
                              className="divide-y divide-gray-100"
                            >
                              <tr
                                id={application.id}
                                key={application.id}
                                className="text-gray-500"
                              >
                                <td className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                                  <Link
                                    to="applicant_progress"
                                    state={application}
                                  >
                                    <div className="flex items-center">
                                      <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                                        <img
                                          className="rounded-full"
                                          src={application.image}
                                          width="40"
                                          height="40"
                                          alt={application.name}
                                        />
                                      </div>
                                      <div className="font-medium text-slate-800 dark:text-slate-100">
                                        {application.name}
                                      </div>
                                    </div>
                                  </Link>
                                </td>
                                <td className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                                  {application.post}
                                </td>
                                <td className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                                  {application.spent}
                                </td>
                                <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                                  {application.email}
                                </td>
                                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                  <div className="flex items-center">
                                    <span className="mr-2 text-xs font-medium">
                                      {application.progress}
                                    </span>
                                    <div className="relative w-full">
                                      <div className="w-full bg-gray-200 rounded-sm h-2">
                                        <div className="bg-cyan-600 h-2 rounded-sm w-32"></div>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          );
                        })}
                      </table>
                    </div>
                    <div className="py-1 px-4">
                      <nav className="flex items-center space-x-1">
                        <button
                          type="button"
                          className="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                          <span aria-hidden="true">«</span>
                          <span className="sr-only">Previous</span>
                        </button>
                        <button
                          type="button"
                          className="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10"
                          aria-current="page"
                        >
                          1
                        </button>
                        <button
                          type="button"
                          className="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10"
                        >
                          2
                        </button>
                        <button
                          type="button"
                          className="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10"
                        >
                          3
                        </button>
                        <button
                          type="button"
                          className="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                          <span className="sr-only">Next</span>
                          <span aria-hidden="true">»</span>
                        </button>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default DashboardCard07;
