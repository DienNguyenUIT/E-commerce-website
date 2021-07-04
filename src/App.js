import React, { useState, useEffect } from "react";
import ReactJsAlert from "reactjs-alert";
// toàn bộ các nghiệp vụ sẽ lưu trong commerce
import { commerce } from "./lib/commerce";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Products, Navbar, Cart, Checkout, Detail } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
const App = () => {
  // Khởi tạo state cho products bằng react-hook
  const [products, setProducts] = useState([]);
  // Khởi tạo state cho products bằng react-hook
  const [shirts, setShirts] = useState([]);
  // Khởi tạo state cho products bằng react-hook
  const [hoodies, setHoodies] = useState([]);

  // Khởi tạo state cho products bằng react-hook
  const [sweaters, setSweaters] = useState([]);
  // Khởi tạo state cho cart bằng react-hook
  const [cart, setCart] = useState({});

  // Khởi tạo state cho toàn bộ thông tin của đơn hàng sau khi thanh toán
  const [order, setOrder] = useState({});

  // Khởi tạo state cho  errorMessage của đơn hàng sau khi thanh toán
  const [errorMessage, setErrorMessage] = useState("");

  // Khởi tạo state cho sản phẩm   cần xem chi tiết
  const [detail, setDetail] = useState(null);

  const history = useHistory();

  // Xử lý event khi click button AddToCart trên sản phẩm ở homepage
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  // Xử lý event khi click Link  trên trên sản phẩm ở homepage để xem chi tiết
  const handleSeeDetail = async (product) => {
    setDetail(product);
  };
  // Xử lý event khi click button + - trên sản phẩm ở trong giỏ hàng
  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  // Xử lý event khi click button remove  trong giỏ hàng
  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  // Xử lý event khi click button empty trong giỏ hàng
  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  // Refresh cart khi thực hiện xong 1 order
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  // Capture toàn bộ thông tin đơn hàng
  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      <ReactJsAlert
        status={true}
        type="error"
        title=" Some products are out of stock ! Please check it and try again"
        Close={() => {
          history.push("/");
        }}
      />;
      setErrorMessage(error.data.error.message);
    }
  };

  // Fetch sản phẩm và giỏ hàng bằng cách gọi API commercejs
  useEffect(() => {
    const fetchShirts = async () => {
      const { data } = await commerce.products.list({
        category_slug: ["shirt"],
      });

      setShirts(data);
    };
    const fetchHoodies = async () => {
      const { data } = await commerce.products.list({
        category_slug: ["hoodie"],
      });

      setHoodies(data);
    };
    const fetchSweaters = async () => {
      const { data } = await commerce.products.list({
        category_slug: ["sweater"],
      });

      setSweaters(data);
    };
    const fetchProducts = async () => {
      const { data } = await commerce.products.list();
      setProducts(data);
    };

    // Hàm lấy data của các sản phẩm hiện có trong giỏ hàng sau đó cập nhật cho cart
    const fetchCart = async () => {
      setCart(await commerce.cart.retrieve());
    };

    fetchProducts();
    fetchShirts();
    fetchHoodies();
    fetchSweaters();
    fetchCart();
  }, []);

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <CssBaseline />
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products
              products={products}
              onAddToCart={handleAddToCart}
              onSeeDetail={handleSeeDetail}
              handleUpdateCartQty
            />
          </Route>
          <Route exact path="/shirts">
            <Products
              products={shirts}
              onAddToCart={handleAddToCart}
              onSeeDetail={handleSeeDetail}
              handleUpdateCartQty
            />
          </Route>

          <Route exact path="/hoodies">
            <Products
              products={hoodies}
              onAddToCart={handleAddToCart}
              onSeeDetail={handleSeeDetail}
              handleUpdateCartQty
            />
          </Route>
          <Route exact path="/sweaters">
            <Products
              products={sweaters}
              onAddToCart={handleAddToCart}
              onSeeDetail={handleSeeDetail}
              handleUpdateCartQty
            />
          </Route>
          <Route exact path="/detail">
            <Detail product={detail} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
              onEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route path="/checkout" exact>
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
