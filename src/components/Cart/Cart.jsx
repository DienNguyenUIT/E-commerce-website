import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
const Cart = ({ product, onAddToCart }) => {
  const classes = useStyles(); // sử dụng các styles đã định nghĩa sẵn trogn  file styles.js

  return (
    <Container>
      <div className={classes.toolbar} />
    </Container>
  );
};
export default Cart;
