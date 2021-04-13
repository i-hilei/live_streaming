import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login/Login';
import Layout from './containers/Layout';


class App extends Component{
  render(){
    return(
      <HashRouter>
          <React.Suspense>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              {/* <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} /> */}
              <Route path="/" name="Home" render={props => <Layout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
        
    )
  }
}

export default App;
