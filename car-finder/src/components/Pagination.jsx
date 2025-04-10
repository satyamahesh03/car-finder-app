import React from "react";

const Pagination = ({ totalCars, carsPerPage, currentPage, setCurrentPage, isLoading }) => {
  const totalPages = Math.ceil(totalCars / carsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex justify-center items-center mt-6 gap-2">
      {isLoading ? (
        [...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-10 h-8 bg-gray-300 dark:bg-gray-700 animate-pulse rounded"
          ></div>
        ))
      ) : (
        <>
          <button
            onClick={() => goToPage(currentPage - 1)}
            className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Prev
          </button>
  
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => goToPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}
  
          <button
            onClick={() => goToPage(currentPage + 1)}
            className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </>
      )}
    </div>
  );
};
export default Pagination;