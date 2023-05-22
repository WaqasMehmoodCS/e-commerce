import axios from "../Data/APIData";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState({});
  console.log(cart.products);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const result = await axios.get(`/carts/5`);
      // console.log(result.data);
      setCart(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>Cart</div>
    </>
  );
};

export default Cart;
