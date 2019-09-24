import { Action } from "redux";

export interface Repository {
  count: number;
  next: string;
  previous: null;
  results: Array<Object>;
}

export interface SucceedAction extends Action {
  data: Repository[];
}

export interface FailedAction extends Action {
  error: string;
}

export type SearchAction = SucceedAction | FailedAction;
