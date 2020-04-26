import React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import FirebaseConfig from "./FirebaseConfig"

if (firebase.apps.length === 0) {
    firebase.initializeApp(FirebaseConfig)
  }

export const Firebaes = firebase.auth()