import { LOGIN, LOGIN_ERROR } from "../../actions/Types";
import { Actions, Login } from "../../reducers/login";

describe("Testing Login Reducer", () => {
  it("should return state with token if the action type is LOGIN", () => {
    const action: Actions = { type: LOGIN, payload: "jwttoken" };
    const returnedValue = Login(undefined, action);
    expect(returnedValue).toEqual(
      expect.objectContaining({
        token: action.payload,
      })
    );
  });

  it("should return state with error if the action type is LOGIN_ERROR", () => {
    const action: Actions = { type: LOGIN, payload: "Admin not found!" };
    const returnedValue = Login(undefined, action);
    expect(returnedValue).toEqual(
      expect.objectContaining({
        token: action.payload,
      })
    );
  });
});
