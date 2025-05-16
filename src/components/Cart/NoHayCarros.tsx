import { Link } from "react-router-dom";
import React from "react";
const NoHayCarros = () => (
  <div className="text-center flex flex-col items-center">
    <div className="text-white text-4xl">
      Ups!! No has agregado nada al carrito
    </div>
    <div className="text-white text-2xl mt-5 flex gap-2 items-center">
      <div>Haz click en</div>
      <Link to="/catalog" className="bg-red-400 rounded-full p-2 text-sm">
        Ver Catálogo
      </Link>
    </div>
  </div>
);

export default NoHayCarros;
