import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import RootReducer from '../src/Redux/Reducers/RootReducer';
import thunk from 'redux-thunk';
import fbConfig from './fbconfig';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

const store = createStore(RootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(fbConfig,{attachAuthIsReady:true, firebaseStateName: 'firebaseReducer'  }), // redux binding for firebase
    reduxFirestore(fbConfig) // redux bindings for firestore
  )
);
store.firebaseAuthIsReady.then(()=>{
  ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
  serviceWorker.unregister(); 
})
