import React from "react";
import cars from "../data/cars.json"; // ✅ En Vite esto es suficiente
import { Link } from "react-router-dom";

const CardCard2 = ({ referencia }) => {
  const referenciaCars = cars.filter((c) => c.brand === referencia);

  return (
    <div className="bg-slate-700">
      <div className="flex flex-row flex-wrap">
        {referenciaCars.map((c: any) => {
          return (
            <div key={c.id} className="ml-8 relative">
              <Link to={`/cars/${c.id}`}>
                <img src={c.image} alt={c.name} className="w-80 h-60" />
              </Link>
              <div className="flex flex-row gap-2 mt-3 ">
                <span>⭐⭐⭐</span>
                <Link to={`/cars/${c.id}`} className="text-white text-base">
                  {c.name}
                </Link>
                <div className="text-white/90 text-base">${c.precio} </div>
              </div>
              <div>
                <img
                  src="/images/carrito.png"
                  className="w-5 h-5 absolute top-0"
                  alt="hola"
                />{" "}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardCard2;
