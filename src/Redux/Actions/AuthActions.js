export const signin = (credentials)=>{
    return (dispatch,getState,{getFirebase})=>{
        dispatch({type:"startLoading"})
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({type:"loginSuccess"})
            dispatch({type:"stopLoading"})
        }).catch((err)=>{
            dispatch({type:"loginFailed",err})
            dispatch({type:"stopLoading"})
        })
    }
}

export const logout = ()=>{
    return (dispatch,getState,{getFirebase})=>{
        const firebase = getFirebase()
        firebase.auth().signOut()
        .then(()=>{
            dispatch({type:"logoutSuccess"})
        })
        .catch((err)=>{
            dispatch({type:"logoutFailed"})
        })
    }
}

export const signup = (user)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        dispatch({type:"startLoading"})
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            user.email,
            user.password
        ).then((res)=>{
            return firestore.collection('users').doc(res.user.uid).set({
                firstName:user.firstName,
                lastname:user.lastName
            })
        }).then(()=>{
            dispatch({type:"signupSucesss"})
            dispatch({type:"stopLoading"})

        }).catch((err)=>{
            dispatch({type:"signupFailed"})
            dispatch({type:"stopLoading"})

        })
    }
}