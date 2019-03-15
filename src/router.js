
import React, { Component } from 'react';
import {BrowserRouter as Router,Switch, Redirect, Route, Link} from 'react-router-dom'
// import { Switch } from 'antd-mobile'

import Home from './components/home/home'
import Login from './components/login/login'

class RouteCom extends Component {
  constructor(props) {
    super(props)
    this.state= {
         
    }
  }
  render() {
    return (
        <Router>  
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Redirect to="/login" />
            </Switch>
        </Router>
      )
  }
} 
 
export default RouteCom
