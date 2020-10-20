import React, { useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import { loadUser } from './actions/auth';
import history from './history';
import PrivateRoute from './utils/routes/privateRoutes';
import setAuthToken from './utils/setAuthToken'

import Alert from './components/layout/alert';
import Navbar from './components/layout/navbar';
import Menu from './components/Menu';
import Login from './components/auth/login';
import Register from './components/auth/register';
import Order from './components/restaurant';
import Cart from './components/cart'
import CreateMenuItem from './components/restaurant/createMenuItem/createMenuItem'

import './app.css'
import UserOrders from './components/userOrders/UserOrders';

if(localStorage.token){
  setAuthToken(localStorage.token)
}

const App = ({loadUser}) => {
  useEffect(()=>{
    loadUser()
  },[loadUser])
  return (
    <Router history={history} >
      <Navbar/>
      <div className="container" >
        <Alert/>
        <Switch>
          <Route exact path='/' component={Menu}  />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
    
          <PrivateRoute exact path='/dashboard' component={Order} />
          <PrivateRoute exact path='/userOrders' component={UserOrders} />
          <PrivateRoute exact path='/cart' component={Cart} />
          <PrivateRoute exact path='/create-menu-item' component={CreateMenuItem} />
        </Switch>
      </div>
    </Router>
  )
}

export default connect(null,{loadUser})(App)
