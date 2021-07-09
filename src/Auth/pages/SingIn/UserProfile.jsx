import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import firebase from "firebase";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import styles from "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
}));

export default function UserProfile() {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={firebase.auth().currentUser.photoURL}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h7" component="h7">
              {firebase.auth().currentUser.email}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                
              <h5 style={{ color: "#1976D2" }} className={styles.UserName}>
                {" "}
                {firebase.auth().currentUser.displayName}{" "}
              </h5>
              
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Grid container justify="center">
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => firebase.auth().signOut()}
              to="/"
            >
              Log Out
            </Button>
          </Grid>
        </CardActions>
      </Card>
     </Grid>
  );
}
