import { useState } from "react";
import ItemPedido from "./ItemPedido";
import React from "react";

const Pedidos = () => {
  const [pedidos, setPedidos] = useState(() => {
    const ped = localStorage.getItem("pedidos");
    const isthat = ped ? JSON.parse(ped) : [];
    return isthat;
  });

  //numero de pedido
  //fecha
  //imagenp
  //auto
  //version
  //estado
  //total
  console.log("estooo es logico", pedidos);
  return (
    <>
      {pedidos.map((p, index) => {
        return (
          <table className="table-auto border-collapse mt-3 w-full" key={p.id}>
            <thead>
              <tr>
                <th className="border px-4 py-2">Número de Pedido</th>
                <th className="border px-4 py-2">Fecha</th>
                <th className="border px-4 py-2">Imagen</th>
                <th className="border px-4 py-2">Auto</th>
                <th className="border px-4 py-2">Versión</th>
                <th className="border px-4 py-2">Estado</th>
                <th className="border px-4 py-2">Total</th>
              </tr>
            </thead>

            <tbody className="text-center">
              <ItemPedido p={p} />
              <tr>
                <td className="font-bold text-start">TOTAL:</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="font-bold">{p.total} </td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </>
  );
};

export default Pedidos;

const notin = [
  /*
   <img
            src="/images/ferrari/ferrari-296-gtb.jpg"
            alt=""
            className="w-full h-full"
          />*/
];
