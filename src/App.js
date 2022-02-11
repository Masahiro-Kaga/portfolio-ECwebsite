import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import AppNavBar from './components/AppNavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AddProduct from './pages/AddProduct';
import EnableProduct from './pages/EnableProduct';
import DisableProduct from './pages/DisableProduct';
import ViewActiveProducts from './pages/ViewActiveProducts';
import AdminDashboard from './pages/AdminDashboard';
import Logout from './pages/Logout';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      <AppNavBar></AppNavBar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/addProduct' element={<AddProduct />}></Route>
        <Route path='/enableProduct' element={<EnableProduct />}></Route>
        <Route path='/disableProduct' element={<DisableProduct />}></Route>
        <Route path='/viewActiveProducts' element={<ViewActiveProducts />}></Route>
        <Route path='/adminDashboard' element={<AdminDashboard />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
        <Route path='/*' element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
