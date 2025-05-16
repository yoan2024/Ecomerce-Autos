import { CarItem } from "../../types/CarItem";
import React from "react";

type Props = {
  item: CarItem;
  onChange: (id: string, type: "aumentar" | "restar") => void;
};

const ItemCarrito = ({ item, onChange }: Props) => (
  <tr key={item.id} className="border-t-2 border-black">
    <td>
      <img src={item.image} alt={item.name} className="w-36 h-20" />
    </td>
    <td className="bg-slate-500 border-r-2 border-black">{item.name}</td>
    <td className="bg-slate-500 border-r-2 border-black">${item.price}</td>
    <td className="bg-slate-500 border-r-2 border-black">
      <div className="flex items-center justify-center gap-2">
        <button
          className="bg-green-600 w-6 rounded-full"
          onClick={() => onChange(item.id, "aumentar")}
        >
          +
        </button>
        <span>{item.cantidad}</span>
        <button
          className="bg-red-600 w-6 rounded-full"
          onClick={() => onChange(item.id, "restar")}
        >
          -
        </button>
      </div>
    </td>
    <td className="bg-slate-500 border-r-2 border-black">
      ${parseInt(item.price) * item.cantidad}
    </td>
  </tr>
);

export default ItemCarrito;
