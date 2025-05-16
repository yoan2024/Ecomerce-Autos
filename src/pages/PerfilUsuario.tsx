import Pedidos from "../components/Pedidos/Pedidos";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useUsuario } from "../context/loginContext";
import { useNavigate } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";

const PerfilUsuario = () => {
  const { carrito, setCarrito } = useCarrito();
  const navigate = useNavigate();
  const { usuario, setUsuario } = useUsuario();
  const pedidosRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const currentUser = usuario[0];

  //
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [telefono, setTelefono] = useState("");
  const [direction, setDirections] = useState("");
  const [disable, setDisable] = useState<string[]>([]);

  useEffect(() => {
    if (location.hash === "#pedidos") {
      pedidosRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const handleLogout = () => {
    const userEmail = usuario[0]?.email;
    setUsuario([]);
    if (userEmail) {
      localStorage.removeItem(`carrito-${userEmail}`);
    }
    // Opcional: resetear carrito temporalmente
    setCarrito([]); // <--- asegúrate de importar `useCarrito`
    localStorage.removeItem("cooky");
    navigate("/");
  };

  const handleClick = (e) => {
    const target = e;
    setDisable((previos) => [...previos, e]);
  };

  const handleGuardar = (e) => {
    const getitems = localStorage.getItem("usuarios");

    if (e === "name") {
      if (getitems) {
        const items = JSON.parse(getitems);

        const modificarName = items.map((c) => {
          if (c.email === currentUser.email) {
            return { ...c, name: name };
          }
          return c;
        });

        localStorage.setItem("usuarios", JSON.stringify(modificarName));
        const setcooky = [
          {
            name: name,
            email: currentUser.email,
            password: currentUser.password,
          },
        ];

        setUsuario(setcooky);
        const eliminarDisable = disable.filter((d) => d !== "name");
        setDisable(eliminarDisable);
      }
    } else if (e === "email") {
      if (getitems) {
        const items = JSON.parse(getitems);
        const ModificarEmail = items.map((c) => {
          if (c.email === currentUser.email) {
            return { ...c, email: email };
          }
          return c;
        });

        localStorage.setItem("usuarios", JSON.stringify(ModificarEmail));

        const setcooky = [
          {
            name: currentUser.name,
            email: email,
            password: currentUser.password,
          },
        ];

        setUsuario(setcooky);
        const eliminarDisable = disable.filter((d) => d !== "email");
        setDisable(eliminarDisable);
      }
    } else if (e === "telefono") {
      if (getitems) {
        const items = JSON.parse(getitems);

        const modificarName = items.map((c) => {
          if (c.email === currentUser.email) {
            return { ...c, telefono: telefono };
          }
          return c;
        });

        localStorage.setItem("usuarios", JSON.stringify(modificarName));
        const setcooky = [
          {
            name: currentUser.name,
            email: currentUser.email,
            password: currentUser.password,
            telefono: telefono,
            direction: currentUser.direction,
          },
        ];

        setUsuario(setcooky);
        const eliminarDisable = disable.filter((d) => d !== "telefono");
        setDisable(eliminarDisable);
      }
    } else if (e === "direction") {
    }
  };

  return (
    <div className="bg-slate-700 min-h-screen flex flex-row justify-center items-start">
      <div className="flex flex-col items-center">
        <section className="mt-2  flex flex-col items-start gap-5 ">
          <div className="text-3xl text-white font-medium text-center">
            INFORMACION PERSONAL
          </div>
          <div className="flex flex-row mt-5 justify-center">
            <div className="w-48 h-48">
              <img
                src="/images/perfilFake/avatar.png"
                alt=""
                className="w-full h-full cursor-pointer hover:bg-white/50  rounded-full"
              />
            </div>
          </div>
          {disable.includes("name") && (
            <div className="flex justify-center items-center felx-row gap-2">
              <div>
                <label htmlFor="name">name: </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-xl"
                />
              </div>
              <div>
                <button
                  className=" p-1 rounded-xl bg-red-700"
                  onClick={() => handleGuardar("name")}
                >
                  guardar
                </button>
              </div>
            </div>
          )}

          {!disable.includes("name") && (
            <div className="flex flex-row gap-2 items-center">
              <div className=" text-white/80">Nombre Completo :</div>
              <div className="flex flex-row items-center gap-2">
                <div className="text-white/40">{currentUser.name} </div>
                <div
                  className="w-8 h-8  group"
                  onClick={() => handleClick("name")}
                >
                  <img
                    src="/images/icons/lapiz.png"
                    alt="lapiz"
                    className="w-full h-full cursor-pointer"
                  />
                  <div className="w-fit bottom-full text-sm text-blue-300 transition-opacity opacity-0 duration-200 group-hover:opacity-100 ">
                    Editar
                  </div>
                </div>
              </div>
            </div>
          )}

          {disable.includes("email") && (
            <div className="flex justify-center items-center felx-row gap-2">
              <div>
                <label htmlFor="email">email:</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-xl"
                />
              </div>
              <div>
                <button
                  className=" p-1 rounded-xl bg-red-700"
                  onClick={() => handleGuardar("email")}
                >
                  guardar
                </button>
              </div>
            </div>
          )}
          {!disable.includes("email") && (
            <div className="flex flex-row  gap-2 items-center">
              <div className=" text-white/80">Correo :</div>
              <div className="flex flex-row items-center gap-2">
                <div className="text-white/40">{currentUser.email}</div>
                <div
                  className="w-8 h-8  group"
                  onClick={() => handleClick("email")}
                >
                  <img
                    src="/images/icons/lapiz.png"
                    alt="lapiz"
                    className="w-full h-full cursor-pointer"
                  />
                  <div className="w-fit bottom-full text-sm text-blue-300 transition-opacity opacity-0 duration-200 group-hover:opacity-100 ">
                    Editar
                  </div>
                </div>
              </div>
            </div>
          )}
          {disable.includes("telefono") && (
            <div className="flex justify-center items-center felx-row gap-2">
              <div>
                <label htmlFor="telefono">telefono:</label>
                <input
                  type="text"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  className="rounded-xl"
                />
              </div>
              <div>
                <button
                  className=" p-1 rounded-xl bg-red-700"
                  onClick={() => handleGuardar("telefono")}
                >
                  guardar
                </button>
              </div>
            </div>
          )}
          {!disable.includes("telefono") && (
            <div className="flex flex-row  gap-2 items-center">
              <div className=" text-white/80">Telefono :</div>
              <div className="flex flex-row items-center gap-2">
                <div className="text-white/40">
                  {currentUser.telefono
                    ? "Sin con firmar"
                    : currentUser.telefono}{" "}
                </div>
                <div
                  className="w-8 h-8  group"
                  onClick={() => handleClick("telefono")}
                >
                  <img
                    src="/images/icons/lapiz.png"
                    alt="lapiz"
                    className="w-full h-full cursor-pointer"
                  />
                  <div className="w-fit bottom-full text-sm text-blue-300 transition-opacity opacity-0 duration-200 group-hover:opacity-100 ">
                    Editar
                  </div>
                </div>
              </div>
            </div>
          )}
          {disable.includes("direction") && (
            <div className="flex justify-center items-center felx-row gap-2">
              <div>
                <label htmlFor="direction">Direction</label>
                <input
                  type="text"
                  value={direction}
                  onChange={(e) => setDirections(e.target.value)}
                  className="rounded-xl"
                />
              </div>
              <div>
                <button
                  className=" p-1 rounded-xl bg-red-700"
                  onClick={() => handleGuardar("direction")}
                >
                  guardar
                </button>
              </div>
            </div>
          )}
          {!disable.includes("direction") && (
            <div className="flex flex-row  gap-2 items-center">
              <div className=" text-white/80">
                Dirrecion de envio principal :
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="text-white/40">
                  {currentUser.direction
                    ? "Sin confirmar"
                    : currentUser.direction}{" "}
                </div>
                <div
                  className="w-8 h-8  group"
                  onClick={() => handleClick("direction")}
                >
                  <img
                    src="/images/icons/lapiz.png"
                    alt="lapiz"
                    className="w-full h-full cursor-pointer"
                  />
                  <div className="w-fit bottom-full text-sm text-blue-300 transition-opacity opacity-0 duration-200 group-hover:opacity-100 ">
                    Editar
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
        <section className="mt-32" ref={pedidosRef} id="pedidos">
          <div className="text-2xl text-white font-medium text-center">
            Pedidos
          </div>
          <Pedidos />
        </section>
        <button
          onClick={handleLogout}
          className="mt-5 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default PerfilUsuario;
