import axios from "axios";
import { startLoading, stopLoading } from "./loading";
import { Actions as LoadingActions } from "../reducers/loading";
import {
  CREATE_PRODUCT,
  CREATE_PRODUCT_ERROR,
  FETCH_PRODUCT,
  FETCH_PRODUCT_ERROR,
} from "./Types";
import { API_URL } from "./serverConnection";
import { Actions } from "../reducers/product";
import React from "react";

export const getProduct =
  () =>
  async (
    dispatch: React.Dispatch<Actions>,
    loadingDispatch: React.Dispatch<LoadingActions>
  ) => {
    try {
      startLoading(loadingDispatch);
      const result = await axios.get(`${API_URL}/product/get_product`);
      console.log(result.data.data, "from axios product")
      dispatch({
        type: FETCH_PRODUCT,
        payload: result.data.data,
      });
      console.log(result, "create product")
      
    } catch (error: any) {
      stopLoading(loadingDispatch);
      dispatch({
        type: FETCH_PRODUCT_ERROR,
        payload: error.response
          ? error.response.data?.message
          : "Failed to connect with the server",
      });
    }
  };


  export const createProduct = (data: any) =>
  async(
    dispatch: React.Dispatch<Actions>,
    loadingDispatch: React.Dispatch<LoadingActions>
  ) =>{
    try{
      startLoading(loadingDispatch);
      const result = await axios.post(`${API_URL}/product/`,data)
      stopLoading(loadingDispatch)
      console.log(result, "create product from axios")
      dispatch({
        type: CREATE_PRODUCT,
        payload: result.data
      })

    }catch(error: any){
      stopLoading(loadingDispatch);
      dispatch({
        type: CREATE_PRODUCT_ERROR,
        payload: error.response?error.response.data?.message
        :"Failed to connect with the server"
      })
    }
  }
