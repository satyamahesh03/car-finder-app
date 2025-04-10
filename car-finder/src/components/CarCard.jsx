import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useWishlist } from "../context/WishlistContext";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const isLiked = wishlist.some((item) => item.id === car.id);

  const toggleWishlist = () => {
    if (isLiked) {
      removeFromWishlist(car.id);
      showToast(`${car.brand} ${car.model} removed from Wishlist`);
    } else {
      addToWishlist(car);
      showToast(`${car.brand} ${car.model} added to Wishlist`);
    }
  };

  const showToast = (msg) => {
    const toast = document.createElement("div");
    toast.innerText = msg;
    toast.className =
      "fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded shadow-lg z-50";
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 2000);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition relative">


      <Link to={`/car/${car.model.toLowerCase().replace(" ", "-")}`}>
        <div className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition relative">
          <div className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden">
              <img
                src={car.image}
                alt={`${car.brand} ${car.model}`}
                className="w-full h-48 object-cover"
              />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-1">
              {car.brand} {car.model}
            </h2>
            <p className="text-gray-600 text-sm">Fuel: {car.fuelType}</p>
            <p className="text-gray-600 text-sm">Seating: {car.seatingCapacity}</p>
            <p className="text-green-600 font-bold mt-2">
              ₹ {car.price.toLocaleString("en-IN")}
            </p>
          </div>
        </div>
      </Link>
      <button
        onClick={toggleWishlist}
        className="absolute top-2 right-2 text-red-500 text-xl focus:outline-none"
      >
        {isLiked ? <FaHeart /> : <FaRegHeart />}
      </button>

    </div>
  );
};

export default CarCard;