<script lang="ts">
    // import { writable } from 'svelte/store';
    // import type { Transaction } from '../../lib/types';

    // // Declare and initialize the variables
    // let amount = 0;
    // let category = '';
    // let time = '';

    // // Create a writable store for transactions
    // const transactions = writable<Transaction[]>([]);

    // // Define the handleSubmit function
    // function handleSubmit() {
    //     if (amount <= 0 || !category || !time) {
    //         alert('Please fill in all fields with valid data.');
    //         return;
    //     }

    //     // Create a new transaction object
    //     const newTransaction: Transaction = {
    //         amount,
    //         category,
    //         time
    //     };

    //     // Update the transactions store
    //     transactions.update((prevTransactions) => [
    //         ...prevTransactions,
    //         newTransaction
    //     ]);

    //     // Clear form inputs
    //     amount = 0;
    //     category = '';
    //     time = '';
    // }

    // const amountInput = document.getElementById('amountInput');

    // amountInput.addEventListener('input', function () {
    //     const stepValue = parseInt(amountInput.getAttribute('step'));
    //     const currentValue = parseInt(amountInput.value);

    //     // Check if the input value is a multiple of the step value
    //     // If not, round it to the nearest multiple of the step value
    //     const newValue = Math.round(currentValue / stepValue) * stepValue;
    //     amountInput.value = newValue;
    // });
</script>

<div class="flex max-w-4xl flex-col mx-auto px-6 py-8 custom-font">
    <h1 class="font-bold text-2xl text-left text-gray-800 mb-8">
        Add Transaction
    </h1>
    <div class="flex flex-line">
        <input
            type="number"
            placeholder="Amount"
            class="input input-bordered text-gray-800 w-1/4 max-w-xs mr-4"
            step="100"
            id="amountInput"
            value="0"
        />

        <div class="join">
            <select class="select select-bordered join-item mr-4">
                <option disabled selected>Category</option>
                <option>Food</option>
                <option>Daily</option>
                <option>Entertainment</option>
            </select>
        </div>
        <!-- <select
            class="custom-select input-bordered text-gray-800 w-1/4 h-8 max-w-xs mr-4"
        >
            <option disabled selected>Category</option>
            <option>Food</option>
            <option>Entertainment</option>
            <option>Medicine</option>
            <option>Pets</option>
        </select> -->

        <input
            type="date"
            placeholder="Date"
            class="input input-bordered w-1/4 p-4 max-w-xs mr-4"
        />
        <div class="join">
            <button class="btn join-item">Income</button>
            <button class="btn join-item">Expense</button>
        </div>
    </div>
</div>

<style>
    ::placeholder {
        color: black;
    }
    /* .input-bordered {
        border-color: #007349;
        border-width: 1.5px;
    } */
</style>
