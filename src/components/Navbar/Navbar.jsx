import {
  AppBar,
  avatar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
  Button,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import logoHome from "../../assets/commerce.png";
import logoHoodie from "../../assets/hoodie.png";
import logoShirt from "../../assets/shirt.png";
import logoSweater from "../../assets/sweater.png";
import logoProfile from "../../assets/profile.png";
// import Button from "react-bootstrap/Button";
import useStyles from "./styles";
import { Link, useHistory, useLocation } from "react-router-dom";
import firebase from "firebase";
import React, { useEffect, useState } from "react";

// Component <Navbar/> là thanh điều hướng các trang

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  // Google Auth
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(!!user);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);
  // Google Auth

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

          {/* <Button
            onClick={() => {
              history.push("/sign-in");
            }}
            component={Link}
            to="/sign-in"
            size="lg"
            variant="outline-primary"
            color="primary"
            display="block"
          >
            Sign in
          </Button> */}

          {!isSignedIn ? (
            <Button
              onClick={() => {
                history.push("/sign-in");
              }}
              component={Link}
              to="/sign-in"
              size="lg"
              variant="contained"
              color="primary"
            >
              Log In
            </Button>
          ) : (
            <div>
              <Button
                size="lg"
                variant="contained"
                color="secondary"
                onClick={() => firebase.auth().signOut()}
                to="/"
              >
                Log Out
              </Button>
            </div>
          )}

          {/* <Button color="light" onClick={() => this.props.clickLogout()}>
    {this.props.setIsSignedIn? 'Logout' : 'Login'}
</Button> */}

          <div className={classes.grow} />
          {/* <Typography variant="h6" className={classes.title} color="inherit">
            <Link to="/">
              <img
                src={logoProfile}
                alt="Commerce.js"
                height="30 pixel"
                className={classes.image}
              />
            </Link>
          </Typography> */}
          {location.pathname !== "/cart" && (
            <div className={classes.button}>
              {!isSignedIn ? (
                <IconButton
                  component={Link}
                  to="/"
                  variant="contained"
                  ria-label="Show UserProfile"
                  color="primary"
                  disabled
                >
                  <Badge color="secondary">
                    <AccountCircleIcon />
                  </Badge>
                </IconButton>
              ) : (
                <IconButton
                  component={Link}
                  to="../Auth/pages/SignIn/UserProfile.jsx"
                  variant="contained"
                  ria-label="Show UserProfile"
                  color="primary"
                >
                  <Badge color="secondary">
                    <AccountCircleIcon />
                  </Badge>
                </IconButton>
              )}

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
