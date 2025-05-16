import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HoverProvider } from "./context/HoverContext";
import { CarritoProvider } from "./context/CarritoContext";
import { UsuarioProvider } from "./context/loginContext";
import { PedProvider } from "./context/pedPagado";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PedProvider>
      <UsuarioProvider>
        <HoverProvider>
          <CarritoProvider>
            <App />
          </CarritoProvider>
        </HoverProvider>
      </UsuarioProvider>
    </PedProvider>
  </React.StrictMode>
);
