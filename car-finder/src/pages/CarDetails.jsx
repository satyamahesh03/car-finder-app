import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { FaStar } from "react-icons/fa";

const CarDetails = () => {
  const { carName } = useParams();
  const [car, setCar] = useState(null);
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  useEffect(() => {
    fetch("/cars.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((car) => car.model.toLowerCase().replace(" ", "-") === carName);
        setCar(found);
      });
  }, [carName]);

  const isInWishlist = wishlist.some((item) => item.model.toLowerCase().replace(" ", "-") === carName);

  const showToast = (message) => {
    const toast = document.createElement('div');
    toast.innerText = message;
    toast.className = 'fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white dark:bg-white dark:text-black px-4 py-2 rounded shadow-lg z-50 text-sm font-medium transition';
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3000);
  };

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      removeFromWishlist(car.id);
      showToast('Removed from Wishlist');
    } else {
      addToWishlist(car);
      showToast('Added to Wishlist');
    }
  };

  if (!car) return <div className="p-6 text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      <div className="max-w-6xl ml-0 p-6 flex flex-col sm:flex-row">
        <img src={car.image} alt={car.model} className="w-full sm:w-[60%] object-cover rounded sm:mr-10" />
        <div className="w-full sm:w-[40%] flex flex-col justify-start items-end mt-10 space-y-4 text-right">
          <div>
            <h1 className="text-3xl font-bold mb-2">{car.brand} {car.model}</h1>
            <p className="text-2xl text-green-600 mb-4"><strong>Price:</strong> ₹{car.price.toLocaleString("en-IN")}</p>
            <button 
              onClick={handleWishlistToggle} 
              className={`mt-4 px-5 py-2 rounded-lg shadow-md font-semibold transition-all duration-200 ${
                isInWishlist ? 'bg-red-500 hover:bg-red-600' : 'bg-yellow-500 hover:bg-yellow-700'
              }`}
            >
              {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
            </button>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div>
        <p className="text-md mb-4">{car.description}</p>
        {car.specifications && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Specifications</h2>
            <ul>
              {car.specifications.map((spec, index) => (
                <li key={index} className="text-lg mb-1 flex items-center gap-2"><FaStar /> {spec}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarDetails;