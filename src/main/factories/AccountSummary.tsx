import { Component , h } from '@stencil/core';
import { RemoteGetAccountSummary } from '../../data/usages/remote-get-account-summary';
import { FetchHttpClient } from '../../infra/http/fetch-http-client';

@Component({
  tag: 'account-summary-component-factory'
})
export class AccountSummaryFactory {

  render() {
    let httpClient = FetchHttpClient.getInstance();
    const getAccountSummary = new RemoteGetAccountSummary(
      `${process.env.REACT_APP_WALLET_COMPONENT_API_URL}/accounts/totals`,
      httpClient
    );  
    return <account-summary-component getAccountSummary={getAccountSummary}></account-summary-component>;
  }
}
