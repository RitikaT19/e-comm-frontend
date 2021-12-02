import {
  CREATE_PRODUCT,
  CREATE_PRODUCT_ERROR,
  FETCH_PRODUCT,
  FETCH_PRODUCT_ERROR,
  DELETE_PRODUCT,
  DELETE_PRODUCT_ERROR,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_ERROR,
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
    }
  | {
      type: typeof DELETE_PRODUCT;
      payload: string;
    }
  | {
      type: typeof DELETE_PRODUCT_ERROR;
      payload: string;
    }
  | {
      type: typeof UPDATE_PRODUCT;
      payload: string;
    }
  | {
      type: typeof UPDATE_PRODUCT_ERROR;
      payload: string;
    };

interface ProductInterface {
  error: string | null;
  createProductSuccess: string | null;
  createProductError: string | null;
  fetchProductSuccess: any;
  fetchProductError: string | null;
  deleteProductSuccess: string | null;
  deleteProductError: string | null;
  updateProductSuccess: string | null;
  updateProductError: string | null;
}
export type State = ProductInterface;

export const initialState: State = {
  error: null,
  createProductError: null,
  createProductSuccess: null,
  fetchProductError: null,
  fetchProductSuccess: [],
  deleteProductSuccess: null,
  deleteProductError: null,
  updateProductSuccess: null,
  updateProductError: null,
};

export const Product = (state: State = initialState, action: Actions) => {
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
    case DELETE_PRODUCT:
      return {
        ...state,
        deleteProductSuccess: action.payload,
      };
    case DELETE_PRODUCT_ERROR:
      return {
        ...state,
        deleteProductError: action.payload,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        updateProductSuccess: action.payload,
      };
    case UPDATE_PRODUCT_ERROR:
      return {
        ...state,
        updateProductError: action.payload,
      };

    default:
      return state;
  }
};
