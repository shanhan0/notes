import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route,Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Cont from "./pages/Cont";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Redirect exact from='/con' to='/con/0'></Redirect>
          <Route path="/con" component={Cont} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
