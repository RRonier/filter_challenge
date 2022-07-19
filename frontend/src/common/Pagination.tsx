import React from "react";

interface IPaginationProps {
  rowsPerPage: number;
  totalRows: number;
  paginate: any;
  currentPage: number;
}

export default function Pagination({
  rowsPerPage,
  totalRows,
  paginate,
  currentPage,
}: IPaginationProps) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="py-2">
      <nav className="flex justify-end">
        <ul className="flex pl-0 rounded list-none flex-wrap">
          <li>
            {pageNumbers.map((number, i) => (
              <div
                key={i}
                onClick={() => {
                  paginate(number);
                }}
                className={
                  currentPage === number
                    ? "bg-blue border-red-300 text-red-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer"
                    : "bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer"
                }
              >
                {number}
              </div>
            ))}
          </li>
        </ul>
      </nav>
    </div>
  );
}
