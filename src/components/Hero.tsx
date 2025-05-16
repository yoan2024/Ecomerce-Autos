type Car = {
  id: string;
  name: string;
  price: number;
  image: string;
};

import cars from "../data/cars.json"; // ✅ En Vite esto es suficiente
import React from "react";
import { Link } from "react-router-dom";
import { getTopExpensiveCars } from "./CarCard";
const typedCars: Car[] = cars;

const Hero = () => {
  const getTopCars = getTopExpensiveCars(typedCars);
  const topCar = getTopCars[0];
  return (
    <div className="text-center mt-16">
      <h1 className="font-bold text-2xl">Bienvenido a SuperCar Shop</h1>
      <h2 className="font-medium">
        Los autos más rápidos y exclusivos del mundo, ahora a tu alcance
      </h2>
      <h2 className="text-white font-semibold mt-4 text-xl">TOP CARD</h2>
      <img src={topCar.image} alt="" className="w-full h-72 mb-4" />
      <Link
        to="./Catalog"
        className="bg-red-400
   font-bold p-2 rounded-2xl "
      >
        Ver Catalog
      </Link>{" "}
    </div>
  );
};

export default Hero;
