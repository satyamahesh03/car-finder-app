import React, { useState, useEffect } from "react";

const FilterPanel = ({ cars, setFilteredCars, setCurrentPage }) => {
  const [brand, setBrand] = useState("");
  const [fuel, setFuel] = useState("");
  const [seats, setSeats] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const uniqueBrands = [...new Set(cars.map((car) => car.brand))];
  const uniqueFuels = [...new Set(cars.map((car) => car.fuelType))];

  const handleFilter = () => {
    let filtered = [...cars];

    if (searchTerm) {
      filtered = filtered.filter(
        (car) =>
          car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
          car.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

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

    if (sortOrder === "low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredCars(filtered);
    setCurrentPage(1);
  };

  useEffect(() => {
    handleFilter();
  }, [brand, fuel, seats, minPrice, maxPrice, sortOrder, searchTerm]);

  return (
    <div className="flex flex-col gap-2 w-full p-4 bg-white dark:bg-gray-800 rounded-lg shadow">

      {/* Search Bar (1st Row) */}
      <div className="w-full text-gray-900 dark:text-white rounded p-2 mb-2">
        <h2 className="text-xl font-bold text-gray-1200 dark:text-gray-200">Search Cars</h2>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by Model or Brand"
          maxLength="50"
          className="w-full sm:w-[250px] p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white max-[400px]:text-xs"
        />
      </div>

      {/* Filter Elements */}
      <div className="w-full flex flex-wrap gap-4">

        {/* Row 1 for mobile: Brand, Fuel, Seats */}
        <div className="w-full flex gap-4 max-[400px]:flex-row max-[400px]:flex-wrap sm:flex-nowrap">
          {/* Brand Filter */}
          <div className="w-full sm:w-[120px] max-[400px]:flex-1">
            <h3 className="text-xs font-semibold mb-1 text-gray-700 dark:text-gray-300">Brand</h3>
            <select
              className="w-full p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white max-[400px]:text-xs"
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

          {/* Fuel Type Filter */}
          <div className="w-full sm:w-[120px] max-[400px]:flex-1">
            <h3 className="text-xs font-semibold mb-1 text-gray-700 dark:text-gray-300">Fuel Type</h3>
            <select
              className="w-full p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white max-[400px]:text-xs"
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

          {/* Seating Capacity Filter */}
          <div className="w-full sm:w-[120px] max-[400px]:flex-1">
            <h3 className="text-xs font-semibold mb-1 text-gray-700 dark:text-gray-300">Seating Capacity</h3>
            <input
              type="number"
              className="w-full p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white max-[400px]:text-xs"
              placeholder="e.g., 5"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
            />
          </div>
        </div>

        {/* Row 2 for mobile: Price Range and Sort */}
        <div className="w-full flex gap-4 max-[400px]:flex-row max-[400px]:flex-wrap sm:flex-nowrap">

          {/* Price Range Filters */}
          <div className="w-full sm:w-[120px] max-[400px]:flex-1">
            <h3 className="text-xs font-semibold mb-1 text-gray-700 dark:text-gray-300">Price Range</h3>
            <div className="flex flex-col gap-2">
              <input
                type="number"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-full p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white max-[400px]:text-xs"
              />
              <input
                type="number"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white max-[400px]:text-xs"
              />
            </div>
          </div>

          {/* Sort by Price */}
          <div className="w-full sm:w-[120px] max-[400px]:flex-1">
            <h3 className="text-xs font-semibold mb-1 text-gray-700 dark:text-gray-300">Sort by Price</h3>
            <select
              className="w-full p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white max-[400px]:text-xs"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="">None</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Clear Filters Button */}
      <button
        onClick={() => {
          setBrand("");
          setFuel("");
          setSeats("");
          setMinPrice("");
          setMaxPrice("");
          setSortOrder("");
          setSearchTerm("");
          setFilteredCars(cars);
          setCurrentPage(1);
        }}
        className="w-fit px-2 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg mt-2 flex-shrink-0 max-[400px]:text-xs"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FilterPanel;