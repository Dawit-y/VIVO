import { Link } from "react-router-dom";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { userSelecter } from "../../../store/features/auth/authSlice";
import { useFetchApplicationsQuery } from "../../../store/features/organization/organizationApi";
import TableContainer from "../../../components/TableContainer";

export default () => {
  const { organization_id } = useSelector(userSelecter);
  const { data, isLoading, error } = useFetchApplicationsQuery(organization_id);

  console.log("applications", data);

  const columns = useMemo(
    () => [
      {
        header: "First Name",
        accessorKey: "First Name",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cellProps) => {
          return <span>{cellProps.row.original.applicant.first_name}</span>;
        },
      },
      {
        header: "Last Name",
        accessorKey: "Last Name",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cellProps) => {
          return <span>{cellProps.row.original.applicant.last_name}</span>;
        },
      },
      {
        header: "Email",
        accessorKey: "email",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cellProps) => {
          return <span>{cellProps.row.original.applicant.email}</span>;
        },
      },

      {
        header: "Post",
        accessorKey: "post",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cellProps) => {
          return <span>{cellProps.row.original.post.title}</span>;
        },
      },
      {
        header: "Created",
        accessorKey: "Created",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cellProps) => {
          return <span>{cellProps.row.original.created}</span>;
        },
      },

      {
        header: "View Detail",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cellProps) => {
          return (
            <Link
              to={``}
              className="bg-blue-600 text-white px-2 py-1 rounded-md text-sm fonr-bold"
            >
              {"View Detail"}
            </Link>
          );
        },
      },
    ],
    []
  );
  console.log("applicants", data);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching applications</div>;

  return (
    <>
      <div className="px-10 mt-3">
        <div className="dark:bg-slate-900 bg-white flex items-center">
          <div className="container mx-auto">
            {data && (
              <TableContainer
                columns={columns}
                data={data}
                isGlobalFilter={true}
                isCustomPageSize={true}
                isPagination={true}
                tableClass="table-auto w-full text-left"
                theadClass="bg-gray-100"
                paginationWrapper="flex items-center space-x-1 rounded-lg"
                pagination="flex justify-center space-x-1 mt-4"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
