import { Component , h } from '@stencil/core';
import { RemoteGetTransactionList } from '../../data/usages/remote-get-account-transaction-list';
import { FetchHttpClient } from '../../infra/http/fetch-http-client';

@Component({
  tag: 'account-transaction-list-component-factory'
})
export class AccountTransactionListComponentFactory {

  render() {
    let httpClient = FetchHttpClient.getInstance();
    const remoteGetCategoryList = new RemoteGetTransactionList(
      `${process.env.REACT_APP_WALLET_COMPONENT_API_URL}/account_transactions`,
      httpClient
    );  
    return <account-transaction-list-component getAccountTransactionList={remoteGetCategoryList}></account-transaction-list-component>;
  }
}
