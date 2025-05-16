import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import CarDetails from "./pages/CarDetails";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PerfilUsuario from "./pages/PerfilUsuario";
import PedidoPagado from "./pages/PedidoPagado";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/pedpagado" element={<PedidoPagado />} />
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cars/:id" element={<CarDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/perfilUser" element={<PerfilUsuario />} />
      </Routes>
    </Router>
  );
}

export default App;
