import { useContext, createContext, Children, useEffect } from "react";
import { useState } from "react";
import React from "react";

interface usuarioType {
  name: string;
  email: string;
  password: string;
  telefono: string;
  direction: string;
}

type CarContextType = {
  usuario: usuarioType[];
  setUsuario: React.Dispatch<React.SetStateAction<usuarioType[]>>;
};

const UsuarioContext = createContext<CarContextType | undefined>(undefined);

export const UsuarioProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [usuario, setUsuario] = useState<usuarioType[]>(() => {
    const cooky = localStorage.getItem("cooky");
    const isThat = cooky ? JSON.parse(cooky) : [];
    return isThat;
  });

  useEffect(() => {
    localStorage.setItem("cooky", JSON.stringify(usuario));
  }, [usuario]);

  return (
    <UsuarioContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export const useUsuario = () => {
  const context = useContext(UsuarioContext);
  if (!context) {
    throw new Error("useUsuario debe usarse dentro de <UsuarioProvider>");
  }
  return context;
};
