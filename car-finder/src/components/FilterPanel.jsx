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
    <div className="w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-6">
      <div className="text-gray-900 dark:text-white shadow rounded p-4 space-y-4">

        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">Filter Cars</h2>

        <div className="border dark:border-gray-600 p-4 rounded-lg shadow-md ring-1 ring-gray-200 dark:ring-gray-700">
          <h3 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">Brand</h3>
          <select
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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

        <div className="border dark:border-gray-600 p-4 rounded-lg shadow-md ring-1 ring-gray-200 dark:ring-gray-700">
          <h3 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">Fuel Type</h3>
          <select
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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

        <div className="border dark:border-gray-600 p-4 rounded-lg shadow-md ring-1 ring-gray-200 dark:ring-gray-700">
          <h3 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">Seating Capacity</h3>
          <input
            type="number"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="e.g., 5"
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
          />
        </div>

        <div className="border dark:border-gray-600 p-4 rounded-lg shadow-md ring-1 ring-gray-200 dark:ring-gray-700">
          <h3 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">Price Range</h3>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Min Price</label>
          <input
            type="number"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="₹ Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <label className="block mb-1 font-medium mt-2 text-gray-700 dark:text-gray-300">Max Price</label>
          <input
            type="number"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="₹ Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
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
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg mt-4 transition duration-300"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;