<script lang="ts">
    import { db } from '../fb';
    import { collection, getDocs } from 'firebase/firestore';
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import { readable } from 'svelte/store';
    import type { Transaction } from '../types';

    let amount = 0;
    let category = '';
    let time = '';

    // Temporary storage for transactions
    const transactions = writable<Transaction[]>([]);

    function handleSubmit() {
        // Data validation
        if (amount <= 0 || !category || !time) {
            alert('Please fill in all fields with valid data.');
            return;
        }

        // Create a new transaction object
        const newTransaction: Transaction = {
            amount,
            category,
            time
        };

        // Update the transactions store
        transactions.update((prevTransactions) => [
            ...prevTransactions,
            newTransaction
        ]);

        // Clear form inputs
        amount = 0;
        category = '';
        time = '';
    }

    onMount(async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'transactions'));
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
            });
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    });
</script>

<main>
    <h1 class="font-bold text-6xl text-left text-gray-800 m-96">
        Add Transaction
    </h1>
    <form on:submit|preventDefault={handleSubmit}>
        <label>
            Amount:
            <input type="number" bind:value={amount} step="0.01" />
        </label>
        <label>
            Category:
            <input type="text" bind:value={category} />
        </label>
        <label>
            Time:
            <input type="datetime-local" bind:value={time} />
        </label>
        <button type="submit">Add Transaction</button>
    </form>
    <h1>Transactions</h1>
    {#each $transactions as transaction}
        <div>
            <p>Amount: {transaction.amount}</p>
            <p>Category: {transaction.category}</p>
            <p>Time: {transaction.time}</p>
        </div>
    {/each}
</main>

<div class="stats shadow center-top">
    <div class="stat">
        <div class="stat-figure text-accent">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-8 h-8 stroke-current"
                ><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                /></svg
            >
        </div>
        <div class="stat-title">Wallet</div>
        <div class="stat-value">$31000</div>
        <div class="stat-desc">Jan 1st - Feb 1st</div>
    </div>

    <div class="stat">
        <div class="stat-figure text-accent">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-8 h-8 stroke-current"
                ><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0
        4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                /></svg
            >
        </div>
        <div class="stat-title">Income</div>
        <div class="stat-value">$4200</div>
        <div class="stat-desc">↗︎ 400 (22%)</div>
    </div>

    <div class="stat">
        <div class="stat-figure text-accent">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-8 h-8 stroke-current"
                ><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2
                    2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                /></svg
            >
        </div>
        <div class="stat-title">Expenses</div>
        <div class="stat-value">$1200</div>
        <div class="stat-desc">↘︎ 90 (14%)</div>
    </div>
</div>
