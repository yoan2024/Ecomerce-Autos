import { useState } from "react";

export const handleMouse = (id: string, type: string, setHover, hover) => {
  const carsHovered = [...hover];
  if (type === "onMouseOver" && !carsHovered.includes(id)) {
    setHover((previos) => [...previos, id]);
  } else {
    const EliminarHover = carsHovered.filter((h) => h !== id);
    setHover(EliminarHover);
  }
};

export const incontrarHoverCar = (id: string, hover) => {
  const hoverCar = hover.some((paciente) => paciente === id);
  if (hoverCar) return true;
  if (!hoverCar) return false;
};

export const handleCarrito = (id, carrito, setCarrito, autos, user) => {
  let carritos = [...carrito];
  const finId = autos.find((c) => c.id === id);
  if (!finId) return;

  const verifiIgualCar = carritos.some((c) => c.id === id);

  if (verifiIgualCar) {
    const newArray = carritos.map((c) =>
      c.id === id ? { ...c, cantidad: c.cantidad + 1 } : c
    );
    setCarrito(newArray);
  } else {
    const setNewArray = {
      ...finId,
      cantidad: 1,
      email: user?.email || "", // si no hay usuario, poner string vacío
    };
    setCarrito((previos) => [...previos, setNewArray]);
  }
};

export type Carrito = {
  id: string;
  cantidad: number;
  name: string;
  version: string;
  model: string;
  email: string;
  brand: string;
  price: string;
  estado: string;
  type: string;
  year: string;
  horsepower: string;
  image: string;
  description: string;
};

export const leerDesdeLocalStorage = (clave: string): Carrito[] => {
  let item = localStorage.getItem(clave);
  if (!item) {
    console.log("no hay iten en leerlocalstorage");
    return [];
  }

  const array = JSON.parse(item);
  return array as Carrito[];
};
