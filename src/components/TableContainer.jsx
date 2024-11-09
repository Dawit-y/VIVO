import React, { Fragment, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";

import { rankItem } from "@tanstack/match-sorter-utils";

// Column Filter
const Filter = ({ column }) => {
  const columnFilterValue = column.getFilterValue();

  return (
    <>
      <DebouncedInput
        type="text"
        value={columnFilterValue ?? ""}
        onChange={(value) => column.setFilterValue(value)}
        placeholder="Search..."
        className=""
        list={column.id + "list"}
      />
      <div className="h-1" />
    </>
  );
};

// Global Filter
const DebouncedInput = ({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [debounce, onChange, value]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="w-1/2 border rounded p-2"
    />
  );
};

const TableContainer = ({
  columns,
  data,
  tableClass,
  theadClass,
  divClassName,
  isBordered,
  isPagination,
  isGlobalFilter,
  paginationWrapper,
  pagination,
  buttonClass,
  buttonName,
  isAddButton,
  isCustomPageSize,
  handleUserClick,
  isJobListGlobalFilter,
}) => {
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const pageIndexRef = useRef(0); // Store the page index
  const [pageSize, setPageSize] = useState(10);

  const fuzzyFilter = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value);
    addMeta({ itemRank });
    return itemRank.passed;
  };

  const table = useReactTable({
    columns,
    data,
    filterFns: { fuzzy: fuzzyFilter },
    state: {
      columnFilters,
      globalFilter,
      pagination: {
        pageIndex: pageIndexRef.current,
        pageSize,
      },
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const {
    getHeaderGroups,
    getRowModel,
    getCanPreviousPage,
    getCanNextPage,
    getPageOptions,
    setPageIndex,
    nextPage,
    previousPage,
    getState,
  } = table;

  useEffect(() => {
    setPageIndex(pageIndexRef.current); // Apply the saved page index
  }, [data, setPageIndex]); // Reapply the page index after data update

  const rowsToFill = 7 - getRowModel().rows.length;

  return (
    <div className="shadow-lg bg-white text-gray-950 border border-gray-200 p-8 rounded">
      <div className="mb-4 flex items-center justify-start gap-2">
        {isCustomPageSize && (
          <select
            className="border rounded p-2 w-40"
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {"Showing "} {pageSize}
              </option>
            ))}
          </select>
        )}
        {isGlobalFilter && (
          <DebouncedInput
            value={globalFilter ?? ""}
            onChange={(value) => setGlobalFilter(String(value))}
            placeholder="Search..."
            className="border rounded p-2 w-full sm:w-auto"
          />
        )}
        {isAddButton && (
          <button
            type="button"
            className={`${buttonClass} bg-blue-500 text-white rounded p-2 hover:bg-blue-600`}
            onClick={handleUserClick}
          >
            <i className="mdi mdi-plus mr-1"></i> {buttonName}
          </button>
        )}
      </div>

      <div className={divClassName ? divClassName : "overflow-x-auto"}>
        <table
          className={`min-w-full ${tableClass} border ${
            isBordered && "border-gray-300"
          }`}
        >
          <thead className={`${theadClass} bg-gray-100`}>
            {getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                <th className="p-2 border">S.N</th>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className={`p-2 border ${
                      header.column.columnDef.enableSorting
                        ? "cursor-pointer"
                        : ""
                    }`}
                  >
                    {header.isPlaceholder ? null : (
                      <Fragment>
                        <div
                          onClick={
                            header.column.getCanSort()
                              ? header.column.getToggleSortingHandler()
                              : undefined
                          }
                          className="flex items-center justify-between"
                        >
                          {flexRender(header.id, header.getContext())}
                          {header.column.getIsSorted()
                            ? header.column.getIsSorted() === "asc"
                              ? "↑"
                              : "↓"
                            : ""}
                        </div>
                        {header.column.getCanFilter() && (
                          <Filter column={header.column} table={table} />
                        )}
                      </Fragment>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length + 2} className="text-center py-5">
                  No data available
                </td>
              </tr>
            ) : (
              getRowModel().rows.map((row) => (
                <tr key={row.id} className="hover:bg-gray-100">
                  <td className="p-2 border">{Number(row.id) + 1}</td>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="p-2 border">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            )}
            {Array.from({ length: rowsToFill > 0 ? rowsToFill : 0 }).map(
              (_, idx) => (
                <tr key={`empty-${idx}`} className="h-12">
                  <td colSpan={columns.length + 1}></td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      {isPagination && (
        <div className="flex justify-between items-center mt-4">
          <div className="text-gray-700">
            {"Showing"} {getState().pagination.pageSize} of {data.length}{" "}
            {"Results"}
          </div>
          <div className={`${paginationWrapper} flex gap-1`}>
            <button
              className={`p-2 rounded text-blue-700 ${
                !getCanPreviousPage()
                  ? "opacity-50 cursor-not-allowed"
                  : "bg-gray-200"
              }`}
              onClick={() => {
                pageIndexRef.current = getState().pagination.pageIndex;
                previousPage();
              }}
              disabled={!getCanPreviousPage()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                />
              </svg>
            </button>
            {getPageOptions().map((item, key) => (
              <button
                key={key}
                className={`px-4 py-1 rounded ${
                  getState().pagination.pageIndex === item
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => {
                  pageIndexRef.current = item;
                  setPageIndex(item);
                }}
              >
                {item + 1}
              </button>
            ))}
            <button
              className={`p-2 rounded ${
                !getCanNextPage()
                  ? "opacity-50 cursor-not-allowed"
                  : "bg-gray-200"
              }`}
              onClick={() => {
                pageIndexRef.current = getState().pagination.pageIndex;
                nextPage();
              }}
              disabled={!getCanNextPage()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableContainer;
