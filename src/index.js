import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/auth'
import FirebaseConfig from './components/FirebaseConfig'


if (firebase.apps.length === 0) {
  firebase.initializeApp(FirebaseConfig)
}
export const Firebaes = firebase.auth()

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
