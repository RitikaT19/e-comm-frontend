import axios from "axios";
import { startLoading, stopLoading } from "./loading";
import { Actions as LoadingActions } from "../reducers/loading";
import {
  CREATE_PRODUCT,
  CREATE_PRODUCT_ERROR,
  FETCH_PRODUCT,
  FETCH_PRODUCT_ERROR,
  DELETE_PRODUCT,
  DELETE_PRODUCT_ERROR,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_ERROR,
} from "./Types";
import { API_URL } from "./serverConnection";
import { Actions } from "../reducers/product";
import React from "react";

// function for creating product
export const createProduct =
  (data: any) =>
  async (
    // Action creator
    dispatch: React.Dispatch<Actions>,
    loadingDispatch: React.Dispatch<LoadingActions>
  ) => {
    try {
      // dispatch start loading
      startLoading(loadingDispatch);
      // get result from API
      const result = await axios.post(`${API_URL}/product/`, data);
      // dispatch stop loading
      stopLoading(loadingDispatch);
      // dispatch result
      dispatch({
        type: CREATE_PRODUCT,
        payload: result.data,
      });
    } catch (error) {
      // in case of error, dispatch stop loading
      stopLoading(loadingDispatch);
      console.log(error,"asasaa")
      dispatch({
        type: CREATE_PRODUCT_ERROR,
        payload: error.response
          ? error.response.data?.message
          : "Failed to connect with the server",
      });
    }
  };

// function for getting product by id
export const getProductById =
  (id: string) =>
  async (
    // action creator
    dispatch: React.Dispatch<Actions>,
    loadingDispatch: React.Dispatch<LoadingActions>
  ) => {
    try {
      // dispatch start loading
      startLoading(loadingDispatch);
      // get result from API
      const result = await axios.get(`${API_URL}/product/${id}`);
      // dispatch stop loading
      stopLoading(loadingDispatch);

      // dispatch result
      dispatch({
        type: FETCH_PRODUCT,
        payload: result.data.data,
      });
    } catch (error) {
      // dispatch stop loading in case of error
      stopLoading(loadingDispatch);
      // dispatch error data
      dispatch({
        type: FETCH_PRODUCT_ERROR,
        payload: error.response
          ? error.response.data.message
          : "Failed to connect with the server",
      });
    }
  };

// function for deleting product
export const removeProduct =
  (id: any) =>
  async (
    // action creator
    dispatch: React.Dispatch<Actions>,
    loadingDispatch: React.Dispatch<LoadingActions>
  ) => {
    try {
      // dispatch start loading
      startLoading(loadingDispatch);
      const result = await axios.delete(`${API_URL}/product/` + id);
      // dispatch stop loading
      stopLoading(loadingDispatch);
      // dispatch result with DELETE_PRODUCT type
      dispatch({
        type: DELETE_PRODUCT,
        payload: result.data,
      });
    } catch (error) {
      // in case of error, dispatch stop loading
      stopLoading(loadingDispatch);
      // dispatch the error data
      dispatch({
        type: DELETE_PRODUCT_ERROR,
        payload: error.response
          ? error.response.data.message
          : "Failed to connect with the server",
      });
    }
  };

// function for editing product
export const editProduct =
  (data: any) =>
  async (
    // action creator
    dispatch: React.Dispatch<Actions>,
    loadingDispatch: React.Dispatch<LoadingActions>
  ) => {
    try {
      // dispatch start loading
      startLoading(loadingDispatch);
      // get result from the API
      const result = await axios.put(`${API_URL}/product/`, data);
      // dispatch stop loading
      stopLoading(loadingDispatch);
      // dispatch result
      dispatch({
        type: UPDATE_PRODUCT,
        payload: result.data,
      });
    } catch (error) {
      // dispatch error data
      dispatch({
        type: UPDATE_PRODUCT_ERROR,
        payload: error.response
          ? error.response.data.message
          : "Failed to connect with the server",
      });
    }
  };
