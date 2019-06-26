import React, { Component } from 'react'
import { signin } from '../../Redux/Actions/AuthActions';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
class Signin extends Component {
    state = {
        email:"",
        password :""
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.signin(this.state)
    }
    render() {
        const {isLoading} = this.props;
        if (this.props.auth.uid)return (
            <Redirect to="/" />
        )
        const buttonText = isLoading?"Loading..":"Login"
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">{buttonText}</button>
                    </div>
                </form>
        </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        authError : state.authReducer.authError,
        auth:state.firebaseReducer.auth,
        isLoading:state.authReducer.isLoading
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        signin:(credentials)=>dispatch(signin(credentials))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Signin);