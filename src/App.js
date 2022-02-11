import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import AddProduct from './pages/AddProduct';
import Home from './pages/Home';
import ViewActiveProducts from './pages/ViewActiveProducts';
import AppNavBar from './components/AppNavBar';

function App() {
  return (
    <Router>
      <AppNavBar></AppNavBar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/addProduct' element={<AddProduct />}></Route>
        <Route path='/viewActiveProducts' element={<ViewActiveProducts />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
