import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoadingContextProvider } from "./contexts/Loading";
import { SignUpContextProvider } from "./contexts/SignUp";
import { LoginContextProvider } from "./contexts/Login";
import { SignUpAdmin } from "./component/Sign-up";
import { LoginAdmin } from "./component/Login";
import { Dashboard } from "./component/Dashboard";
import { Home } from "./component/HomePage";
import { CategoryProvider } from "./contexts/Category";
import {Category} from "./component/Category"
import axios from "axios";

function App() {
  const token: string | null = localStorage.getItem("E_COMM:AUTH_TOKEN");
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  return (
    <>
      <LoadingContextProvider>
        <SignUpContextProvider>
          <LoginContextProvider>
            <CategoryProvider>
              <Router>
                <Switch>
                  <Route path="/sign-up" component={SignUpAdmin} />
                  <Route path="/login" component={LoginAdmin} />
                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/home" component={Home} />
                  <Route path="/category" component={Category} />
                </Switch>
              </Router>
            </CategoryProvider>
          </LoginContextProvider>
        </SignUpContextProvider>
      </LoadingContextProvider>
    </>
  );
}

export default App;
