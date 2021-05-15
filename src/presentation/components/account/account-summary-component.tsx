import { Component, Prop, h, State } from '@stencil/core';
import { Result } from '../../../domain/models/result';
import { GetAccountSummary } from '../../../domain/usages/get-account-sumary';


type Summary = {
    total_amount: number;
    total_pending: number;
    total_converted: number;
};

@Component({
  tag: 'account-summary-component',
  styleUrl: 'account-summary-component.css'
})
export class AccountSummaryComponent {

    /** Get account summary */
    @Prop() getAccountSummary: GetAccountSummary;

    /** loading */
    @State() loading: boolean;

    /** Account transactions */
    @State() summary: Summary;

    /**
     * When component loads 
     * fetch account transactions
     * 
     * @returns 
     */
    componentWillLoad() {
        return this.fetchAccountSummary();
    }

    /**
     * Fetch account transactions
     */
    async fetchAccountSummary() {
        this.loading = true;
        let result: Result = await this.getAccountSummary.summary({});
        if (result)
            this.summary = {
                total_amount: result.total_amount,
                total_pending: result.total_pending,
                total_converted: result.total_converted
            };
        this.loading = false;
    }

    render() {
        return <div class="grid grid-cols-1">
            <div class="relative z-10 col-start-1 row-start-1 px-4 pt-20 pb-3 bg-gradient-to-t from-black">
                <p class="text-sm font-medium text-white">Current balance</p>
                <h2 class="text-6xl font-semibold text-white">
                    ₹ { this.summary.total_amount }
                </h2>
            </div>
            <div class="col-start-1 row-start-2 px-4 sm:pb-16">
                <div class="flex items-center text-sm font-medium my-2 text-gray-400">
                    <div class="ml-1 mr-5">
                        <span class="text-lg">₹{ this.summary.total_pending }</span>
                    </div>
                    <div>Pending amount</div>
                </div>
                <hr class="w-16 border-gray-300 hidden sm:block" />
            </div>
            <div class="col-start-1 row-start-1 flex">
                <div class="w-full grid grid-cols-3 grid-rows-2 gap-2">
                    <div class="relative col-span-3 row-span-2 bg-gray-400">
                    </div>
                </div>
            </div>
        </div>;
      }
}