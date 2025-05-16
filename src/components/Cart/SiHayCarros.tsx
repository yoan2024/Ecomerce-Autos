import React from "react";

const SiHayCarros = ({ c, handleOnclick }) => {
  return (
    <tr key={c.id} className="border-t-2 border-black">
      <td className="w-24 h-20">
        <img src={c.image} alt={c.brand} className="w-full h-full" />
      </td>
      <td className="bg-slate-500 border-solid border-r-2 border-r-black">
        {c.brand + " " + c.model + " " + c.version}
      </td>
      <td className="bg-slate-500 border-solid border-r-2 border-r-black">
        ${c.price}
      </td>
      <td className="bg-slate-500 border-solid border-r-2 border-r-black">
        <div className="flex items-center justify-center gap-2">
          <button
            className="bg-green-600 w-6 rounded-full"
            onClick={() => handleOnclick(c.id, "aumentar")}
          >
            +
          </button>
          <span>{c.cantidad}</span>
          <button
            className="bg-red-600 w-6 rounded-full"
            onClick={() => handleOnclick(c.id, "restar")}
          >
            -
          </button>
        </div>
      </td>
      <td className="bg-slate-500 border-solid border-r-2 border-r-black">
        ${c.cantidad * parseInt(c.price)}
      </td>
    </tr>
  );
};

export default SiHayCarros;
