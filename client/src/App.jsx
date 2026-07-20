
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import ProductListing from "./pages/ProductListing/ProductListing";
import Layout from "./components/Layout/Layout";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Checkout from "./pages/Checkout/Checkout";
import AccountProfile from "./pages/Account/AccountProfile";
import AccountOrders from "./pages/Account/AccountOrders";
import OrderDetails from "./pages/Account/OrderDetails";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Loader from "./components/Loader/Loader";
import useCart from "./hooks/useCart";
import OrderSuccess from "./pages/OrderSuccess/OrderSuccess";

function App() {
   const { actionLoading  } = useCart();

  return (
    <>
    {actionLoading  && <Loader />}
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<ProductListing />} />

        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <AccountProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/account/orders"
          element={
            <ProtectedRoute>
              <AccountOrders />
             </ProtectedRoute>
          }
        />
        <Route
          path="/account/orders/:orderId"
          element={
            <ProtectedRoute>
              <OrderDetails />
            </ProtectedRoute>
          }
        />

        <Route
  path="/order-success"
  element={<OrderSuccess />}
/>
        
        </Route>
      </Routes>
  
    </>
  )
}

export default App
