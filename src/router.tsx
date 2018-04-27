import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { App, Error, Dashboard } from './pages'


export default () => (
  <Router basename="/">
    <div id="router">
      <Switch>
        <Route exact={true} path="/error" component={Error} />
        <Route exact={true} path="/" component={App} />
        <Route exact={true} path="/dashboard" component={Dashboard} />
        <Redirect to="/error" />
      </Switch>
    </div>
  </Router>
)
