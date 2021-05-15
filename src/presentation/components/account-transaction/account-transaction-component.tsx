import { Component, h, Prop } from "@stencil/core";
import { AccountTransaction } from "../../../domain/models/account-transaction";
import { AppDate } from "../../../utils/date";

@Component({
    tag: 'account-transaction-component',
    styleUrl: 'account-transaction-component.css'
})
export class AccountTransactionComponent {

    /** Account transction */
    @Prop() transaction: AccountTransaction;

    render() {
        let credit: boolean = this.transaction.type == 'credit' ? true: false;
        return <li class="p-2 pr-0 flex border-t pb-5 rounded-5 border-blue-100">
            <div class={`text-2xl flex-initial rounded-full h-24 w-24 flex text-white items-center justify-center font-medium ` + (credit ? "bg-green-300" : 'bg-red-300')}>
                ₹{ this.transaction.amount }
            </div>
            <div class="flex-1">
                <div class="text-xs float-right rounded-l-full py-1 px-4 bg-gray-300">
                    { (new AppDate()).toDateMonthStr() }
                </div>
                <div class="pl-5">
                    <div class="text-lg pr-16">{ this.transaction.title }</div>
                    <div class="text-sm text-gray-400">{ this.transaction.description }</div>
                </div>
            </div>
        </li>;
    }
  }