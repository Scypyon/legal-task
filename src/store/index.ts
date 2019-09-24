import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { showResultsReducer } from "./showResultsModule/showResultsReducer";

const reducers = combineReducers({
  // @ts-ignore: Unreachable code error
  results: showResultsReducer
});

export const store = createStore(reducers, applyMiddleware(thunk));

export type State = ReturnType<typeof reducers>;
