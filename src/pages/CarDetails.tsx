import React from "react";
import { useParams } from "react-router-dom";
import cars from "../data/cars.json";
import Catalogo from "../components/Catalogo";
import { useHover } from "../context/HoverContext";
import { handleMouse, incontrarHoverCar } from "../utils/utils";
import Galeria from "../components/Galeria";
import { useCarrito } from "../context/CarritoContext";
import { handleCarrito } from "../utils/utils";
import { useUsuario } from "../context/loginContext";

const CarDetails = () => {
  const { id } = useParams();
  const { usuario, setUsuario } = useUsuario();
  const { hover, setHover } = useHover();
  const { carrito, setCarrito } = useCarrito();

  const finId = cars.find((c) => c.id === id);
  if (!finId) return;
  const referencia = cars.filter((c) => c.brand === finId.brand);
  const autos = referencia.filter((c) => c.id !== id);

  return (
    <div className="bg-slate-700 gap-4 w-full min-h-screen flex flex-col">
      <div
        className="text-2xl font-sans font-semibold
       text-center m-6"
      >
        {finId.description}{" "}
      </div>
      <div className="flex flex-row justify-evenly items-center mb-10 ">
        <div>
          <ol className="flex flex-col gap-3 text-xl">
            <li>
              {" "}
              <span className="font-bold">Brand:</span> {finId.brand}
            </li>
            <li>
              {" "}
              <span className="font-bold">Version:</span> {finId.version}{" "}
            </li>
            <li>
              {" "}
              <span className="font-bold">Modelo:</span> {finId.model}{" "}
            </li>

            <li>
              {" "}
              <span className="font-bold">Year:</span> {finId.year}{" "}
            </li>
            <li>
              {" "}
              <span className="font-bold">HoursePower:</span> {finId.horsepower}{" "}
            </li>
            <li>
              {" "}
              <span className="font-bold">Precio:</span> {finId.price}{" "}
            </li>
          </ol>
        </div>
        <div
          onMouseEnter={() =>
            handleMouse(finId.id, "onMouseOver", setHover, hover)
          }
          onMouseLeave={() =>
            handleMouse(finId.id, "onMouseOut", setHover, hover)
          }
          className="relative flex flex-col"
        >
          <img
            src={finId.image}
            alt={finId.id}
            className="w-[50rem] h-[30rem]"
          />
          <div className="text-red text-gray-300 text-7xl absolute top-48">
            {" "}
            &lt;
          </div>
          <div className="text-red text-gray-300  text-7xl absolute top-48 right-0">
            &gt;
          </div>
          <img
            src="/images/carrito.png"
            alt=""
            className={`absolute z-10 right-2 bottom-0 w-10 h-10  hover:w-12 hover:h-12 animate-pulse cursor-pointer duration-300 ${
              incontrarHoverCar(finId.id, hover) ? "" : "hidden"
            }`}
            onClick={() =>
              handleCarrito(finId.id, carrito, setCarrito, referencia, usuario)
            }
          />
        </div>
      </div>
      <Catalogo autos={autos} />
    </div>
  );
};

export default CarDetails;
