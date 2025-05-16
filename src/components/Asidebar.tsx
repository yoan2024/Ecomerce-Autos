import React from "react";

const Asidebar = ({
  filtrarMarca,
  filtrarPrecio,
  setFiltrarMarca,
  setFiltrarPrecio,
}) => {
  return (
    <div className="w-40 text-white bg-slate-800">
      <h1>FILTRA TU CARRO AQUI...</h1>

      <h2 className="mt-5 mb-3 font-extrabold">Filtrar por marca</h2>
      <label htmlFor="Ferrari">Ferrari</label>
      <input
        type="checkbox"
        checked={filtrarMarca === "Ferrari"}
        name="Ferrari"
        className="ml-2"
        value="Ferrari"
        onChange={(e) => setFiltrarMarca(e.target.value)}
      />
      <label htmlFor="Lamborghini">Lamborghini</label>
      <input
        className="ml-2"
        type="checkbox"
        name="Lamborghini"
        value={"Lamborghini"}
        checked={filtrarMarca === "Lamborghini"}
        onChange={(e) => setFiltrarMarca(e.target.value)}
      />

      <label htmlFor="Porsche">Porsche</label>
      <input
        className="ml-2"
        type="checkbox"
        name="Porsche"
        value={"Porsche"}
        checked={filtrarMarca === "Porsche"}
        onChange={(e) => setFiltrarMarca(e.target.value)}
      />

      <h2 className="mt-5 mb-3 font-extrabold">Filtrar por precio</h2>
      <label htmlFor="low">Low</label>
      <input
        type="radio"
        name="low"
        id="low"
        className="ml-2"
        value="Low"
        checked={filtrarPrecio === "Low"}
        onChange={(e) => setFiltrarPrecio(e.target.value)}
      />
      <br />
      <label htmlFor="high">High</label>
      <input
        className="ml-2"
        id="high"
        type="radio"
        checked={filtrarPrecio === "High"}
        name="high"
        value="High"
        onChange={(e) => setFiltrarPrecio(e.target.value)}
      />
    </div>
  );
};

export default Asidebar;
