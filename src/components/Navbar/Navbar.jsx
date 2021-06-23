import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/logo.jpg";
import logoHoodie from "../../assets/hoodie_icon.jpg";
import logoShirt from "../../assets/shirt_icon.png";
import logoSweater from "../../assets/sweater_icon.png";

import useStyles from "./styles";

import { Link, useLocation } from "react-router-dom";
const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
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
            E-shopping
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
          <Typography
            component={Link}
            to="/sweaters"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="Commerce.js"
              height="25 pixel"
              className={classes.image}
            />
            Sign in
          </Typography>
          <Typography
            component={Link}
            to="/sweaters"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="Commerce.js"
              height="25 pixel"
              className={classes.image}
            />
            Sign up
          </Typography>

          <div className={classes.grow} />
          {/* (location.pathname === "/" || location.pathname === "/hoodies") */}
          {location.pathname != "/cart" && (
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
