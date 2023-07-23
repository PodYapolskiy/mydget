<script lang="ts">
    import { db } from '$lib/fb';
    import { doc, collection, getDoc, getDocs } from 'firebase/firestore';
    import { onMount } from 'svelte';

    import TransactionsStatistics from '$lib/components/TransactionsStatistics.svelte';
    import AddTransaction from '$lib/components/AddTransaction.svelte';
    import FilterTransaction from '$lib/components/FilterTransaction.svelte';

    import Transaction from '$lib/components/Transaction.svelte';
    import type { TransactionType } from '$lib/types';

    let currentTransactions: TransactionType[] = [];
    onMount(async () => {
        try {
            const userID = 'rt3bWUYTLYA08n8pL7xq';

            const userRef = doc(db, `users/${userID}`);
            const user = await getDoc(userRef);
            console.log(user.get('email'));

            const transactionsRef = collection(
                db,
                `users/${userID}/transactions`
            );

            const transactions = await getDocs(transactionsRef);
            transactions.forEach((doc) => {
                const transaction = {
                    id: doc.id,
                    date: doc.get('date').toDate(),
                    amount: doc.get('amount'),
                    category: doc.get('category')
                } satisfies TransactionType;
                currentTransactions.push(transaction);
            });

            currentTransactions = currentTransactions;
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    });
</script>

<TransactionsStatistics />
<AddTransaction />
<FilterTransaction />

<!--<div class="stats shadow center-top">-->
<!--    <div class="stat">-->
<!--        <div class="stat-figure text-accent">-->
<!--            <svg-->
<!--              xmlns="http://www.w3.org/2000/svg"-->
<!--              fill="none"-->
<!--              viewBox="0 0 24 24"-->
<!--              class="inline-block w-8 h-8 stroke-current"-->
<!--            ><path-->
<!--              stroke-linecap="round"-->
<!--              stroke-linejoin="round"-->
<!--              stroke-width="2"-->
<!--              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"-->
<!--            /></svg-->
<!--            >-->
<!--        </div>-->
<!--        <div class="stat-title">Wallet</div>-->
<!--        <div class="stat-value">$31000</div>-->
<!--        <div class="stat-desc">Jan 1st - Feb 1st</div>-->
<!--    </div>-->

<!--    <div class="stat">-->
<!--        <div class="stat-figure text-accent">-->
<!--            <svg-->
<!--              xmlns="http://www.w3.org/2000/svg"-->
<!--              fill="none"-->
<!--              viewBox="0 0 24 24"-->
<!--              class="inline-block w-8 h-8 stroke-current"-->
<!--            ><path-->
<!--              stroke-linecap="round"-->
<!--              stroke-linejoin="round"-->
<!--              stroke-width="2"-->
<!--              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0-->
<!--        4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"-->
<!--            /></svg-->
<!--            >-->
<!--        </div>-->
<!--        <div class="stat-title">Income</div>-->
<!--        <div class="stat-value">$4200</div>-->
<!--        <div class="stat-desc">↗︎ 400 (22%)</div>-->
<!--    </div>-->

<!--    <div class="stat">-->
<!--        <div class="stat-figure text-accent">-->
<!--            <svg-->
<!--              xmlns="http://www.w3.org/2000/svg"-->
<!--              fill="none"-->
<!--              viewBox="0 0 24 24"-->
<!--              class="inline-block w-8 h-8 stroke-current"-->
<!--            ><path-->
<!--              stroke-linecap="round"-->
<!--              stroke-linejoin="round"-->
<!--              stroke-width="2"-->
<!--              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2-->
<!--                    2 0 002 2h10a2 2 0 002-2V8m-9 4h4"-->
<!--            /></svg-->
<!--            >-->
<!--        </div>-->
<!--        <div class="stat-title">Expenses</div>-->
<!--        <div class="stat-value">$1200</div>-->
<!--        <div class="stat-desc">↘︎ 90 (14%)</div>-->
<!--    </div>-->
<!--</div>-->

<div class="overflow-x-auto ml-16 mr-16">
    <table class="table">
        <!-- head -->
        <thead>
            <tr>
                <th>
                    <label>
                        <input type="checkbox" class="checkbox" />
                    </label>
                </th>
                <th>Name</th>
                <th>Amount</th>
                <th>Date</th>
                <th />
            </tr>
        </thead>
        <tbody>
            <!-- Display the list of transactions -->
            {#each currentTransactions as { id, date, amount, category }}
                <Transaction {id} {date} {amount} {category} />
            {/each}
        </tbody>
        <!--        &lt;!&ndash; foot &ndash;&gt;-->
        <!--        <tfoot>-->
        <!--        <tr>-->
        <!--            <th></th>-->
        <!--            <th>Name</th>-->
        <!--            <th>Job</th>-->
        <!--            <th>Favorite Color</th>-->
        <!--            <th></th>-->
        <!--        </tr>-->
        <!--        </tfoot>-->
    </table>
</div>
