import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Header from './Header'
import FormContent from './FormContent'
import Footer from './Footer'
import ResumeApplication from './ResumeApplication'
import Admin from './Admin'
import Login from './Login';

import isLogin from '../utils/isLogin'


function PrivateRoute({ component: Component, ...props }) {
  console.log('private route', isLogin())
  return (
    <Route {...props} render={props => (
      isLogin()
        ? <Component {...props} />
        : <Redirect to="/login" />
    )} />
  )
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ResumeApplication} />
          <PrivateRoute path="/admin" component={Admin} />
          <Route path="/login" component={Login} />
        </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
