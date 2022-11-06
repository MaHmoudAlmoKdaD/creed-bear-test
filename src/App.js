import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { useContext } from "react";
import { Context } from "./context/Context";
import SingleUser from "./pages/single/SingleUser";

function App() {
  const { user } = useContext(Context);
  return (
    <Routes>
      <Route path="/login" element={user ? <Home /> : <Login />} />
      <Route path="/" element={user ? <Home /> : <Login />} />
      <Route path="/user/:id" element={user ? <SingleUser /> : <Login />} />
    </Routes>
  );
}

export default App;
