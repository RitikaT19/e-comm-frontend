import { startLoading, stopLoading } from "../../actions/loading";
import { START_LOADING, STOP_LOADING } from "../../actions/Types";
describe("Testing Loading Actions", () => {
  const dispatch = jest.fn();
  afterAll(() => {
    jest.clearAllMocks();
  });
  it("should dispatch start loading", () => {
    startLoading(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: START_LOADING });
  });
  it("should dispatch stop loading", () => {
    stopLoading(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: STOP_LOADING });
  });
});
