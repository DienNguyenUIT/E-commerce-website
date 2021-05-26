import React, { Component } from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";
import useStyles from "./styles";

//Moi product la 1 object co
const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes",
    price: "$5",
    image:
      "https://product.hstatic.net/200000249781/product/c-hd-w_968f716b2344474a8aa8cd53e9bfcd8d_large.jpg",
  },
  {
    id: 2,
    name: " Ghost of Tsushima",
    description: "Apple macbook",
    price: "$10",
    image:
      "https://product.hstatic.net/200000249781/product/8r-sw-b_a00ecea5db6742e79b48636834d671e6_large.jpg",
  },
];

const Products = () => {
  // Main tuong tu nhu div
  // line 19 : pass props vao component product de co the truy cap render product
  //tu file product.jsx
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center spacing={4} ">
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};
export default Products;
