import React, { useState, useEffect } from "react";

const FilterPanel = ({ cars, setFilteredCars, setCurrentPage }) => {
  const [brand, setBrand] = useState("");
  const [fuel, setFuel] = useState("");
  const [seats, setSeats] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const uniqueBrands = [...new Set(cars.map((car) => car.brand))];
  const uniqueFuels = [...new Set(cars.map((car) => car.fuelType))];

  const handleFilter = () => {
    let filtered = [...cars];

    if (brand) {
      filtered = filtered.filter((car) => car.brand === brand);
    }

    if (fuel) {
      filtered = filtered.filter((car) => car.fuelType === fuel);
    }

    if (seats) {
      filtered = filtered.filter((car) => car.seatingCapacity === parseInt(seats));
    }

    if (minPrice) {
      filtered = filtered.filter((car) => car.price >= parseInt(minPrice));
    }

    if (maxPrice) {
      filtered = filtered.filter((car) => car.price <= parseInt(maxPrice));
    }

    setFilteredCars(filtered);
    setCurrentPage(1);
  };

  // Update filters on change
  useEffect(() => {
    handleFilter();
  }, [brand, fuel, seats, minPrice, maxPrice]);

  return (
    <div className="flex flex-row max-[400px]:flex-col gap-2 flex-wrap w-full h-auto p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="w-full text-gray-900 dark:text-white rounded p-2 mb-2">
        <h2 className="text-xl font-bold text-gray-1200 dark:text-gray-200">Filter Cars</h2>
      </div>

      <div className="border dark:border-gray-600 p-1 rounded-lg shadow-md ring-1 ring-gray-200 dark:ring-gray-700 flex-shrink-0 w-fit min-w-[120px] max-[400px]:w-full max-[400px]:text-xs max-[400px]:p-1">
        <h3 className="text-xs font-semibold mb-1 text-gray-700 dark:text-gray-300">Brand</h3>
        <select
          className="w-full p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white max-[400px]:text-xs max-[400px]:p-1"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="">All</option>
          {uniqueBrands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div className="border dark:border-gray-600 p-1 rounded-lg shadow-md ring-1 ring-gray-200 dark:ring-gray-700 flex-shrink-0 w-fit min-w-[120px] max-[400px]:w-full max-[400px]:text-xs max-[400px]:p-1">
        <h3 className="text-xs font-semibold mb-1 text-gray-700 dark:text-gray-300">Fuel Type</h3>
        <select
          className="w-full p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white max-[400px]:text-xs max-[400px]:p-1"
          value={fuel}
          onChange={(e) => setFuel(e.target.value)}
        >
          <option value="">All</option>
          {uniqueFuels.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </div>

      <div className="border dark:border-gray-600 p-1 rounded-lg shadow-md ring-1 ring-gray-200 dark:ring-gray-700 flex-shrink-0 w-fit min-w-[120px] max-[400px]:w-full max-[400px]:text-xs max-[400px]:p-1">
        <h3 className="text-xs font-semibold mb-1 text-gray-700 dark:text-gray-300">Seating Capacity</h3>
        <input
          type="number"
          className="w-full p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white max-[400px]:text-xs max-[400px]:p-1"
          placeholder="e.g., 5"
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
        />
      </div>

      <div className="border dark:border-gray-600 p-1 rounded-lg shadow-md ring-1 ring-gray-200 dark:ring-gray-700 flex-shrink-0 w-fit min-w-[120px] max-[400px]:w-full max-[400px]:text-xs max-[400px]:p-1">
        <h3 className="text-xs font-semibold mb-1 text-gray-700 dark:text-gray-300">Price Range</h3>
        <div className="flex flex-row items-end gap-1 max-[400px]:gap-1">
          <div className="flex flex-col">
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300 text-xs">Min</label>
            <input
              type="number"
              className="w-full p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white max-[400px]:text-xs max-[400px]:p-1"
              placeholder="₹ Min"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300 text-xs">Max</label>
            <input
              type="number"
              className="w-full p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white max-[400px]:text-xs max-[400px]:p-1"
              placeholder="₹ Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          setBrand("");
          setFuel("");
          setSeats("");
          setMinPrice("");
          setMaxPrice("");
          setFilteredCars(cars);
          setCurrentPage(1);
        }}
        className="w-fit px-2 py-1 text-sm bg-green-500 hover:bg-green-600 text-white rounded-lg mt-2 flex-shrink-0 max-[400px]:text-xs max-[400px]:px-2 max-[400px]:py-1"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FilterPanel;