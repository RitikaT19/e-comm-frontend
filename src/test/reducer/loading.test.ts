import { Actions, Loading } from "../../reducers/loading";
import { START_LOADING, STOP_LOADING } from "../../actions/Types";

describe("Testing Loading Reducer", () => {
  it("should return state with loading equals true if the action type START_LOADING", () => {
    const action: Actions = { type: START_LOADING };
    const returnedValue = Loading(undefined, action);
    expect(returnedValue).toEqual(expect.objectContaining({ loading: true }));
  });
  it("should return state with loading equals false if the action type STOP_LOADING", () => {
    const action: Actions = { type: STOP_LOADING };
    const returnedValue = Loading(undefined, action);
    expect(returnedValue).toEqual(expect.objectContaining({ loading: false }));
  });
});
