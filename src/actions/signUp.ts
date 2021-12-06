import { startLoading, stopLoading } from "./loading";
import { Actions as LoadingActions } from "../reducers/loading";
import { SIGN_UP, SIGN_UP_ERROR, CLEAR_ERRORS } from "./Types";
import axios from "axios";
import { API_URL } from "./serverConnection";
import { Actions } from "../reducers/sign-up";
import React from "react";

// function for add user
export const addUser =
  (data: any) =>
  // action creator
  async (
    dispatch: React.Dispatch<Actions>,
    loadingDispatch: React.Dispatch<LoadingActions>
  ) => {
    try {
      // dispatxh start loading
      startLoading(loadingDispatch);
      // get result rom API
      const result = await axios.post(`${API_URL}/auth/admin/sign_up`, data);
      //  dispatch stop loading
      stopLoading(loadingDispatch);
      // dispatch result
      dispatch({
        type: SIGN_UP,
        payload: result.data.message,
      });
    } catch (error) {
      // dispatch stop loading in case of error
      stopLoading(loadingDispatch);
      // dispatch error data
      dispatch({
        type: SIGN_UP_ERROR,
        payload: error.response
          ? error.response.data.message
          : "Failed to connect to the server",
      });
    }
  };

export const clearErrors = (dispatch: React.Dispatch<Actions>) => {
  //Dispatch CLEAR_ERRORS type
  dispatch({
    type: CLEAR_ERRORS,
  });
};
