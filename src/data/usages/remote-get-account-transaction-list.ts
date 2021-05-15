import { Result } from "../../domain/models/result";
import { GetAccountTransactionList } from "../../domain/usages/get-account-transaction-list";
import { HttpGetClient } from "../protocols/http/http-get-client";

export class RemoteGetTransactionList implements GetAccountTransactionList {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient
  ) {}

  async get(params: GetAccountTransactionList.Params): Promise<Result> {
    const httpResponse = await this.httpGetClient.get({
      url: this.url,
      query: params,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
    });

    return httpResponse;
  }
}