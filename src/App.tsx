import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoadingContextProvider } from "./contexts/Loading";
import { SignUpContextProvider } from "./contexts/SignUp";
import { LoginContextProvider } from "./contexts/Login";
import { SignUpAdmin } from "./component/Sign-up";
import { LoginAdmin } from "./component/Login";
import { CategoryProvider } from "./contexts/Category";
import {Category} from "./component/Category"
import axios from "axios";
import { Product } from "./component/Product";
import {ProductContextProvider} from "./contexts/Product"

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
              <ProductContextProvider>
              <Router>
                <Switch>
                <Route path="/login" component={LoginAdmin} />
                  <Route path="/sign-up" component={SignUpAdmin} />
                  <Route path="/category" component={Category} />
                  <Route path = "/product" component={Product}/>
                </Switch>
              </Router>
              </ProductContextProvider>
            </CategoryProvider>
          </LoginContextProvider>
        </SignUpContextProvider>
      </LoadingContextProvider>
    </>
  );
}

export default App;
