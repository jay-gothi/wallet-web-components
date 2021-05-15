import { Result } from "../models/result";

export interface GetAccountTransactionList {
  get(params: GetAccountTransactionList.Params): Promise<Result>;
}

export namespace GetAccountTransactionList {
  export type Params = {};
}