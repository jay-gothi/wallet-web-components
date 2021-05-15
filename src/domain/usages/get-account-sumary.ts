import { Result } from "../models/result";

export interface GetAccountSummary {
  summary(params: GetAccountSummary.Params): Promise<Result>;
}

export namespace GetAccountSummary {
  export type Params = {};
}