import axios from "axios";
import { startLoading, stopLoading } from "./loading";
import { Actions as LoadingActions } from "../reducers/loading";
import { FETCH_CATEGORY_ERROR, FETCH_CATEGORY, CREATE_CATEGORY_ERROR, CREATE_CATEGORY } from "./Types";
import { API_URL } from "./serverConnection";
import { Actions } from "../reducers/category";
import React from "react";

export const getCategory =
  () =>
  async (
    dispatch: React.Dispatch<Actions>,
    loadingDispatch: React.Dispatch<LoadingActions>
  ) => {
    try {
      startLoading(loadingDispatch);
      const result = await axios.get(`${API_URL}/category/get_category`);
      console.log(typeof result.data.data, "fetch category")
      dispatch({
        type: FETCH_CATEGORY,
        payload: result.data.data,
      });
      console.log(result, "result")
      console.log("from axios", result.data.data);
      console.log("from axios", typeof result.data.data);
    } catch (error: any) {
      stopLoading(loadingDispatch);
      dispatch({
        type: FETCH_CATEGORY_ERROR,
        payload: error.response
          ? error.response.data
          : "Failed to connect with the server",
      });
    }
  };

  export const createNewCategory = (data: string) =>
  async(
    dispatch: React.Dispatch<Actions>,
    loadingDispatch: React.Dispatch<LoadingActions>
  ) =>{
    try{
      startLoading(loadingDispatch);
      const result = await axios.post(`${API_URL}/category/`,data);
      stopLoading(loadingDispatch);
      dispatch({
        type: CREATE_CATEGORY,
        payload: result.data.result
      })
    
    }catch(error: any){
      stopLoading(loadingDispatch);
      dispatch({
        type: CREATE_CATEGORY_ERROR,
        payload: error.response
        ?error.response.data
        :"Failed to connect with the server"
      })
      console.log(error)
    }
  }
