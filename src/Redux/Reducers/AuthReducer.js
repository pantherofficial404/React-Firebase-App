const initState = {
    authError:null,
    isLoading:false
}

const AuthReducer = (state=initState,action)=>{
    switch(action.type){
        case "loginSuccess":
            return {
                ...state,
                authError:"login Success"
            }
        case "loginFailed":
            return {
                ...state,
                authError:"Login Failed"
            }
        case "logoutSuccess":
            console.log("logout success")
            return state;

        case "logoutFailed":
            console.log("logout failed")
            return state;

        case "startLoading":
            return {
                ...state,
                isLoading:true
            }
        
        case "stopLoading":
            return {
                ...state,
                isLoading:false
            }
        
        case "signupSuccess":
            console.log("signupSuccess")
            return state;

        case "signupFailed":
            console.log("signup failed")
            return state;
        default:
            return state
    }
}

export default AuthReducer;