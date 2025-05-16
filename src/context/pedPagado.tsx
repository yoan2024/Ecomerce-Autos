import React, { useState } from "react";
import { useContext, createContext } from "react";

type pedido = {
  name: string;
  pedido: string;
  fecha: string;
  estado: string;
};

type pedidoType = {
  pedido: pedido[];
  setPedido: React.Dispatch<React.SetStateAction<pedido[]>>;
};

const contextPedido = createContext<pedidoType | undefined>(undefined);

export const PedProvider = ({ children }: { children: React.ReactNode }) => {
  const [pedido, setPedido] = useState<pedido[]>([]);

  return (
    <>
      <contextPedido.Provider value={{ pedido, setPedido }}>
        {" "}
        {children}
      </contextPedido.Provider>
    </>
  );
};

export const usePed = () => {
  const context = useContext(contextPedido);
  if (!context) {
    throw new Error("usePed debe usarse dentro de un pedProvider");
  }
  return context;
};
