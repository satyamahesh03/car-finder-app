import React, { useContext, useState } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { motion } from "framer-motion";
import { FaTrash } from "react-icons/fa";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const [filter, setFilter] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const filteredWishlist = wishlist.filter((car) =>
    `${car.brand} ${car.model}`.toLowerCase().includes(filter.toLowerCase())
  );

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(""), 2000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white min-h-screen p-6">

        <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
        <input
          type="text"
          placeholder="Filter by brand/model"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mb-4 p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {toastMessage && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded-lg shadow-lg">
            {toastMessage}
          </div>
        )}
        {filteredWishlist.length === 0 ? (
          <p>No cars added yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWishlist.map((car) => (
              <motion.div
                key={car.id}
                className="bg-white shadow-lg rounded-lg p-4 relative transition-transform"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex">
                  <img
                    src={car.image}
                    alt={car.model}
                    className="w-1/2 h-28 object-cover rounded-lg"
                  />
                  <div className="ml-4 flex flex-col justify-between">
                    <div>
                      <h2 className="text-lg font-semibold mt-2">
                        {car.brand} {car.model}
                      </h2>
                      <p className="text-sm text-gray-600">Fuel: {car.fuelType}</p>
                      <p className="text-sm text-gray-600">
                        Seats: {car.seatingCapacity}
                      </p>
                    </div>
                    <p className="text-xl font-bold text-green-600 mt-1">
                      ₹ {car.price.toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    removeFromWishlist(car.id);
                    showToast(`${car.brand} ${car.model} removed from wishlist.`);
                  }}
                  className="absolute top-2 right-2 flex items-center justify-center p-2 bg-transparent text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-500 transition duration-300"
                >
                  <FaTrash />
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