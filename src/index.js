import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from 'react-router-dom';

import firebase from 'firebase/compat/app';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux'
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase';
// import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // <- needed if using firestore


const firebaseConfig = {
    apiKey: "AIzaSyCCNchkfPbEKZrzrle7ZHjRA2vRMeeeltM",
    authDomain: "bootcamp-5ef36.firebaseapp.com",
    databaseURL: "https://bootcamp-5ef36-default-rtdb.firebaseio.com",
    projectId: "bootcamp-5ef36",
    storageBucket: "bootcamp-5ef36.appspot.com",
    messagingSenderId: "382209267653",
    appId: "1:382209267653:web:fb632ef73a1b937e86ddac"
  };

firebase.initializeApp(firebaseConfig);

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer
    // firestore: firestoreReducer // <- needed if using firestore
  });
  
// Create store with reducers and initial state
const store = createStore(rootReducer)

const rrfConfig = {
    userProfile: 'users'
    // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
    // enableClaims: true // Get custom claims along with the profile
}

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch
    // createFirestoreInstance // <- needed if using firestore
}

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
