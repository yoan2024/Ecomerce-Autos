import React from "react";

//numero de pedido
//fecha
//imagen
//auto
//version
//estado
//total

const ItemPedido = ({ p }) => {
  const items = p.items;
  console.log(items);
  return (
    <>
      {items.map((i) => {
        return (
          <tr className=" bg-slate-600">
            <td>{p.id}</td>
            <td>{p.fecha}</td>
            <td>
              <img src={i.image} alt="ferrai" className="w-20 h-20" />{" "}
            </td>
            <td>{i.auto} </td>
            <td> {i.version} </td>
            <td> {i.estado} </td>
            <td> {i.totalItems} </td>
          </tr>
        );
      })}
    </>
  );
};

export default ItemPedido;
