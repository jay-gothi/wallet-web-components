import { Component, h, Prop, State } from '@stencil/core';
import { AccountTransaction } from '../../../domain/models/account-transaction';
import { Result } from '../../../domain/models/result';
import { GetAccountTransactionList } from '../../../domain/usages/get-account-transaction-list';

@Component({
  tag: 'account-transaction-list-component',
  styleUrl: 'account-transaction-list-component.css'
})
export class AccountTransactionListComponent {
  
  /** Get account transaction list */
  @Prop() getAccountTransactionList: GetAccountTransactionList;

  /** loading */
  @State() loading: boolean;

  /** Account transactions */
  @State() transactions: AccountTransaction[];

  /**
   * When component loads 
   * fetch account transactions
   * 
   * @returns 
   */
  componentWillLoad() {
    return this.fetchAccountTransactions();
  }

  /**
   * Fetch account transactions
   */
  async fetchAccountTransactions() {
    this.loading = true;
    let result: Result = await this.getAccountTransactionList.get({});
    if (result)
      this.transactions = result.account_transactions;
    this.loading = false;
  }

  render() {
    return <div class="overflow-y-auto h-96">
      <ul class="list-none">
        {
          this.transactions.map(t => {
            return <account-transaction-component transaction={t}></account-transaction-component>;
          })
        }
      </ul>
    </div>;
  }
}
