import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHover } from "../context/HoverContext";
import { handleMouse } from "../utils/utils";
import { incontrarHoverCar } from "../utils/utils";
import { useCarrito } from "../context/CarritoContext";
import { handleCarrito } from "../utils/utils";
import { useUsuario } from "../context/loginContext";

const Catalogo = ({ autos }) => {
  const { hover, setHover } = useHover();
  const { carrito, setCarrito } = useCarrito();
  const { usuario, setUsuario } = useUsuario();
  const user = usuario[0];
  return (
    <div className="w-full bg-slate-700  gap-4">
      <div className="flex flex-row flex-wrap">
        {autos.map((c: any) => {
          return (
            <div
              key={c.id}
              className="mb-2  relative "
              onMouseEnter={() =>
                handleMouse(c.id, "onMouseOver", setHover, hover)
              }
              onMouseLeave={() =>
                handleMouse(c.id, "onMouseOut", setHover, hover)
              }
            >
              <Link to={`/cars/${c.id}`}>
                <img src={c.image} alt={c.brand} className="w-80 h-60" />
              </Link>
              <div className="flex flex-row items-center gap-2 mt-3 ml-3">
                <span>⭐⭐⭐</span>
                <Link to={`/cars/${c.id}`} className="text-white text-sm">
                  {c.brand + " " + c.model + " " + c.version}
                </Link>
                <div className="text-white/90 text-sm">${c.price}</div>
              </div>
              <div>
                <img
                  src="/images/carrito.png"
                  className={`w-10 h-10    absolute z-10   top-48 ml-64 hover:w-12 hover:h-12 animate-pulse cursor-pointer duration-300 ${
                    incontrarHoverCar(c.id, hover) ? "" : "hidden"
                  } `}
                  alt="hola"
                  onClick={() =>
                    handleCarrito(c.id, carrito, setCarrito, autos, user)
                  }
                />{" "}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Catalogo;
