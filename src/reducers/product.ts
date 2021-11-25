import {
    CREATE_PRODUCT,
    CREATE_PRODUCT_ERROR,
    FETCH_PRODUCT,
    FETCH_PRODUCT_ERROR,
  } from "../actions/Types";

  export type Actions =
    | {
        type: typeof CREATE_PRODUCT;
        payload: string;
      }
    | {
        type: typeof CREATE_PRODUCT_ERROR;
        payload: string;
      }
    | {
        type: typeof FETCH_PRODUCT;
        payload: any;
      }
    | {
        type: typeof FETCH_PRODUCT_ERROR;
        payload: any;
      };
  
  interface ProductInterface {
    error: string | null;
    createProductSuccess: string | null;
    createProductError: string | null;
    fetchProductSuccess: any;
    fetchProductError: string | null;
  }
  export type State = ProductInterface;
  
  export const initialState: State = {
    error: null,
    createProductError: null,
    createProductSuccess: null,
    fetchProductError: null,
    fetchProductSuccess: [],
  };
  
  export const Product = (state: State = initialState, action: Actions) => {
    console.log(action.type, "action product.........bzz")
    switch (action.type) {
      case CREATE_PRODUCT:
        return {
          ...state,
          createProductSuccess: action.payload,
        };
      case CREATE_PRODUCT_ERROR:
        return {
          ...state,
          error: action.payload,
        };
      case FETCH_PRODUCT:
        return {
          ...state,
          fetchProductSuccess: action.payload,
        };
      case FETCH_PRODUCT_ERROR:
        return {
          ...state,
          fetchProductError: action.payload
            ? action.payload
            : "Unable to fetch the Product at the moment",
        };
      default:
        return state;
    }
  };
  