import React, { useEffect, useState, version } from "react";
import { useCarrito } from "../context/CarritoContext";
import { Link } from "react-router-dom";
import { handleCarrito } from "../utils/utils";
import cars from "../data/cars.json";
import SiHayCarros from "../components/Cart/SiHayCarros";
import NoHayCarros from "../components/Cart/NoHayCarros";
import { calcularResumen } from "../utils/calculos";
import ResumenDeCompra from "../components/Cart/ResumenDeCompra";
import { useUsuario } from "../context/loginContext";
import { useNavigate } from "react-router-dom";
import { usePed } from "../context/pedPagado";
import { Carrito } from "../utils/utils";

const Cart = () => {
  const { pedido, setPedido } = usePed();
  const navegate = useNavigate();
  const { usuario, setUsuario } = useUsuario();
  const [subTotal, setSubTotal] = useState(0);
  const [impuestos, setImpuestos] = useState(0);
  const [descuentos, setDescuentos] = useState(0);
  const [totalCompra, setTotalCompra] = useState(0);
  const { carrito, setCarrito } = useCarrito();

  const total = (cantidad, precio) => {
    const valorCar = parseInt(precio);
    const total = cantidad * valorCar;
    return total;
  };
  const handleOnclick = (id: string, type: string) => {
    const cars = [...carrito];
    let currenCarrito = cars.find((c) => c.id === id);
    if (!currenCarrito) return;
    let newArrayCars;
    if (type === "restar" && currenCarrito.cantidad === 1) {
      newArrayCars = cars.filter((c) => c.id !== id);
      setCarrito(newArrayCars);
      return;
    }
    newArrayCars = cars.map((c) => {
      if (c.id === id) {
        if (type === "aumentar") {
          return { ...c, cantidad: c.cantidad + 1 };
        } else {
          return { ...c, cantidad: c.cantidad - 1 };
        }
      } else {
        return c;
      }
    });

    setCarrito(newArrayCars);
  };

  const orderId = `ORD-${Date.now()}`;

  useEffect(() => {
    const { subtotal, impuestos, descuento, total } = calcularResumen(carrito);
    setSubTotal(subtotal);
    setImpuestos(impuestos);
    setDescuentos(descuento);
    setTotalCompra(total);
  }, [carrito]);

  const generarIdPedido = () => {
    const fecha = new Date();
    const año = String(fecha.getFullYear());
    const mes = String(fecha.getMonth() + 1).padStart(2, "0");
    const dia = String(fecha.getDate()).padStart(2, "0");
    const hora = String(fecha.getHours()).padStart(2, "0");
    const minutos = String(fecha.getSeconds()).padStart(2, "0");
    const seg = String(fecha.getSeconds()).padStart(2, "0");
    const number_random = Math.floor(Math.random() * 1000);
    const timeUnic = `${año}${mes}${dia}${hora}${minutos}${seg}`;
    return `PED-${timeUnic}-${number_random}`;
  };

  const handlePagar = () => {
    let total = 0;
    const carros = [...carrito];
    const user = usuario[0];
    const idPedido = generarIdPedido();
    console.log(idPedido);
    const newPedido = carros.map((c, index) => {
      total += c.cantidad * parseInt(c.price);
      return {
        id: `car${String(index + 1).padStart(2, "0")}`,
        image: c.image,
        auto: c.brand + " " + c.model,
        version: c.version,
        estado: "pendiente",
        totalItems: (c.cantidad * parseInt(c.price)).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        }),
      };
    });
    let fecha = String(new Date().toLocaleDateString("es-Es"));
    const userPedido = [
      {
        id: idPedido,
        fecha,
        comprador: { name: user.name, email: user.email },
        items: newPedido,
        total:
          totalCompra.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          }) + " USD",
      },
    ];

    localStorage.setItem("pedidos", JSON.stringify(userPedido));
    setCarrito([]);
    localStorage.removeItem("carros");
    navegate("/pedpagado");

    setPedido([
      { name: user.name, pedido: idPedido, fecha, estado: "pendiente" },
    ]);
  };

  //numero de pedido
  // fecha
  //imagen
  //auto : brand + model
  // version
  //estado
  //total para cada item
  //total de todos los items

  return (
    <div className="bg-slate-700 min-h-screen flex flex-row justify-center items-center">
      {carrito.length === 0 ? (
        <NoHayCarros />
      ) : (
        <>
          <>
            <div className="text-white">
              <div className="flex flex-col">
                <h2 className="mt-3 text-center mb-2 ">
                  LISTA DE PRODUCTOS AGREGADOS
                </h2>
                <div className="flex gap-4 flex-row items-center">
                  <div className="overflow-x-auto w-full">
                    <table className="text-center w-full bg-slate-800">
                      <thead className="bg-slate-300">
                        <tr>
                          <th className="p-2">AUTO</th>
                          <th className="p-2">Nombre</th>
                          <th className="p-2">Precio unitario</th>
                          <th className="p-2">Cantidad</th>
                          <th className="p-2">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {carrito.map((c) => (
                          <SiHayCarros
                            key={c.id}
                            c={c}
                            handleOnclick={handleOnclick}
                          />
                        ))}
                      </tbody>
                    </table>
                    <div className="bg-green-500 rounded-full w-fit p-1 mt-4">
                      <Link to="/catalog">Continuar comprando</Link>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <ResumenDeCompra
                      impuestos={impuestos}
                      subTotal={subTotal}
                      descuentos={descuentos}
                      totalCompra={totalCompra}
                    />
                    <div>
                      <button
                        className="bg-red-400 rounded-full p-2 text-sm"
                        onClick={handlePagar}
                      >
                        PAGAR
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </>
      )}
    </div>
  );
};

export default Cart;

/*


*/
