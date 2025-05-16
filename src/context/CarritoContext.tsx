import { useEffect, useState } from "react";
import React from "react";
import { useContext, createContext } from "react";
import { leerDesdeLocalStorage } from "../utils/utils";
import { useUsuario } from "./loginContext";

type Carrito = {
  id: string;
  cantidad: number;
  name: string;
  version: string;
  model: string;
  brand: string;
  price: string;
  estado: string;
  email: string;
  type: string;
  year: string;
  horsepower: string;
  image: string;
  description: string;
};

type CarContextType = {
  carrito: Carrito[];
  setCarrito: React.Dispatch<React.SetStateAction<Carrito[]>>;
};

const CarritoContext = createContext<CarContextType | undefined>(undefined);

export const CarritoProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { usuario, setUsuario } = useUsuario();
  const currentUser = usuario[0]; // puede ser undefined si no hay logeado
  const userEmail = currentUser?.email;

  const [carrito, setCarrito] = useState<Carrito[]>(() => {
    if (userEmail) {
      const guardado = localStorage.getItem(`carrito-${userEmail}`);
      return guardado ? JSON.parse(guardado) : [];
    } else {
      // carrito temporal (solo en memoria)
      return [];
    }
  }); // cada vez que cambie el carrito o el usuario, guarda
  useEffect(() => {
    if (userEmail) {
      localStorage.setItem(`carrito-${userEmail}`, JSON.stringify(carrito));
    }
    // Si no hay usuario, no se guarda nada (carrito invitado)
  }, [carrito, userEmail]);

  return (
    <CarritoContext.Provider value={{ carrito, setCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  const context = useContext(CarritoContext);
  if (!context) throw new Error("useHover must be used inside HoverProvider");
  return context;
};
