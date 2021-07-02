import React from "react";
import { Alert } from "@material-ui/lab";
import {
  Box,
  Button,
  Card,
  Grid,
  List,
  ListItem,
  Slide,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";
const Detail = ({ product, onAddToCart }) => {
  const classes = useStyles();

  return (
    <>
      <Slide key={product.name} direction="up" in={true}>
        <div style={{ padding: 100 }}>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <img
                src={product.media.source}
                alt={product.name}
                className={classes.largeImage}
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <List>
                <ListItem>
                  <Typography
                    gutterBottom
                    variant="h5"
                    color="textPrimary"
                    component="h1"
                  >
                    {product.name}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Box
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  ></Box>
                </ListItem>
              </List>
            </Grid>
            <Grid item md={3} xs={12}>
              <Card>
                <List>
                  <ListItem>
                    <Grid container>
                      <Grid item xs={6}>
                        Price
                      </Grid>
                      <Grid item xs={6}>
                        {product.price.formatted_with_symbol}
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem>
                    <Grid alignItems="center" container>
                      <Grid item xs={6}>
                        Status
                      </Grid>
                      <Grid item xs={6}>
                        {product.inventory.available > 0 ? (
                          <Alert icon={false} severity="success">
                            In Stock
                          </Alert>
                        ) : (
                          <Alert icon={false} severity="error">
                            Unavailable
                          </Alert>
                        )}
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem>
                    {/* <Button
                      onClick={() => onAddToCart(product.id, 1)}
                      component={Link}
                      to="/cart"
                      type="button"
                      fullWidth
                      variant="contained"
                    >
                      Back to Home
                    </Button> */}
                    <Button
                      onClick={() => onAddToCart(product.id, 1)}
                      component={Link}
                      to="/cart"
                      type="button"
                      fullWidth
                      variant="contained"
                      color="primary"
                    >
                      Add to cart
                    </Button>
                  </ListItem>
                </List>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Slide>
    </>
  );
};

export default Detail;
