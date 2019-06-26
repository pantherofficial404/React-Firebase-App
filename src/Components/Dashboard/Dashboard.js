import React, { Component } from 'react'
import Notifications from './Notification';
import ProjectList from '../Projects/ProjectList';
import {connect} from 'react-redux';
import {compose} from 'redux';
import { firestoreConnect } from 'react-redux-firebase'
import {Redirect} from 'react-router-dom'
class Dashboard extends Component {
    render() {
        if (!this.props.auth.uid) return (<Redirect to="/signin"/>)
        return (
            <div className="dashboard container">
                <div className="row">
                <div className="col s12 m6">
                    <ProjectList projects={this.props.projects}/>
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifications notifications={this.props.notifications}/>
                </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
      projects: state.firestoreReducer.ordered.projects,
      auth:state.firebaseReducer.auth,
      notifications: state.firestoreReducer.ordered.notifications
    }
  }
  
  export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'projects' ,orderBy:["createdAt","desc"]},
      { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
    ])
  )(Dashboard)