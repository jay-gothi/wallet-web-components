import { Component , h } from '@stencil/core';
import { BASE_URL } from '../../../base';
import { RemoteGetAccountSummary } from '../../data/usages/remote-get-account-summary';
import { FetchHttpClient } from '../../infra/http/fetch-http-client';

@Component({
  tag: 'account-summary-component-factory'
})
export class AccountSummaryFactory {

  render() {
    let httpClient = FetchHttpClient.getInstance();
    const getAccountSummary = new RemoteGetAccountSummary(
      `${BASE_URL}/accounts/totals`,
      httpClient
    );  
    return <account-summary-component getAccountSummary={getAccountSummary}></account-summary-component>;
  }
}
