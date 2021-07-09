import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import firebase from "firebase";
import React, { useEffect, useState } from "react";
// import UserProfile from "./UserProfile";
// import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import UserProfile from "./UserProfile";
SignIn.propTypes = {};

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        E-Shopping
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(!!user);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);
  if (!isSignedIn) {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>

              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
          {/* GoogleAuthBox */}
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
          {/* GoogleAuthBox */}
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
  return (
    <UserProfile/>
    // <Grid
    //   container
    //   spacing={0}
    //   direction="column"
    //   alignItems="center"
    //   justify="center"
    //   style={{ minHeight: "100vh" }}
    // >
    //   <Card className={classes.root}>
    //     <CardActionArea>
    //       <CardMedia
    //         className={classes.media}
    //         image={firebase.auth().currentUser.photoURL}
    //         title="Contemplative Reptile"
    //       />
    //       <CardContent>
    //         <Typography gutterBottom variant="h7" component="h7">
    //           {firebase.auth().currentUser.email}
    //         </Typography>
    //         <Typography variant="body2" color="textSecondary" component="p">
    //           <h5 style={{ color: "#1976D2" }} className={styles.UserName}>
    //             {" "}
    //             {firebase.auth().currentUser.displayName}{" "}
    //           </h5>
    //         </Typography>
    //       </CardContent>
    //     </CardActionArea>
    //     <CardActions>
    //       <Grid container justify="center">
    //         <Button
    //           variant="outlined"
    //           color="secondary"
    //           onClick={() => firebase.auth().signOut()}
    //           to="/"
    //         >
    //           Log Out
    //         </Button>
    //       </Grid>
    //     </CardActions>
    //   </Card>
    // </Grid>
  );
}

// function SignIn() {
//   return (
//     <Grid
//   container
//   spacing={0}
//   direction="column"
//   alignItems="center"
//   justify="center"
//   style={{ minHeight: '100vh' }}
// >

//   <Grid item xs={10}>
//   <StyledFirebaseAuth uiCallback={ui => ui.disableAutoSignIn()} uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>

//   </Grid>

// </Grid>
//   );
// }
