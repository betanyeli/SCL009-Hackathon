import React from 'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import Login from './components/LoginView'
import Dashboard from './components/DashboardView'

function Login() {
    return (
      <BrowserRouter>
          <div className='navbar'>
        <NavLink exact to="/HomeView" > Dashboard </NavLink>
        <NavLink exact to="/OtherView"> Otro </NavLink>
      </div>
      <Switch>
        <Route exact path="/" component={Login} ></Route>
        <Route exact path="/login" component={Login} ></Route>
        <Route exact path="/dashboard" component={Dashboard} ></Route>
        {/* <Route exact path="/options" component={Options} ></Route> */}
      </Switch>
    </BrowserRouter>
   
   
    )
}

export default Login