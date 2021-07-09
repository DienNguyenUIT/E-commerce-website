import React, { useState, useEffect } from "react";
import firebase from "firebase";

export const SignInSuccess = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  const authWithGoogle = () => {
    firebase.auth().signInWithPopup(provider);
  };

  return (
    <>
      <h1>Login Success</h1>
      <h1>Login Success</h1>

    </>
  );
};

