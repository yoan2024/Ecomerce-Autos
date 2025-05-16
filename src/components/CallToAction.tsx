import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="mt-6 text-center w-full flex flex-col gap-5">
      <div className="bg-slate-500 mt-3">ENVIO A TODA EUROPA</div>
      <div className="bg-slate-500 mt-3">GARANTIA DE FABRICA 2 AÑOS</div>
      <div className="bg-slate-500 mt-3">FINANCIAMIENTO PERSONALIZADO</div>
      <div className="bg-slate-500 mt-3">
        “Descubre tu próximo auto de ensueño. Haz clic abajo y acelera tu
        experiencia
      </div>
      <Link to="/catalog" className="bg-red-700">
        Explorar Autos
      </Link>
    </div>
  );
};

export default CallToAction;
