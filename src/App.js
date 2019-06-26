import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from '../src/Components/Layout/Navbar';
import Dashboard from '../src/Components/Dashboard/Dashboard';
import ProjectDetails from '../src/Components//Projects/ProjectDetails';
import Signin from './Components/Auth/Signin';
import Signup from './Components/Auth/Signup';
import CreateProject from './Components/Projects/CreateProject';
function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/project/:id" component={ProjectDetails}/>
        <Route  path="/signin" component={Signin}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/create" component={CreateProject}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
