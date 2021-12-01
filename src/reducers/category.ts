import {
  CREATE_CATEGORY,
  CREATE_CATEGORY_ERROR,
  FETCH_CATEGORY,
  FETCH_CATEGORY_ERROR,
  DELETE_CATEGORY,
  DELETE_CATEGORY_ERROR,
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_ERROR,
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
    }
  | {
      type: typeof DELETE_CATEGORY;
      payload: string;
    }
  | {
      type: typeof DELETE_CATEGORY_ERROR;
      payload: string;
    }
  | {
      type: typeof UPDATE_CATEGORY;
      payload: string;
    }
  | {
      type: typeof UPDATE_CATEGORY_ERROR;
      payload: string;
    };

interface CategoryInterface {
  error: string | null;
  createCategorySuccess: string | null;
  createCategoryError: string | null;
  fetchCategorySuccess: any;
  fetchCategoryError: string | null;
  deleteCategorySuccess: string | null;
  deleteCategoryError: string | null;
  updateCategorySuccess: string | null;
  updateCategoryError: string | null;
}
export type State = CategoryInterface;

export const initialState: State = {
  error: null,
  createCategoryError: null,
  createCategorySuccess: null,
  fetchCategoryError: null,
  fetchCategorySuccess: [],
  deleteCategorySuccess: null,
  deleteCategoryError: null,
  updateCategorySuccess: null,
  updateCategoryError: null,
};

export const Category = (state: State = initialState, action: Actions) => {
  console.log(action.type, "actionnnn");
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
    case DELETE_CATEGORY:
      return {
        ...state,
        deleteCategorySuccess: action.payload,
      };
    case DELETE_CATEGORY_ERROR:
      return {
        ...state,
        deleteCategoryError: action.payload,
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        updateCategorySuccess: action.payload,
      };
    case UPDATE_CATEGORY_ERROR:
      return {
        ...state,
        updateCategoryError: action.payload,
      };
    default:
      return state;
  }
};
