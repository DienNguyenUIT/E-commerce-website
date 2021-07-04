import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { AddShoppingCart } from "@material-ui/icons"; // named import/export
import useStyles from "./styles"; // default import/export

const Product = ({ product, onAddToCart, onSeeDetail }) => {
  const classes = useStyles(); // sử dụng các styles đã định nghĩa sẵn trong file styles.js
  return (
    <Link to="/detail" onClick={() => onSeeDetail(product)}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={product.media.source}
          title={product.name}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography display="inline" noWrap variant="h6" gutterBottom>
              {product.name.length > 23
                ? product.name.substring(0, 20) + "..."
                : product.name}
            </Typography>
            <Typography variant="h5">
              {product.price.formatted_with_symbol}
            </Typography>
          </div>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          {/* <Button
            component={Link}
            to="/detail"
            onClick={() => onSeeDetail(product)}
          >
            Detail
          </Button> */}
          <IconButton
            aria-label="Add to Cart"
            onClick={() => onAddToCart(product.id, 1)}
          >
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </Link>
  );
};
export default Product;
