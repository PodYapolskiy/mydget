<script lang="ts">
    import {
        addDoc,
        collection,
        doc,
        getDoc,
        Timestamp
    } from 'firebase/firestore';
    import { db } from '$lib/fb';
    import type { TransactionType } from '$lib/types';
    import { onMount } from 'svelte';

    const userID = 'rt3bWUYTLYA08n8pL7xq';

    // Array of transactions
    export let transactions: TransactionType[] = [];

    let date = new Date();
    let amount = 0;
    let category: string;
    let transactionType: string;

    const userRef = doc(db, `users/${userID}`);
    onMount(async () => {
        const user = await getDoc(userRef);
        console.log(user.get('email'));
    });

    const transactionsRef = collection(db, `users/${userID}/transactions`);

    // Time conversion from string to firebase timestamp
    const FirebaseTimestamp = Timestamp.fromDate(date);
    function addTransaction() {
        // Add transaction to the database
        addDoc(transactionsRef, {
            date: FirebaseTimestamp,
            amount: amount,
            category: category,
            type: transactionType
        });

        // Add transaction to the array locally
        // transactions.push({
        //     amount,
        //     category,
        //     type: transactionType,
        //     date: FirebaseTimestamp,
        //     id: 'ielufbIYGFQUYE4212'
        // });
        console.log(transactions);
    }
</script>

<div
    class="flex max-w-5xl flex-col mx-auto px-12 pt-6 pb-6 bg-gray-100 custom-font"
>
    <h1 class="font-bold text-2xl text-left text-gray-800 mb-8">
        Add Transaction
    </h1>

    <div class="flex flex-line justify-center">
        <input
            type="date"
            placeholder="Date"
            bind:value={date}
            class="input input-bordered w-1/4 p-4 max-w-xs mr-4"
        />
        <input
            type="number"
            placeholder="Amount"
            bind:value={amount}
            class="input input-bordered text-gray-800 w-1/6 max-w-xs mr-4"
            step="100"
            id="amountInput"
        />

        <div class="join">
            <select
                class="select input-bordered join-item mr-4"
                bind:value={category}
            >
                <option disabled selected>Category</option>
                <option>Food</option>
                <option>Daily</option>
                <option>Entertainment</option>
            </select>
        </div>
        <div class="btn-group mr-4">
            <input
                type="radio"
                name="options"
                data-title="Income"
                class="btn btn-income"
                bind:group={transactionType}
                value="Income"
            />
            <input
                type="radio"
                name="options"
                data-title="Expense"
                class="btn btn-expense"
                bind:group={transactionType}
                value="Expense"
            />
        </div>
        <button
            class="btn font-bold custom-color uppercase"
            on:click|preventDefault={addTransaction}
        >
            +Add
        </button>
    </div>
</div>

<style>
    .custom-color {
        background-color: #fefffe !important;
        border-color: rgb(80, 80, 80) !important;
        border-width: 1.5px !important;
    }
    .uppercase {
        text-transform: none;
    }
    ::placeholder {
        color: black;
    }
    .input-bordered {
        border-color: #007349;
        border-width: 1.5px;
    }

    .select {
        width: 200px;
    }
    .btn-income:checked {
        background-color: #007349 !important;
        color: #fefffe !important;
        border: #007349 !important;
    }

    .btn-expense:checked {
        background-color: #af3a1b !important;
        color: #fefffe !important;
        border: #af3a1b !important;
    }
    .btn {
        background-color: #ced0ce;
    }
</style>
