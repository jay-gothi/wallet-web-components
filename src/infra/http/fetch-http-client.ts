import { HttpAuthHeader } from "../../data/protocols/http/http-auth-header";
import { HttpGetClient } from "../../data/protocols/http/http-get-client";
import { HttpPostClient } from "../../data/protocols/http/http-post-client";
import { HttpPutClient } from "../../data/protocols/http/http-put-client";
import { decrypt } from "../../utils/utils";

export class FetchHttpClient implements HttpPostClient, HttpGetClient, HttpPutClient, HttpAuthHeader{
  private static instance: FetchHttpClient;
  private static token: string;

  /**
   * Singleton class private contructor 
   */
  private constructor() { }

  /**
   * Singleton class create instance
   */
  public static getInstance(): FetchHttpClient {
      if (!FetchHttpClient.instance) {
        FetchHttpClient.instance = new FetchHttpClient();
        FetchHttpClient.token = FetchHttpClient.instance.getAuthToken();
      }
      return FetchHttpClient.instance;
  }

  /**
   * Get auth token
   * 
   * @returns string | null
   */
  getAuthToken(): string {
    if (process.env.REACT_APP_WALLET_COMPONENT_AUTH_TOKEN) {
      let ltoken = localStorage.getItem(process.env.REACT_APP_WALLET_COMPONENT_AUTH_TOKEN);
      if (ltoken && ltoken != "") {
        return decrypt(JSON.parse(ltoken));
      }
      return "";
    }
    return "";
  };

  /**
   * Post request
   * @param params 
   * @returns 
   */
  async post(params: HttpPostClient.Params): Promise<any> {
    let response: Response;
    try {
      response =  await fetch(params.url, {
        method: 'POST',
        body: JSON.stringify(params.body),
        headers: this.prepareAuthHeader(params.headers)
      });
    } catch (error) {
      response = error.json();
    }
    return response.json();
  }

  async put(params: HttpPutClient.Params): Promise<any> {
    let response: Response;
    try {
      response =  await fetch(params.url, {
        method: 'PUT',
        body: JSON.stringify(params.body),
        headers: this.prepareAuthHeader(params.headers)
      });
    } catch (error) {
      response = error.json();
    }
    return response.json();
  }

  async get(params: HttpGetClient.Params): Promise<any> {
    let response: Response;
    try {
      response =  await fetch(params.url + new URLSearchParams(params.query), {
        headers: this.prepareAuthHeader(params.headers)
      });
    } catch (error) {
      response = error.json();
    }
    return response.json();
  }

  /**
   * Prepare auth headers
   * 
   * @param headers 
   * @returns 
   */
  prepareAuthHeader(headers?: {[key: string]: string | null}) {
    if (!FetchHttpClient.token)
      FetchHttpClient.token = FetchHttpClient.instance.getAuthToken();
    if (headers && FetchHttpClient.token && FetchHttpClient.token != "")
      headers[process.env.REACT_APP_WALLET_COMPONENT_AUTH_HEADER] = FetchHttpClient.token
    return headers;
  }
}