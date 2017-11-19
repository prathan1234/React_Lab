import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import localStorage from 'localStorage'

import Main from './pages/Main'
import Login from './pages/Login/index'

const Routes = () => (
    <Switch>
      <Route exact path="/login" component={Login} />
      {!localStorage.getItem('username') ? (
        <Redirect to="/login" />
      ) : (
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      )}
    </Switch>
  )

export default Routes