import React, { useState, useEffect } from "react";
// import Products from "./components/Products/Products";
// import Navbar from "./components/Products/Products";'

// toàn bộ các nghiệp vụ sẽ lưu trong commerce
import { commerce } from "./lib/commerce";

import { Products, Navbar } from "./components";
const App = () => {
  // Sử dụng để thêm sản phẩm vào store
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  // Sử dụng để thêm sản phẩm vào Cart

  const [cart, setCart] = useState({});
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handelAddToCart = async (productID, quantity) => {
    const item = await commerce.cart.add(products, quantity);
    //update cart
    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <div>
      <Navbar />
      <Products products={products} onAddToCart={handelAddToCart} />
    </div>
  );
};
export default App;
