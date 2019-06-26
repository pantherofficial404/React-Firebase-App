import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'
import {logout} from '../../Redux/Actions/AuthActions';
 class SigninLink extends Component {
    render() {
        return (
            <ul className="right">
                <li><NavLink to="/create">New Project</NavLink></li>
                <li><NavLink onClick={this.props.logout}>Log out</NavLink></li>
                <li><NavLink to="/" className="btn btn-floating blue lighten-1">Dr.AI</NavLink></li>
            </ul>
        )
    }
}


const mapDispatchToProps = (dispatch)=>{
    return {
        logout:()=>{dispatch(logout())}
    }
}

export default connect(null,mapDispatchToProps)(SigninLink);