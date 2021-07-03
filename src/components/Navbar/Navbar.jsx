import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/home.png";
import logoHoodie from "../../assets/hoodie_icon.jpg";
import logoShirt from "../../assets/shirt_icon.png";
import logoSweater from "../../assets/sweater_icon.png";
import Button from "react-bootstrap/Button";
import useStyles from "./styles";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, useLocation } from "react-router-dom";
const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      {/* <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar> */}
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
              src={logo}
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
            T-Shirt
          </Typography>
          <Typography
            component={Link}
            to="/hoodies"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            Hoodie
          </Typography>

          <Typography
            component={Link}
            to="/sweaters"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            Sweater
          </Typography>
          <Typography
            component={Link}
            to="/sweaters"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            Sign up
          </Typography>
          <Typography
            component={Link}
            to="/sweaters"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            Sign in
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
      </AppBar>{" "}
      *
    </>
  );
};
export default Navbar;
