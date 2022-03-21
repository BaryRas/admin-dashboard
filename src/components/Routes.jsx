import React from 'react'
import {Routes as Switch, Route} from 'react-router-dom'
import Customers from "../pages/Customers";
import Dashboard from "../pages/Dashboard";

function Routes() {
  return (
    <Switch >
      <Route path='/' element={<Dashboard/>} />
      <Route path='/customers' element={<Customers/>} />
    </Switch>
  )
}

export default Routes