import React from "react";
import { useState } from "react";
import { LoginSesion } from "../utils/Login";
import { useNavigate } from "react-router-dom";
import { useUsuario } from "../context/loginContext";

const Login = () => {
  const { usuario, setUsuario } = useUsuario();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const handleRegister = () => {
    navigate("/signUp");
  };

  const validar = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errores: { email?: string; password?: string } = {};
    if (!emailRegex.test(email)) {
      errores.email = "el correo no es valido";
    }
    if (password.length < 8) {
      errores.password = "contraseña no valida";
    }
    setErrors(errores);
    return Object.keys(errores).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validar()) {
      const verifiUser = LoginSesion(email, password, usuario, setUsuario);

      if (verifiUser?.success) {
        console.log(verifiUser?.message);
        navigate("/");
      } else {
        console.log("hubo un error", verifiUser?.message);
      }
    } else {
      console.log("no logeado exitosamente", errors);
    }
  };

  return (
    <div className="bg-slate-700 min-h-screen flex flex-row justify-center items-center">
      <div className="bg-slate-900 max-w-80 flex flex-col justify-around text-center">
        <h1 className="text-3xl text-white mb-20">
          INICIA SESION Y DISFRUTA DE UNA EXPERIENCIA INOLVIDABLE
        </h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="text-white">
            Correo :
          </label>
          <input
            id="email"
            type="email"
            className=" mb-5 rounded-2xl w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div>{errors.email} </div>
          <label htmlFor="password" className="text-white">
            Contraseña :
          </label>
          <input
            type="password"
            id="password"
            className="rounded-2xl w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>{errors.password} </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-2xl mt-6 w-full"
          >
            Iniciar sesión
          </button>
        </form>
        <div className="text-white mt-3">
          no tienes cuenta aun? registrate aqui..{" "}
          <span className="font-bold cursor-pointer" onClick={handleRegister}>
            Registrarse
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
