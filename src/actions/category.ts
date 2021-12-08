import axios from "axios";
import { startLoading, stopLoading } from "./loading";
import { Actions as LoadingActions } from "../reducers/loading";
import {
  FETCH_CATEGORY_ERROR,
  FETCH_CATEGORY,
  CREATE_CATEGORY_ERROR,
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  DELETE_CATEGORY_ERROR,
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_ERROR,
  CLEAR_ERRORS
} from "./Types";
import { API_URL } from "./serverConnection";
import { Actions } from "../reducers/category";
import React from "react";

// function for getCategory
export const getCategory =
  () =>
  // action creator for getCategory
  async (
    dispatch: React.Dispatch<Actions>,
    loadingDispatch: React.Dispatch<LoadingActions>
  ) => {
    try {
      // dispatch start laoding
      startLoading(loadingDispatch);
      // get result from API
      const result = await axios.get(`${API_URL}/category/get_category`);
      // dispatch stop loading
      stopLoading(loadingDispatch);
      // dispatch result with FETCH_CATEGORY type
      dispatch({
        type: FETCH_CATEGORY,
        payload: result.data.data,
      });
    } catch (err) {
      const error:any = err;
      // in case of error, dispatch stop loading
      stopLoading(loadingDispatch);
      // dispatch error data
      dispatch({
        type: FETCH_CATEGORY_ERROR,
        payload: error.response
          ? error.response.data?.message
          : "Failed to connect with the server",
      });
    }
  };

// function for creating a new category
export const createNewCategory =
  (data: string) =>
  // action creator
  async (
    dispatch: React.Dispatch<Actions>,
    loadingDispatch: React.Dispatch<LoadingActions>
  ) => {
    try {
      // dispatch start loading
      startLoading(loadingDispatch);
      // fetch result from API
      const result = await axios.post(`${API_URL}/category/`, data);
      // dispatch stop laoding
      stopLoading(loadingDispatch);
      // dispatch stop laoding
      dispatch({
        type: CREATE_CATEGORY,
        payload: result.data.result,
      });
    } catch (err) {
      const error:any = err;
      // in case of error, dispatch stop loading
      stopLoading(loadingDispatch);
      dispatch({
        type: CREATE_CATEGORY_ERROR,
        payload: error.response
          ? error.response.data.message
          : "Failed to connect with the server",
      });
    }
  };

// Function for deleting a category
export const deleteCategory =
  (id: any) =>
  // Action creator for delete category
  async (
    dispatch: React.Dispatch<Actions>,
    loadingDispatch: React.Dispatch<LoadingActions>
  ) => {
    try {
      // dispatch start laoding
      startLoading(loadingDispatch);
      // get result from API
      const result = await axios.delete(`${API_URL}/category/` + id);
      // dispatch stop loading
      stopLoading(loadingDispatch);
      // dispatch result
      dispatch({
        type: DELETE_CATEGORY,
        payload: result.data,
      });
    } catch (err) {
      const error: any = err;
      // in case of error, dispatch stop loading
      stopLoading(loadingDispatch);
      dispatch({
        type: DELETE_CATEGORY_ERROR,
        payload: error.response,
      });
    }
  };

// function for editing category
export const editCategory =
  (data: any) =>
  async (
    // action creator
    dispatch: React.Dispatch<Actions>,
    loadingDispatch: React.Dispatch<LoadingActions>
  ) => {
    try {
      // dispatch start loading
      startLoading(loadingDispatch);
      // get result from API
      const result = await axios.put(`${API_URL}/category/`, data);
      // dispatch stop laoding
      stopLoading(loadingDispatch);
      // dispatch result
      dispatch({
        type: UPDATE_CATEGORY,
        payload: result.data?.message,
      });
    } catch (err) {
      const error:any = err;
      // in case of error, dispatch stop loading
      stopLoading(loadingDispatch);
      dispatch({
        type: UPDATE_CATEGORY_ERROR,
        payload: error.response
          ? error.response.data.message
          : "Failed to connect with server",
      });
    }
  };

  export const clearErrors = (dispatch: React.Dispatch<Actions>) => {
    //Dispatch CLEAR_ERRORS type
    dispatch({
      type: CLEAR_ERRORS,
    });
  };
  