import React from "react";
type Props = {
  subTotal: number;
  impuestos: number;
  descuentos: number;
  totalCompra: number;
};

const handlePagarPedido = () => {};

const ResumenDeCompra = ({
  subTotal,
  impuestos,
  descuentos,
  totalCompra,
}: Props) => (
  <div className="flex flex-col gap-5 self-end ">
    <div>RESUMEN PEDIDO:</div>
    <div>
      SUBTOTAL:{" "}
      {subTotal.toLocaleString("en-US", { style: "currency", currency: "USD" })}
    </div>
    <div>
      IMPUESTOS:{" "}
      {impuestos.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      })}
    </div>
    <div>
      DESCUENTO:{" "}
      {descuentos.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      })}
    </div>
    <div className="bg-slate-600 mb-2">
      TOTAL:{" "}
      {totalCompra.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      })}{" "}
      USD
    </div>
  </div>
);

export default ResumenDeCompra;
