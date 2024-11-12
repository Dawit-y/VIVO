import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { userSelecter } from "../../../store/features/auth/authSlice";
import { useFetchOrganizationInternshipsQuery } from "../../../store/features/organization/organizationApi";
import TableContainer from "../../../components/TableContainer";
import LoadingIndicator from "../../../components/loading_indicator";
import ErrorMessage from "../../../components/ErrorMessage";

export default () => {
  const { organization_id } = useSelector(userSelecter);
  const { data, isLoading, error } =
    useFetchOrganizationInternshipsQuery(organization_id);

  const columns = useMemo(
    () => [
      {
        header: "Name",
        accessorKey: "name",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cellProps) => {
          return <span>{cellProps.row.original.title}</span>;
        },
      },
      {
        header: "Email",
        accessorKey: "email",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cellProps) => {
          return <span>{cellProps.row.original.email}</span>;
        },
      },
      {
        header: "Spent",
        accessorKey: "spent",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cellProps) => {
          return <span>{cellProps.row.original.spent}</span>;
        },
      },
      {
        header: "Post",
        accessorKey: "post",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cellProps) => {
          return <span>{cellProps.row.original.post}</span>;
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
  console.log("vworks", data);
  if (isLoading) return <LoadingIndicator />;
  if (error) return <ErrorMessage message={"Error: fetching Internships"} />;

  return (
    <>
      <div className="px-5 mt-3">
        <div className="dark:bg-slate-900 bg-white flex items-center">
          <div className="container mx-auto">
            <h1 className="dark:text-slate-100 mb-8 text-2xl font-bold text-center leading-none tracking-tighter text-neutral-600 md:text-3xl lg:text-4xl">
              Created Internships
            </h1>
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
