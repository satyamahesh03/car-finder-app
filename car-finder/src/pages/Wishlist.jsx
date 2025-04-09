import React, { useContext, useState } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { motion } from "framer-motion";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const [filter, setFilter] = useState("");

  const filteredWishlist = wishlist.filter((car) =>
    `${car.brand} ${car.model}`.toLowerCase().includes(filter.toLowerCase())
  );

  const exportWishlist = () => {
    const dataStr = JSON.stringify(wishlist, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "wishlist.json";
    a.click();
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white min-h-screen p-6">

        <h1 className="text-2xl font-bold mb-4">Your Wishlist ❤️</h1>
        <input
          type="text"
          placeholder="Filter by brand/model"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mb-4 p-2 border rounded"
        />
        <button
          onClick={exportWishlist}
          className="mb-4 p-2 bg-blue-500 text-white rounded"
        >
          Export Wishlist
        </button>
        {filteredWishlist.length === 0 ? (
          <p>No cars added yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredWishlist.map((car) => (
              <motion.div
                key={car.id}
                className="bg-white shadow rounded p-4 relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={car.image}
                  alt={car.model}
                  className="w-full h-40 object-cover rounded"
                />
                <h2 className="text-lg font-semibold mt-2">
                  {car.brand} {car.model}
                </h2>
                <p className="text-sm text-gray-600">Fuel: {car.fuelType}</p>
                <p className="text-sm text-gray-600">
                  Seats: {car.seatingCapacity}
                </p>
                <p className="font-bold text-blue-600 mt-1">
                  ₹ {car.price.toLocaleString("en-IN")}
                </p>
                <button
                  onClick={() => removeFromWishlist(car.id)}
                  className="absolute top-2 right-2 text-sm text-red-500 hover:text-red-700"
                >
                  Remove ❌
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;