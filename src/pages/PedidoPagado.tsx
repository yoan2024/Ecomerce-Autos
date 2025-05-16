import React from "react";
import { Link } from "react-router-dom";
import { usePed } from "../context/pedPagado";

const PedidoPagado = () => {
  const { pedido, setPedido } = usePed();
  const usuario = pedido[0];
  return (
    <div className="flex flex-col w-full min-h-screen gap-5 text-white bg-slate-700 items-center justify-center">
      <div className="bg-green-600 flex flex-col gap-3 ">
        <div className="text-center text-2xl">
          ¡Gracias por tu compra, {usuario.name} ! 🎉
        </div>
        <div className="flex flex-col">
          Tu pedido ha sido recibido correctamente y está en proceso de
          confirmación.
        </div>
        <div>📦 Número de pedido: {usuario.pedido} </div>
        <div>📅 Fecha: {usuario.fecha} </div>
        <div>🛠 Estado: {usuario.estado} </div>
      </div>
      <div>En breve recibirás un correo con los detalles de tu compra.</div>
      <div>
        Puedes consultar el estado de tu pedido en tu perfil en la sección-
        <Link to="/perfilUser/#pedidos">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Ver mis pedidos
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PedidoPagado;
