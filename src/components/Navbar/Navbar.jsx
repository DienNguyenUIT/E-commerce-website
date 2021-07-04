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
          <Typography variant="h6" className={classes.title} color="inherit">
            <Link to="/">
              <img
                src={logoHome}
                alt="Commerce.js"
                height="25 pixel"
                className={classes.image}
              />
            </Link>
            E-shopping
          </Typography>

          <Typography variant="h6" className={classes.title} color="inherit">
            <Link to="/shirts">
              <img
                src={logoShirt}
                alt="Commerce.js"
                height="25 pixel"
                className={classes.image}
              />
            </Link>
            T-Shirt
          </Typography>
          <Typography variant="h6" className={classes.title} color="inherit">
            <Link to="/hoodies">
              <img
                src={logoHoodie}
                alt="Commerce.js"
                height="25 pixel"
                className={classes.image}
              />
            </Link>
            Hoodie
          </Typography>

          <Typography variant="h6" className={classes.title} color="inherit">
            <Link to="/sweaters">
              <img
                src={logoSweater}
                alt="Commerce.js"
                height="25 pixel"
                className={classes.image}
              />
            </Link>
            Sweater
          </Typography>

          <Button
            onClick={() => {
              history.push("/login");
            }}
            component={Link}
            to="/login"
            size="lg"
            variant="outline-primary"
            color="primary"
          >
            Sign in
          </Button>

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
