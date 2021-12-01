import { Actions, Category } from "../../reducers/category";
import {
  CREATE_CATEGORY,
  CREATE_CATEGORY_ERROR,
  FETCH_CATEGORY,
  FETCH_CATEGORY_ERROR,
  DELETE_CATEGORY,
  DELETE_CATEGORY_ERROR,
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_ERROR
} from "../../actions/Types";

describe("testing category reducer", () =>{
    it("should return state if the action is CREATE_CATEGORY", ()=>{
        const action: Actions = {
            type: CREATE_CATEGORY,
            payload: "Category created successfully!"
        };
        const returnedValue = Category(undefined, action);
        expect(returnedValue).toEqual(
            expect.objectContaining({
                createCategorySuccess: action.payload
            })
        )
    });

    it("should return state with error if the action type is ADD_CATEGORY_ERROR",()=>{
        const action: Actions={
            type: CREATE_CATEGORY_ERROR,
            payload: "Some error occurred"
        };
        const returnedValue = Category(undefined, action);
        expect(returnedValue).toEqual(
            expect.objectContaining({
                error: action.payload
            })
        )
    })

    it("should return state with error if the action type is ADD_CATEGORY_ERROR",()=>{
        const action: Actions={
            type: CREATE_CATEGORY_ERROR,
            payload: "Category name already exists"
        };
        const returnedValue = Category(undefined, action);
        expect(returnedValue).toEqual(
            expect.objectContaining({
                error: action.payload
            })
        )
    })

    it("should return state if the action is FETCH_CATEGORY", () =>{
        const action: Actions = {
            type: FETCH_CATEGORY,
            payload: "Categories fetched successfully"
        };
        const returnedValue = Category(undefined, action);
        expect(returnedValue).toEqual(
            expect.objectContaining({
                fetchCategorySuccess: action.payload
            })
        )
    })

    it("should return state with error if the action is FETCH_CATEGORY_ERROR", () =>{
        const action: Actions = {
            type: FETCH_CATEGORY_ERROR,
            payload: "Unable to fetch categories"
        };
        const returnedValue = Category(undefined, action);
        expect(returnedValue).toEqual(
            expect.objectContaining({
                fetchCategoryError: action.payload
            })
        )
    })

    it("should return state if the action is DELETE_CATEGORY", () =>{
        const action: Actions = {
            type: DELETE_CATEGORY,
            payload: "Category deleted successfully!"
        };
        const returnedValue = Category(undefined, action);
        expect(returnedValue).toEqual(
            expect.objectContaining({
                deleteCategorySuccess: action.payload
            })
        )
    })

    it("should return state with error if the action is DELETE_CATEGORY_ERROR", () =>{
        const action: Actions = {
            type: DELETE_CATEGORY_ERROR,
            payload: "Category not found"
        };
        const returnedValue = Category(undefined, action);
        expect(returnedValue).toEqual(
            expect.objectContaining({
                deleteCategoryError: action.payload
            })
        )
    })

    it("should return state with error if the action is DELETE_CATEGORY_ERROR", () =>{
        const action: Actions = {
            type: DELETE_CATEGORY_ERROR,
            payload: "Unable to delete category"
        };
        const returnedValue = Category(undefined, action);
        expect(returnedValue).toEqual(
            expect.objectContaining({
                deleteCategoryError: action.payload
            })
        )
    })

    it("should return state if the action is UPDATE_CATEGORY", () =>{
        const action: Actions = {
            type: UPDATE_CATEGORY,
            payload: "Category updated successfully!"
        };
        const returnedValue = Category(undefined, action);
        expect(returnedValue).toEqual(
            expect.objectContaining({
                updateCategorySuccess: action.payload
            })
        )
    })

    it("should return state with error if the action is UPDATE_CATEGORY_ERROR", () =>{
        const action: Actions = {
            type: UPDATE_CATEGORY_ERROR,
            payload: "category not found"
        };
        const returnedValue = Category(undefined, action);
        expect(returnedValue).toEqual(
            expect.objectContaining({
                updateCategoryError: action.payload
            })
        )
    })
})