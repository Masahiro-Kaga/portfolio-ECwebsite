import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from "./components/AddProduct";
import AppNavBar from "./components/AppNavBar";
import UpdateProduct from "./components/UpdateProduct";
import AdminDashboard from "./pages/AdminDashboard";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Order from "./pages/Order";
import Register from "./pages/Register";
import SuccessOrder from "./pages/SuccessOrder";
import TestPage from "./pages/TestPage";
import ViewActiveProducts from "./pages/ViewActiveProducts";
import { UserProvider } from "./userContext";

function App() {
  const [user, setUser] = useState({
    id: null,
    isAdmin: null,
  });
  const [order, setOrder] = useState([]);
  const unsetUser = () =>{
    localStorage.clear();
  }
  useEffect(() => {

    fetch("https://floating-stream-65303.herokuapp.com/users/getUserDetails", {
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
        unsetUser:unsetUser
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
          
          <Route
            path="/viewActiveProducts"
            element={<ViewActiveProducts />}
          ></Route>

          <Route path="/order" element={<Order />}></Route>
          <Route path="/adminDashboard" element={<AdminDashboard />}></Route>
          <Route path="/successOrder" element={<SuccessOrder />}></Route>

          <Route path="/testpage" element={<TestPage />}></Route>

          <Route path="/*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
