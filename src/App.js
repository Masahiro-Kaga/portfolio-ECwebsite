import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import AppNavBar from "./components/AppNavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddProduct from "./pages/AddProduct";
import EnableProduct from "./pages/EnableProduct";
import DisableProduct from "./pages/DisableProduct";
import ViewActiveProducts from "./pages/ViewActiveProducts";
import AdminDashboard from "./pages/AdminDashboard";
import Logout from "./pages/Logout";
import ErrorPage from "./pages/ErrorPage";
import { useState } from "react";
import { UserProvider } from "./userContext";
import { useEffect } from "react";
import UpdateProduct from "./pages/UpdateProduct";
import Order from "./pages/Order";

function App() {
  const [user, setUser] = useState({
    id: null,
    isAdmin: null,
  });
  const [order, setOrder] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {

    fetch("http://localhost:4001/users/getUserDetails", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser({
          id: data._id,
          isAdmin: data.isAdmin,
        });
      });

  }, []);

  return (
    <UserProvider
      value={{
        user: user,
        setUser: setUser,
        order: order,
        setOrder: setOrder,
        products: products,
        setProducts: setProducts,
      }}
    >
      <Router>
        <AppNavBar></AppNavBar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/addProduct" element={<AddProduct />}></Route>
          <Route
            path="/updateProduct/:productId"
            element={<UpdateProduct />}
          ></Route>
          <Route path="/enableProduct" element={<EnableProduct />}></Route>
          <Route path="/disableProduct" element={<DisableProduct />}></Route>
          <Route
            path="/viewActiveProducts"
            element={<ViewActiveProducts />}
          ></Route>

          <Route path="/order" element={<Order />}></Route>
          <Route path="/adminDashboard" element={<AdminDashboard />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
  