import React, { useState, useEffect } from "react";
import FilterPanel from "../components/FilterPanel";
import CarCard from "../components/CarCard";
import Pagination from "../components/Pagination";

const Home = () => {
    const [cars, setCars] = useState([]); // fetched car data
    const [filteredCars, setFilteredCars] = useState([]); // for search & filter
    const [currentPage, setCurrentPage] = useState(1);
    const carsPerPage = 10;

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("/cars.json")
            .then(res => res.json())
            .then(data => {
                setCars(data);
                setFilteredCars(data);
                setIsLoading(false);
            });
    }, []);
    // pagination logic
    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6">
            <div className="w-full flex flex-col gap-4">
                <FilterPanel
                    cars={cars}
                    setFilteredCars={setFilteredCars}
                    setCurrentPage={setCurrentPage}
                />
                <div className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {currentCars.map((car) => (
                            <CarCard key={car.id} car={car} />
                        ))}
                    </div>
                    <Pagination
                        totalCars={filteredCars.length}
                        carsPerPage={carsPerPage}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        isLoading={isLoading}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;