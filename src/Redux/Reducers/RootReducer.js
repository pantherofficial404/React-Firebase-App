import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import ProjectReducer from './ProjectReducer';
import {firestoreReducer} from "redux-firestore"
import {firebaseReducer} from 'react-redux-firebase'
const rootReducer = combineReducers({
    authReducer:AuthReducer,
    projectReducer:ProjectReducer,
    firestoreReducer:firestoreReducer,
    firebaseReducer:firebaseReducer
})

export default rootReducer;