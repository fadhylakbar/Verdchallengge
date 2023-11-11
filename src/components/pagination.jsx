import React from "react";
import classnames from "clsx";
import style from "@/components/Pagination.module.css";
import { DOTS, usePagination } from "./usePagination";


const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className="flex justify-center items-center">
      <ul
        className={classnames(style.pagination_container, {
          [className]: className,
        })}
      >
        <button
          className={classnames(style.pagination_item, {
            disabled: currentPage === 1,
          })}
          disabled={currentPage === 1}
          onClick={onPrevious}
        >
          Prev
        </button>
        {paginationRange?.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <li key={index} className="tracking-wider cursor-pointer">
                ...
              </li>
            );
          }

          return (
            <li
              key={index}
              className={classnames(style.pagination_item, {
                "bg-sky-400 text-white font-semibold":
                  pageNumber === currentPage,
              })}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
        <button
          className={classnames(style.pagination_item, {
            disabled: currentPage === lastPage,
          })}
          onClick={onNext}
          disabled={currentPage === lastPage}
        >
          <span className="text-gray-800">Next</span>
        </button>
      </ul>
    </div>
  );
};

export default Pagination;
