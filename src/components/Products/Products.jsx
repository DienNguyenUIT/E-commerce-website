import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";
import useStyles from "./styles";

// Component <Products/> render từng sản phẩm  qua props
const Products = ({ products, onAddToCart, onSeeDetail }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={4}>
            <Product
              product={product}
              onAddToCart={onAddToCart}
              onSeeDetail={onSeeDetail}
            />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};
export default Products;
