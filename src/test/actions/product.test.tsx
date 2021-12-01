import {
    FETCH_PRODUCT,
    FETCH_PRODUCT_ERROR,
    START_LOADING,
    STOP_LOADING
  } from "../../actions/Types";
  import { API_URL } from "../../actions/serverConnection";
  import * as actions from "../../actions/product";
  import MockAdapter from "axios-mock-adapter";
  import axios from "axios";
  
  describe("testing product actions", () => {
    const productDispatch = jest.fn();
    const loadingDispatch = jest.fn(
      afterAll(() => {
        jest.clearAllMocks();
      })
    );
    const mock = new MockAdapter(axios);

    it("should call the dispatch function with the type FETCH_PRODUCT_ERROR and payload", (done) => {
        const id="abc"
        const responseAPI = { message: "Unable to fetch categories" };
        mock.onGet(`${API_URL}/product/get_product`).replyOnce(400, responseAPI);
        actions
          .getProductById(id)(productDispatch, loadingDispatch)
          .then(() => {
            expect(loadingDispatch).toHaveBeenCalledWith({ type: START_LOADING });
            expect(productDispatch).toHaveBeenCalledWith({
              type: FETCH_PRODUCT_ERROR,
              undefined,
            });
            expect(loadingDispatch).toHaveBeenCalledWith({
              type: STOP_LOADING,
            });
            done();
          });
      });

      it("should call the dispatch function with the type FETCH_PRODUCT and payload", (done) => {
        const id="abc"
        const responseAPI = { message: "Unable to fetch categories" };
        mock.onGet(`${API_URL}/product/get_product`).replyOnce(200, responseAPI);
        actions
          .getProductById(id)(productDispatch, loadingDispatch)
          .then(() => {
            expect(loadingDispatch).toHaveBeenCalledWith({ type: START_LOADING });
            expect(productDispatch).toHaveBeenCalledWith({
              type: FETCH_PRODUCT_ERROR,
              undefined,
            });
            expect(loadingDispatch).toHaveBeenCalledWith({
              type: STOP_LOADING,
            });
            done();
          });
      });
  })