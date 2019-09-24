import axios from "axios";
import { Dispatch } from "redux";
import { Repository, FailedAction, SucceedAction } from "./showResultsTypes";

export const IS_FETCHING = "showResults:IS_FETCHING";
export const FETCHING_SUCCEED = "showResults:FETCHING_SUCCED";
export const FETCHING_FAILED = "showResults:FETCHING_FAILED";

const fetchingSucceed = (data: Repository[]): SucceedAction => ({
  type: FETCHING_SUCCEED,
  data
});
const fetchingFailed = (error: string): FailedAction => ({
  type: FETCHING_FAILED,
  error
});

export const fetchResults = (query: string) => async (dispatch: Dispatch) => {
  try {
    const { data } = await axios.get(
      `https://www.courtlistener.com/api/rest/v3/${query}`
    );
    dispatch(fetchingSucceed(data));
  } catch (error) {
    dispatch(fetchingFailed(error));
  }
};
