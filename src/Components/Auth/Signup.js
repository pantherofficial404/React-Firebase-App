import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {signup} from '../../Redux/Actions/AuthActions'
class Signup extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
      }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signup(this.state)
    }
    render() {
        const {auth} = this.props;
        const buttonText = this.props.isLoading?"Loading..":"Sign Up"
        if(auth.uid) return (<Redirect to="/" />)
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id='firstName' onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id='lastName' onChange={this.handleChange} />
                </div>
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
        auth : state.firebaseReducer.auth,
        isLoading:state.authReducer.isLoading
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        signup : (user)=>{dispatch(signup(user))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Signup);
