import {Actions, Product} from "../../reducers/product"
import {
    CREATE_PRODUCT, CREATE_PRODUCT_ERROR, FETCH_PRODUCT, FETCH_PRODUCT_ERROR
}from "../../actions/Types"

describe("testing product reducer", () =>{
    it("should return state if the action is CREATE_PRODUCT", ()=>{
        const action: Actions = {
            type: CREATE_PRODUCT,
            payload: "product created successfully"
        };
        const returnedValue = Product(undefined, action);
        expect(returnedValue).toEqual(
            expect.objectContaining({
                createProductSuccess: action.payload
            })
        )
    });

    it("should return state with error if the action is CREATE_PRODUCT_ERROR", ()=>{
        const action: Actions = {
            type: CREATE_PRODUCT_ERROR,
            payload: "Product already exists"
        };
        const returnedValue = Product(undefined, action);
        expect(returnedValue).toEqual(
            expect.objectContaining({
                error: action.payload
            })
        )
    });

    it("should return state with error if the action is CREATE_PRODUCT_ERROR", ()=>{
        const action: Actions = {
            type: CREATE_PRODUCT_ERROR,
            payload: "Some error occurred"
        };
        const returnedValue = Product(undefined, action);
        expect(returnedValue).toEqual(
            expect.objectContaining({
                error: action.payload
            })
        )
    });

    it("should return state if the action is FETCH_PRODUCT", ()=>{
        const action: Actions = {
            type: FETCH_PRODUCT,
            payload: "Product fetched successfully"
        };
        const returnedValue = Product(undefined, action);
        expect(returnedValue).toEqual(
            expect.objectContaining({
                fetchProductSuccess: action.payload
            })
        )
    });

    it("should return state if the action is FETCH_PRODUCT_ERROR", ()=>{
        const action: Actions = {
            type: FETCH_PRODUCT_ERROR,
            payload: "Some error occured while fetching products"
        };
        const returnedValue = Product(undefined, action);
        expect(returnedValue).toEqual(
            expect.objectContaining({
                fetchProductError: action.payload
            })
        )
    });
})