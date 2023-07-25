<script lang="ts">
    import { goto } from '$app/navigation';
    import type { Timestamp } from 'firebase/firestore';
    import { doc, updateDoc } from 'firebase/firestore';
    import { onMount } from 'svelte';
    // import Transaction from './Transaction.svelte';
    import { db } from '$lib/fb';
    import type { TransactionType } from '$lib/types';

    export let id: string;
    export let date: Timestamp;
    export let amount: number;
    export let category: string;

    // data converter
    let dateObject = new Date(date.toDate());
    let year = dateObject.getFullYear();
    let month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    let day = dateObject.getDate().toString().padStart(2, '0');
    let formattedDate = `${year}-${month}-${day}`;

    let dateInputValue: Timestamp = date;
    let amountInputValue: number = amount;
    let categoryInputValue: string = category;

    const updateTransaction = (
        date: Timestamp,
        amount: number,
        category: string
    ) => {
        const userID = 'rt3bWUYTLYA08n8pL7xq';
        const updatedData = { date, amount, category } as TransactionType;

        const transactionRef = doc(db, `users/${userID}/transactions`, id);
        updateDoc(transactionRef, updatedData);

        goto('/transactions');
    };
</script>

<div class="max-w-md mx-auto px-6 pt-1 pb-3 my-8 border border-custom">
    <div class="flex max-w-md flex-line mx-auto pl-3 pr-0 pt-4 pb-4">
        <div class="flex flex-col w-32 text-xl text-start mt-3 mr-8">
            <div class="mb-7">ID</div>
            <div class="mb-6">Date</div>
            <div class="mb-7">Amount</div>
            <div>Category</div>
        </div>
        <div class="join-vertical space-y-2">
            <div class="flex items-left">
                <div class="join">
                    <div>
                        <input
                            class="input input-bordered join-item w-56"
                            placeholder={id}
                            value={id}
                            readonly
                        />
                    </div>
                </div>
            </div>

            <div class="flex items-left">
                <div>
                    <div>
                        <input
                            type="date"
                            class="input input-bordered join-item w-56"
                            placeholder={date.toDate().toString()}
                            value={formattedDate}
                        />
                    </div>
                </div>
            </div>

            <div class="flex items-left">
                <div>
                    <div>
                        <input
                            type="number"
                            class="input input-bordered join-item w-56"
                            placeholder={amount.toString()}
                            bind:value={amountInputValue}
                        />
                    </div>
                </div>
            </div>

            <div class="flex items-left">
                <!-- <input class="join" /> -->
                <select
                    class="select input-bordered join-item mr-4 w-56 text-base font-medium"
                    bind:value={category}
                >
                    <option disabled selected>Category</option>
                    <option>Food</option>
                    <option>Daily</option>
                    <option>Minibar</option>
                    <option>Entertainment</option>
                </select>
            </div>
        </div>
    </div>
    <div class="flex max-w-lg mx-auto justify-end mx-5 pb-1">
        <button
            class="btn btn-normal w-36"
            on:click|preventDefault={() => {
                updateTransaction(date, amountInputValue, categoryInputValue);
            }}>Save</button
        >
    </div>
</div>

<style>
    .btn {
        background-color: #007349;
        color: #fefffe;
    }
    .border-custom {
        border-color: #007349;
        border-radius: 6px;
        border-width: 3px;
    }
</style>
