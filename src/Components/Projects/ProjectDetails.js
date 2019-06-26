import React,{Component} from 'react'
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase'
import {Redirect} from 'react-router-dom';
class ProjectDetails extends Component{
    render(){
        if (!this.props.auth.uid) return (<Redirect to="/signin"/>)
        const {project} = this.props
        if(project){
            return(
                <div className="container section project-details">
                      <div className="card z-depth-0">
                        <div className="card-content">
                          <span className="card-title">{project.title}</span>
                          <p>{project.content}</p>
                        </div>
                        <div className="card-action grey lighten-4 grey-text">
                          <div>2nd September, 2am</div>
                        </div>
                      </div>
                    </div>
            )
        }else{
            return(
                null
            )
        }
       
    }
}

const mapStateToProps = (state,ownProps)=>{
    const id = ownProps.match.params.id;
    const projects = state.firestoreReducer.data.projects;
    const project = projects?projects[id]:null;
    return{
        project:project,
        auth:state.firebaseReducer.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:"projects"}
    ])
)(ProjectDetails);