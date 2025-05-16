import React from "react";
import { useState } from "react";
import { handleSignUp } from "../utils/SignUp";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navegate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
  }>({});

  const validar = () => {
    const errores: { name?: string; email?: string; password?: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      errores.email = "correo no es valido";
    }
    if (name.length < 4) {
      errores.name = "Nombre muy corto";
    } else if (name.length > 50) {
      errores.name = "Nombre muy largo";
    }

    if (password.length < 8) {
      errores.password = "Contraseña muy corta minimo 8 caracteres";
    } else if (password.length > 15) {
      errores.password = "Contraseña muy larga";
    }
    setErrors(errores);
    return Object.keys(errores).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validar()) {
      const signUp = handleSignUp(email, password, name);
      if (signUp.sucess) {
        console.log(
          "exitosamente creado el ususario por favor inica secios",
          signUp.message
        );

        navegate("/login");
      } else {
        console.log(signUp.message);
      }
    } else {
      console.log("no registrado con exito");
    }
  };
  const handleCrearCuenta = () => {};
  console.log(localStorage.getItem("usuarios"));
  return (
    <div className="bg-slate-700 min-h-screen flex flex-row justify-center items-center">
      <div className="bg-slate-900 max-w-80 flex flex-col justify-around px-2 py-1">
        <h1 className="text-3xl text-white mb-20 text-center">
          INICIA SESION Y DISFRUTA DE UNA EXPERIENCIA INOLVIDABLE
        </h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="text-white">
            Name :
          </label>
          <input
            id="name"
            type="text"
            className=" rounded-2xl w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="text-red-600">{errors.name} </div>

          <label htmlFor="email" className="text-white">
            Email :
          </label>
          <input
            type="email"
            id="email"
            className="rounded-2xl w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="text-red-600">{errors.email} </div>
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
          <div className="text-red-600">{errors.password} </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-2xl mt-6 w-full"
            onClick={handleCrearCuenta}
          >
            Crear Cuenta
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
