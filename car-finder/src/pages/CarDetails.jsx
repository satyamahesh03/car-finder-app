import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  useEffect(() => {
    fetch("/cars.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((car) => car.id === id);
        setCar(found);
      });
  }, [id]);

  const isInWishlist = wishlist.some((item) => item.id === id);

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      removeFromWishlist(car.id);
    } else {
      addToWishlist(car);
    }
  };

  if (!car) return <div className="p-6 text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <img src={car.image} alt={car.model} className="w-full h-64 object-cover rounded mb-4" />
        <h1 className="text-3xl font-bold mb-2">{car.brand} {car.model}</h1>
        <p className="text-lg mb-2"><strong>Fuel Type:</strong> {car.fuelType}</p>
        <p className="text-lg mb-2"><strong>Seating:</strong> {car.seatingCapacity}</p>
        <p className="text-lg mb-2"><strong>Price:</strong> ₹{car.price.toLocaleString("en-IN")}</p>
        <button 
          onClick={handleWishlistToggle} 
          className={`mt-4 px-4 py-2 rounded ${isInWishlist ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'}`}
        >
          {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
        </button>
      </div>
    </div>
  );
};

export default CarDetails;