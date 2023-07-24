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

<div class="overflow-x-auto ml-16 mr-16 pb-10 table-container">
    <table class="table max-w-5xl">
        <!-- head -->
        <thead>
            <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Amount</th>
                <th />
            </tr>
        </thead>
        <tbody>
            <!-- Display the list of transactions -->
            {#each currentTransactions as { id, date, amount, category }}
                <Transaction {id} {date} {amount} {category} />
            {/each}
        </tbody>
    </table>
</div>

<style>
    .table-container {
        display: flex;
        justify-content: center;
    }
    .table th {
        background-color: #007349;
        color: #fefffe;
    }
</style>
