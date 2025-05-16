export const LoginSesion = (
  email: string,
  password: string,
  usuario,
  setUsusario
) => {
  console.log("entro ala sesion");
  const Curenusuario = { email, password };
  const usuarios = localStorage.getItem("usuarios");
  const parse = usuarios ? JSON.parse(usuarios) : [];
  const findUser = parse.find(
    (u) => u.password === password && u.email === email
  );
  if (findUser) {
    const usercurrent = [{ name: findUser.name, email, password }];
    setUsusario(usercurrent);
    localStorage.setItem("cooky", JSON.stringify(usercurrent));
    return { success: true, message: "Se ingreso correctamente" };
  }
  if (!findUser) {
    return { success: false, message: "No se incontro el ususario" };
  }
};
