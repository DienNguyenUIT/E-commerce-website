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
  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div>
      <Navbar />
      <Products products={products} />
    </div>
  );
};
export default App;
