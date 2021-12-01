import {SIGN_UP, SIGN_UP_ERROR} from "../../actions/Types"
import {Actions, SignIn} from "../../reducers/sign-up"

describe("Testing sign-up Reducer", () => {
    it("should return state if the action type is SIGN_UP", () => {
      const action: Actions = { 
          type: SIGN_UP, 
          payload: "Admin registered successfully!" 
        };
      const returnedValue = SignIn(undefined, action);
      expect(returnedValue).toEqual(
        expect.objectContaining({
          addUserSuccess: action.payload,
        })
      );
    });

    it("should return state with error if the action type is SIGN_UP_ERROR", () => {
        const action: Actions = { 
            type: SIGN_UP_ERROR, 
            payload: "Email address already exists" 
          };
        const returnedValue = SignIn(undefined, action);
        expect(returnedValue).toEqual(
          expect.objectContaining({
            error: action.payload,
          })
        );
      });

      it("should return state with error if the action type is SIGN_UP_ERROR", () => {
        const action: Actions = { 
            type: SIGN_UP_ERROR, 
            payload: "Unable to register Admin. Please try after some time" 
          };
        const returnedValue = SignIn(undefined, action);
        expect(returnedValue).toEqual(
          expect.objectContaining({
            error: action.payload,
          })
        );
      });
})