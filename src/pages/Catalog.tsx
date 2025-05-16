import React, { use, useEffect, useState } from "react";
import cars from "../data/cars.json";
import Asidebar from "../components/Asidebar";
import { Link } from "react-router-dom";
import Catalogo from "../components/Catalogo";

const Catalog = () => {
  const [todosAutos, setTodosAutos] = useState(cars);
  const [autos, setAutos] = useState(cars);
  const [filtrarMarca, setFiltrarMarca] = useState(null);
  const [filtrarPrecio, setFiltrarPrecio] = useState(null);

  useEffect(() => {
    let filtrados = [...todosAutos];
    if (filtrarMarca === null && filtrarPrecio === null) {
      filtrados.sort(() => Math.random() - 0.5);
      setAutos(filtrados);
    }

    if (filtrarMarca) {
      filtrados = filtrados.filter((auto) => auto.brand === filtrarMarca);
    }

    if (filtrarPrecio === "Low") {
      filtrados = filtrados.sort((a, b) => a.price - b.price);
    } else if (filtrarPrecio === "High") {
      filtrados = filtrados.sort((a, b) => b.price - a.price);
    }

    setAutos(filtrados);
  }, [filtrarMarca, filtrarPrecio]);

  return (
    <div className="min-h-screen flex flex-row">
      <Asidebar
        filtrarMarca={filtrarMarca}
        filtrarPrecio={filtrarPrecio}
        setFiltrarMarca={setFiltrarMarca}
        setFiltrarPrecio={setFiltrarPrecio}
      />
      <Catalogo autos={autos} />
    </div>
  );
};

export default Catalog;
