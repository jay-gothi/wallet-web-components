import { Result } from "../../domain/models/result";
import { GetAccountSummary } from "../../domain/usages/get-account-sumary";
import { HttpGetClient } from "../protocols/http/http-get-client";

export class RemoteGetAccountSummary implements GetAccountSummary {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient
  ) {}

  async summary(params: GetAccountSummary.Params): Promise<Result> {
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