
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import ProductListing from "./pages/ProductListing/ProductListing";
import Layout from "./components/Layout/Layout";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Loader from "./components/Loader/Loader";
import useCart from "./hooks/useCart";

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
        
        </Route>
      </Routes>
  
    </>
  )
}

export default App
