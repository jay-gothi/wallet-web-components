import { Component, h } from '@stencil/core';

@Component({
  tag: 'wallet-component',
  styleUrl: 'wallet-component.css',
  shadow: true,
})
export class WalletComponent {
  render() {
    return <div class="grid grid-cols-1">
      <div class="col-start-1">
        <account-summary-component-factory></account-summary-component-factory>

        <h1 class="uppercase text-blue-600 text-center border-t p-2">
          Account transactions
        </h1>
        <account-transaction-list-component-factory></account-transaction-list-component-factory>
      </div>
    </div>;
  }
}
