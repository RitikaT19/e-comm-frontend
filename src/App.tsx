import React from "react";
import { Navbar } from "./common/Navbar/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignUpAdmin } from "./Component/Sign-up";
import {LoginAdmin} from "./Component/Login"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/sign-up" component={SignUpAdmin} />
          <Route path="/login" component={LoginAdmin} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
