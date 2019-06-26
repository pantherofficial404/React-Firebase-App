import {Link} from 'react-router-dom';

import React, { Component } from 'react'
import SigninLink from './SigninLink';
import SignupLink from './SignupLink';
import {connect} from 'react-redux';

class Navbar extends Component {
    render() {
        const {auth} = this.props;
        const links = auth.uid?<SigninLink />:<SignupLink />
        return (
            <nav>
                <div className="nav-wrapper grey darken-3">
                    <div className="container">
                        <Link to="/" className="brand-logo">Doctor AI</Link>
                        {links}
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        auth : state.firebaseReducer.auth
    }
}

export default connect(mapStateToProps,null)(Navbar);