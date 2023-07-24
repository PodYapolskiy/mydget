<script lang="ts">
    import {
        doc,
        getDoc,
        setDoc,
        collection,
        Timestamp
    } from 'firebase/firestore';
    import { onMount } from 'svelte';
    import { v4 as uuidv4 } from 'uuid'; // generate random id

    import { db } from '$lib/fb';
    import type { TransactionType } from '$lib/types';
  
    // Declare and initialize the variables
    let amount = 0;
    let category = 'Category';
    let time = '';

    // array of transactions
    export let transactions: TransactionType[] = [];

    // default transaction input form values
    let dateInputValue = new Date(); // Timestamp.fromDate(new Date())
    let amountInputValue: number;
    let categoryInputValue: string;
    let transactionType: string;
    
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

    // get user email
    const userID = 'rt3bWUYTLYA08n8pL7xq'; // TODO: change
    const userRef = doc(db, `users/${userID}`);
    onMount(async () => {
        const user = await getDoc(userRef);
    });

    // path to transactions
    const transactionsRef = collection(db, `users/${userID}/transactions`);
    const addTransaction = (
        date: Timestamp,
        amount: number,
        category: string
    ) => {
        // save negative amouiunt for expenses
        amount = transactionType === 'Income' ? amount : -amount;

        const id = uuidv4();
        const data = { date, amount, category } as TransactionType;

        try {
            // add doc to the server
            setDoc(doc(db, `users/${userID}/transactions`, id), data);

            // add transaction to the array locally
            data.id = id;
            transactions.push(data satisfies TransactionType);
            transactions = transactions; // reactivity
            console.log(transactions);

            // clean up input fiels if success
            dateInputValue = new Date();
            amountInputValue = 0;
            categoryInputValue = 'Category';
        } catch (error) {
            // TODO: show a modal with error
            console.log(error);
        }
    };
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
            bind:value={dateInputValue}
            class="input input-bordered w-1/4 p-4 max-w-xs mr-4"
        />
        <input
            type="number"
            placeholder="Amount"
            bind:value={amountInputValue}
            class="input input-bordered text-gray-800 w-1/6 max-w-xs mr-4"
            step="100"
            id="amountInput"
        />

        <div class="join">
            <select
                class="select input-bordered join-item mr-4"
                bind:value={categoryInputValue}
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
            <button
            class="btn font-bold custom-color uppercase"
            on:click|preventDefault={() => {
                addTransaction(
                    Timestamp.fromDate(new Date(dateInputValue)),
                    amountInputValue,
                    categoryInputValue
                );
            }}
        >
            +Add
        </button>
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
