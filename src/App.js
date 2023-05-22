import { Route, Routes } from "react-router";

import Register from "./Pages/Register";

import SignIn from "./Pages/SignIn";
import HomePage from "./Pages/HomePage";
import Dashboard from "./Pages/Dashboard";
import Error from "./Components/Error";
import Product from "./Pages/Product";
import Cart from "./Components/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path={`/product/:id`} element={<Product />} />
        <Route path={`/cart`} element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
