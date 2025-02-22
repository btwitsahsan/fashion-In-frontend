import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkLoginStatus } from "./redux/features/auth/authSlice";
import Profile from "./pages/profile/Profile";
import { AdminRoute, MainRoute } from "./components/hiddenLink/hiddenLink";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminLayout from "./pages/admin/AdminLayout";
import ManageUsers from "./pages/admin/ManageUsers";
import ManageProducts from "./pages/admin/ManageProducts";
import ManageOrders from "./pages/admin/ManageOrders";
import CreateProduct from "./pages/admin/products/CreateProduct";
import { dashboard, getProducts } from "./redux/features/product/productSlice";
import EditProduct from "./pages/admin/products/EditProduct";
import ProductLayout from "./pages/products/ProductLayout";
import ProductList from "./pages/products/ProductList";
import ProductDetail from "./components/products/productDetails/ProductDetail";
import Cart from "./components/products/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import MyOrders from "./pages/myOrders/MyOrders";
// import Loader, { Spinner } from "./components/loader/Loader";

function App() {
  axios.defaults.withCredentials = true;
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkLoginStatus());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ToastContainer />
      {/* <Loader/> */}
      <Header />
      {/* <Spinner/> */}
      <Routes>
        <Route element={<MainRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          {/* --------------- Product Routes------------------------- */}
          <Route element={<ProductLayout />}>
            <Route path="/productList" element={<ProductList />} />
            <Route path="/products/:category" element={<ProductList />} />
            <Route path="/productDetail/:id" element={<ProductDetail />} />
          </Route>
          {/* --------------------------------- */}

          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/my-orders" element={<MyOrders />} />

          {/* --------------- Admin Routes---------------------------- */}
          <Route element={<AdminRoute />}>
            <Route element={<AdminLayout />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/users" element={<ManageUsers />} />
              <Route path="/admin/products" element={<ManageProducts />} />
              <Route path="/admin/orders" element={<ManageOrders />} />
              <Route path="/admin/createProduct" element={<CreateProduct />} />
              <Route path="/editProduct/:id" element={<EditProduct />} />
            </Route>
          </Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
