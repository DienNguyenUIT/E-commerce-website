import React, { useState, useEffect } from "react";
// import Products from "./components/Products/Products";
// import Navbar from "./components/Products/Products";'

// toàn bộ các nghiệp vụ sẽ lưu trong commerce
import { commerce } from "./lib/commerce";

import { Products, Navbar, Cart } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  // Sử dụng để thêm sản phẩm vào store
  const [products, setProducts] = useState([]);

  // Sử dụng để thêm sản phẩm vào Cart
  const [cart, setCart] = useState({});

  // đồng bộ data sản phẩm trong hompage từ api commerce
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  // đồng bộ data sản phẩm trong giỏ hàng từ api commerce
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  // Xử lý event khi click button addtocart
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };
  // Xử lý event khi click button + -
  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  // Xử lý event khi click button remove trong giỏ hàng
  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  // Xử lý event khi click button empty trong giỏ hàng
  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  // const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
  //   try {
  //     const incomingOrder = await commerce.checkout.capture(
  //       checkoutTokenId,
  //       newOrder
  //     );

  //     setOrder(incomingOrder);

  //     refreshCart();
  //   } catch (error) {
  //     setErrorMessage(error.data.error.message);
  //   }
  // };
  console.log(cart);
  // update product and cart
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <div style={{ display: "flex" }}>
        {/* <CssBaseline /> */}
        <Navbar
          totalItems={cart.total_items}
          // handleDrawerToggle={handleDrawerToggle}
        />
        <Switch>
          <Route exact path="/">
            <Products
              products={products}
              onAddToCart={handleAddToCart}
              handleUpdateCartQty
            />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
              onEmptyCart={handleEmptyCart}
            />
          </Route>
          {/* <Route path="/checkout" exact>
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
};
export default App;
