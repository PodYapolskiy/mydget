<script lang="ts">
    // import { writable } from 'svelte/store';
    // import type { Transaction } from '../../lib/types';

    // Declare and initialize the variables
    let amount = 0;
    let category = 'Category';
    let time = '';

    // // Create a writable store for transactions
    // const transactions = writable<Transaction[]>([]);

    // Define the handleSubmit function
    function handleSubmit() {
        if (
            amount <= 0 ||
            !category ||
            category === 'Category' ||
            !time ||
            amount > 1000000000
        ) {
            // alert('Please fill in all fields with valid data.');
            const modal = document.getElementById(
                'my_modal_1'
            ) as HTMLDialogElement;
            const errorMessage = document.getElementById(
                'error_message'
            ) as HTMLParagraphElement;
            errorMessage.innerHTML =
                'Please fill in all fields with valid data.';
            if (!time) {
                errorMessage.innerHTML += '<br>Please select a date.';
            }
            if (!amount) {
                errorMessage.innerHTML += '<br>Amount cannot be 0.';
            }
            if (amount < 0) {
                errorMessage.innerHTML += '<br>Amount cannot be negative.';
            }
            if (amount > 1000000000) {
                errorMessage.innerHTML +=
                    '<br>Amount cannot be greater than 1 billion.';
            }
            if (!category || category === 'Category') {
                errorMessage.innerHTML += '<br>Please select a category.';
            }

            modal.showModal();
            return;
        }
    }

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

<dialog id="my_modal_1" class="modal">
    <form method="dialog" class="modal-box">
        <h3 class="font-bold text-lg">Invalid input!</h3>
        <p id="error_message" class="py-4" />
        <div class="modal-action">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn">Close</button>
        </div>
    </form>
</dialog>

<div
    class="flex max-w-5xl flex-col mx-auto px-12 pt-6 pb-6 bg-gray-100 custom-font"
>
    <h1 class="font-bold text-2xl text-left text-gray-800 mb-8">
        Add Transaction
    </h1>
    <form on:submit|preventDefault={handleSubmit}>
        <div class="flex flex-line justify-center">
            <input
                type="date"
                placeholder="Date"
                class="input input-bordered w-1/4 p-4 max-w-xs mr-4"
                bind:value={time}
            />
            <input
                type="number"
                placeholder="Amount"
                class="input input-bordered text-gray-800 w-1/6 max-w-xs mr-4"
                id="amountInput"
                bind:value={amount}
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
                />
                <input
                    type="radio"
                    name="options"
                    data-title="Expense"
                    class="btn btn-expense"
                    checked
                />
            </div>
            <button class="btn font-bold custom-color uppercase"> +Add </button>
        </div>
    </form>
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
