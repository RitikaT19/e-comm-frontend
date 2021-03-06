import { LOGIN, LOGIN_ERROR } from "./Types";
import { stopLoading, startLoading } from "./loading";
import { Actions as LoadingActions } from "../reducers/loading";
import { API_URL } from "./serverConnection";
import { Actions } from "../reducers/login";
import React, { useEffect } from "react";
import axios from "axios";
import { History } from "history";
import { setupMaster } from "cluster";

// function for sign in
export const signIn =
// getting all the parameters
  (email: string, password: string ,history: History | undefined) =>
  // Action creator
  async (
    dispatch: React.Dispatch<Actions>,
    loadingDispatch: React.Dispatch<LoadingActions>
  ) => {
    try {
      // dispatch start loading
      startLoading(loadingDispatch);
      // get result from API
      const result = await axios.post(`${API_URL}/auth/admin/login`, {
        email,
        password,
      });
      // get token from result
      const token = result.data.result;
      // store token in local storage
      localStorage.setItem("E_COMM: AUTH_TOKEN", token);
      // dispatch stop loading
      stopLoading(loadingDispatch);
      // dispatch toekn and LOGIN type
      dispatch({
        type: LOGIN,
        payload: token,
      });
      // Add authorization header
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      // redirect to /category after sign in
      history?.push("/category");
    } catch (err) {
      const error:any = err;
      // in case of error, dispatch stop loading
      stopLoading(loadingDispatch);
      dispatch({
        type: LOGIN_ERROR,
        payload: error.response
          ? error.response.data.message
          : "Failed to connect to the server",
      });
    }
  };


  export const logout = () => {
    try {
      // Remove the JWT token, idle limit and encryption key from the local storage
      localStorage.clear();
      // Reload the application from the index
      window.location.href = "/";
    } catch (err) {
      // In case of errors, log the response and move the user to the Error page
      console.log(err);
      window.location.href = "/";
    }
  };
  