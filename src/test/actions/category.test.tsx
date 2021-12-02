import {
  CREATE_CATEGORY,
  CREATE_CATEGORY_ERROR,
  FETCH_CATEGORY,
  FETCH_CATEGORY_ERROR,
  DELETE_CATEGORY,
  DELETE_CATEGORY_ERROR,
  START_LOADING,
  STOP_LOADING,
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_ERROR,
} from "../../actions/Types";
import { API_URL } from "../../actions/serverConnection";
import * as actions from "../../actions/category";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

describe("testing category actions", () => {
  const categoryDispatch = jest.fn();
  const loadingDispatch = jest.fn(
    afterAll(() => {
      jest.clearAllMocks();
    })
  );
  const mock = new MockAdapter(axios);

  it("should call the dispatch function with the type CREATE_CATEGORY ", (done) =>{
      const responseAPI = {message: "Category created successfully!"}
      mock.onPost(`${API_URL}/category/`).replyOnce(200, responseAPI);
      actions.createNewCategory(
          "cosmetics"
      )(categoryDispatch, loadingDispatch).then(()=>{
          expect(loadingDispatch).toHaveBeenCalledWith({type:START_LOADING})
          expect(categoryDispatch).toHaveBeenCalledWith({
              type: CREATE_CATEGORY,
              payload: undefined
          })
          expect(loadingDispatch).toHaveBeenCalledWith({type: START_LOADING})
          done()
      })
  })

  it("should call the dispatch function with the type CREATE_CATEGORY_ERROR ", (done) =>{
    const responseAPI = {message: "Some error occurred"}
    mock.onPost(`${API_URL}/category/`).replyOnce(400, responseAPI);
    actions.createNewCategory(
        "cosmetics"
    )(categoryDispatch, loadingDispatch).then(()=>{
        expect(loadingDispatch).toHaveBeenCalledWith({type:START_LOADING})
        expect(categoryDispatch).toHaveBeenCalledWith({
            type: CREATE_CATEGORY_ERROR,
            payload:{
                   message: "Some error occurred",
            }
        })
        expect(loadingDispatch).toHaveBeenCalledWith({type: START_LOADING})
        done()
    })
})

  it("should call the dispatch function with the type FETCH_CAREER_ERROR and payload", (done) => {
    const responseAPI = { message: "Unable to fetch categories" };
    mock.onGet(`${API_URL}/category/get_category`).replyOnce(400, responseAPI);
    actions
      .getCategory()(categoryDispatch, loadingDispatch)
      .then(() => {
        expect(loadingDispatch).toHaveBeenCalledWith({ type: START_LOADING });
        expect(categoryDispatch).toHaveBeenCalledWith({
          type: FETCH_CATEGORY_ERROR,
          payload: {
            message: "Unable to fetch categories",
          },
        });
        expect(loadingDispatch).toHaveBeenCalledWith({
          type: STOP_LOADING,
        });
        done();
      });
  });


  it("should call the dispatch function with the type FETCH_CAREER and payload", (done) => {
    const responseAPI = { message: "Categories fetched successfully" };
    mock.onGet(`${API_URL}/category/get_category`).replyOnce(200, responseAPI);
    actions
      .getCategory()(categoryDispatch, loadingDispatch)
      .then(() => {
        expect(loadingDispatch).toHaveBeenCalledWith({ type: START_LOADING });
        expect(categoryDispatch).toHaveBeenCalledWith({
          type: FETCH_CATEGORY,
          payload: undefined,
        });
        expect(loadingDispatch).toHaveBeenCalledWith({
          type: STOP_LOADING,
        });
        done();
      });
  });

  it("should call the dispatch function with the type DELETE_CATEGORY and payload", (done) => {
    const id = "abcd";
    const responseAPI = { message: "Category deleted successfully!" };
    mock.onDelete(`${API_URL}/category/` + id).replyOnce(200, responseAPI);
    actions
      .getCategory()(categoryDispatch, loadingDispatch)
      .then(() => {
        expect(loadingDispatch).toHaveBeenCalledWith({ type: START_LOADING });
        expect(categoryDispatch).toHaveBeenCalledWith({
          type: FETCH_CATEGORY_ERROR,
          payload: undefined,
        });
        expect(loadingDispatch).toHaveBeenCalledWith({
          type: STOP_LOADING,
        });
        done();
      });
  });

  // it("should call the dispatch function with the type UPDATE_CATEGORY and payload", () =>{

  // })
  
});
