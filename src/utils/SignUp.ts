export const handleSignUp = (email: string, password: string, name: string) => {
  const usuarios = localStorage.getItem("usuarios");
  const cliente = { email, password, name };

  let users: any[] = [];

  try {
    users = usuarios ? JSON.parse(usuarios) : [];
    if (!Array.isArray(users)) throw new Error();
  } catch {
    // Si por alguna razón el JSON estaba mal o no es un array, reiniciamos
    users = [];
  }

  const findUser = users.find((u) => u.email === email);
  if (findUser) {
    return { sucess: false, message: "El email ya existe" };
  }

  users.push(cliente);
  localStorage.setItem("usuarios", JSON.stringify(users));

  return { sucess: true, message: "Usuario registrado exitosamente" };
};
