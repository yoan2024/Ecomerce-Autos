type Car = {
  id: string;
  brand: string;
  price: number;
  image: string;
};

import React from "react";
import cars from "../data/cars.json"; // ✅ En Vite esto es suficiente

const typedCars: Car[] = cars;

export function getTopExpensiveCars(cars: Car[]): Car[] {
  return [...cars]
    .sort((a, b) => b.price - a.price) // orden descendente por precio
    .slice(0, 3); // toma los primeros 3
}

const CarCard = () => {
  const getCarrosMasCaros = getTopExpensiveCars(typedCars);
  return (
    <div className="flex flex-row  gap-10 mt-5">
      {getCarrosMasCaros.map((c) => {
        return (
          <img src={c.image} alt={c.brand} className="w-80 h-72 " key={c.id} />
        );
      })}
    </div>
  );
};

export default CarCard;
