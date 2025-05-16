import { CarItem } from "../types/CarItem";

export const calcularResumen = (carrito: CarItem[]) => {
  let subtotal = 0;
  carrito.forEach((item) => {
    subtotal += (item.cantidad || 1) * parseFloat(item.price);
  });
  const impuestos = subtotal * 0.15;
  const descuento = subtotal > 1000 ? 50 : 0;
  const total = subtotal + impuestos - descuento;

  return { subtotal, impuestos, descuento, total };
};
