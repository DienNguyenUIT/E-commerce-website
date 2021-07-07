import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logoHome from "../../assets/commerce.png";
import logoHoodie from "../../assets/hoodie.png";
import logoShirt from "../../assets/shirt.png";
import logoSweater from "../../assets/sweater.png";
import Button from "react-bootstrap/Button";
import useStyles from "./styles";
import { Link, useHistory, useLocation } from "react-router-dom";

// Component <Navbar/> là thanh điều hướng các trang
const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  const history = useHistory();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="default">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logoHome}
              alt="Commerce.js"
              height="25 pixel"
              className={classes.image}
            />
            E-shopping
          </Typography>

          <Typography
            component={Link}
            to="/shirts"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logoShirt}
              alt="Commerce.js"
              height="25 pixel"
              className={classes.image}
            />
            T-Shirt
          </Typography>
          <Typography
            component={Link}
            to="/hoodies"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logoHoodie}
              alt="Commerce.js"
              height="25 pixel"
              className={classes.image}
            />
            Hoodie
          </Typography>

          <Typography
            component={Link}
            to="/sweaters"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logoSweater}
              alt="Commerce.js"
              height="25 pixel"
              className={classes.image}
            />
            Sweater
          </Typography>

          <div className={classes.grow} />

          {location.pathname !== "/cart" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                ria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
