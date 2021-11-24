import {
  CREATE_CATEGORY,
  CREATE_CATEGORY_ERROR,
  FETCH_CATEGORY,
  FETCH_CATEGORY_ERROR,
} from "../actions/Types";

export type Actions =
  | {
      type: typeof CREATE_CATEGORY;
      payload: string;
    }
  | {
      type: typeof CREATE_CATEGORY_ERROR;
      payload: string;
    }
  | {
      type: typeof FETCH_CATEGORY;
      payload: any;
    }
  | {
      type: typeof FETCH_CATEGORY_ERROR;
      payload: any;
    };

interface CategoryInterface {
  error: string | null;
  createCategorySuccess: string | null;
  createCategoryError: string | null;
  fetchCategorySuccess: any;
  fetchCategoryError: string | null;
}
export type State = CategoryInterface;

export const initialState: State = {
  error: null,
  createCategoryError: null,
  createCategorySuccess: null,
  fetchCategoryError: null,
  fetchCategorySuccess: {},
};

export const Category = (state: State = initialState, action: Actions) => {
  console.log(action.type, "action")
  switch (action.type) {
    case CREATE_CATEGORY:
      return {
        ...state,
        createCategorySuccess: action.payload,
      };
    case CREATE_CATEGORY_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case FETCH_CATEGORY:
      return {
        ...state,
        fetchCategorySuccess: action.payload,
      };
    case FETCH_CATEGORY_ERROR:
      return {
        ...state,
        fetchCategoryError: action.payload
          ? action.payload
          : "Unable to fetch the category at the moment",
      };
    default:
      return state;
  }
};
