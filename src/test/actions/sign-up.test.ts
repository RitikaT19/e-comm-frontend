import { API_URL } from "../../actions/serverConnection";
import * as actions from "../../actions/signUp";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  SIGN_UP,
  SIGN_UP_ERROR,
  START_LOADING,
  STOP_LOADING,
} from "../../actions/Types";

describe("testing SignUp actions", () => {
  const signUpDispatch = jest.fn();
  const loadingDispatch = jest.fn(
    afterAll(() => {
      jest.clearAllMocks();
    })
  );
  const mock = new MockAdapter(axios);

  it("should call the dispatch function with the type SIGN_UP and payload", (done) => {
    const responseAPI = { message: "Admin created successfully" };
    mock.onPost(`${API_URL}/auth/admin/sign_up`).replyOnce(200, responseAPI);
    actions
      .addUser({
        firstName: "firstName",
        lastName: "lastName",
        email: "email@gmail.com",
        password: "password",
      })(signUpDispatch, loadingDispatch)
      .then(() => {
        expect(loadingDispatch).toHaveBeenCalledWith({ type: START_LOADING });
        expect(signUpDispatch).toHaveBeenCalledWith({
          type: SIGN_UP,
          payload: "Admin created successfully",
        });
        expect(loadingDispatch).toHaveBeenCalledWith({ type: STOP_LOADING });
        done();
      });
  });

  it("should call the dispatch function with the type SIGN_UP_ERROR and payload", (done) => {
    const responseAPI = { message: "Not able to register admin!" };
    mock.onPost(`${API_URL}/auth/admin/sign_up`).replyOnce(400, responseAPI);
    actions
      .addUser({
        firstName: "firstName",
        lastName: "lastName",

        password: "password",
      })(signUpDispatch, loadingDispatch)
      .then(() => {
        expect(loadingDispatch).toHaveBeenCalledWith({ type: START_LOADING });
        expect(signUpDispatch).toHaveBeenCalledWith({
          type: SIGN_UP_ERROR,
          payload: "Not able to register admin!",
        });
        expect(loadingDispatch).toHaveBeenCalledWith({ type: STOP_LOADING });
        done();
      });
  });
});
