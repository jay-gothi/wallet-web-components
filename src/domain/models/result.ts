import { AccountTransaction } from "./account-transaction";

export interface Result {
  account_transactions: AccountTransaction[];
  total: number;
  errors: {},
  success: boolean,
  total_amount: number,
  total_converted: number,
  total_pending: number
};

export const EmptyResponse: Result = {
  account_transactions: [],
  total: 0,
  errors: {},
  success: false,
  total_amount: 0,
  total_converted: 0,
  total_pending: 0
}