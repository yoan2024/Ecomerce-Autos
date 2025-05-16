import { Link } from "react-router-dom";
import { useUsuario } from "../context/loginContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navegate = useNavigate();
  const { usuario, setUsuario } = useUsuario();
  const currentUser = usuario[0];
  const isThat = currentUser ? currentUser.name : "";

  const handleClick = () => {
    if (isThat) {
      navegate("/perfilUser");
    } else {
      navegate("/login");
    }
  };
  return (
    <nav className="p-4 bg-slate-900 text-white flex justify-between items-center">
      <div
        className="flex flex-row items-center gap-3 hover:bg-slate-500 cursor-pointer p-1 rounded-2xl"
        onClick={handleClick}
      >
        <div className="w-10 h-10">
          <img
            src="/images/perfilFake/avatar.png"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div>{isThat}</div>
      </div>
      <div className="space-x-4">
        <Link to="/">Inicio</Link>
        <Link to="/catalog">Catálogo</Link>
        <Link to="/cart">Carrito</Link>
      </div>
    </nav>
  );
}
