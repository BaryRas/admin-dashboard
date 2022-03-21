import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Customers from "../pages/Customers";
import Dashboard from "../pages/Dashboard";

function Routes() {
  return (
    <Switch>
      <Route path='/' component={Dashboard} />
      <Route path='/customers' component={Customers} />
    </Switch>
  )
}

export default Routes