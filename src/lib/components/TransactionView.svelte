<script lang="ts">
    export let id: string;
    export let date: Date;
    export let amount: number;
    export let category: string;
</script>

<div class="max-w-md mx-auto px-6 py-3 my-8 border border-custom">
    <div class="flex max-w-md flex-line mx-auto pl-3 pr-1 pt-4 pb-4">
        <div class="flex flex-col w-32 text-xl text-start mt-3 mr-8">
            <div class="mb-6">ID</div>
            <div class="mb-6">Date</div>
            <div class="mb-6">Amount</div>
            <div>Category</div>
        </div>
        <div class="join-vertical space-y-1">
            <div class="flex items-left">
                <!-- Adding the 'flex' and 'items-left' classes here -->
                <!-- <div>ID:</div> -->
                <div class="join">
                    <div>
                        <input
                            class="input input-bordered join-item"
                            placeholder={id}
                            value={id}
                        />
                    </div>
                </div>
            </div>

            <div class="flex items-left">
                <!-- Adding the 'flex' and 'items-left' classes here -->
                <!-- <div>Date:</div> -->
                <div>
                    <div>
                        <input
                            class="input input-bordered join-item"
                            placeholder={date.toDateString()}
                            value={date}
                        />
                    </div>
                </div>
            </div>

            <div class="flex items-left">
                <!-- Adding the 'flex' and 'items-left' classes here -->
                <!-- <div>Amount:</div> -->
                <div>
                    <div>
                        <input
                            class="input input-bordered join-item"
                            placeholder={amount.toString()}
                            value={amount}
                        />
                    </div>
                </div>
            </div>

            <div class="flex items-left">
                <!-- <div>Category:</div> -->
                <div>
                    <div>
                        <input
                            class="input input-bordered join-item"
                            placeholder={category}
                            value={category}
                        />
                    </div>
                </div>
            </div>
            <!-- <div class="flex max-w-3xl mt-3">
            <button class="btn btn-wide"> +Add </button>
        </div> -->
        </div>
    </div>
    <div class="flex max-w-lg mx-auto justify-end mx-3 pb-1">
        <button class="btn btn-normal w-32"> Save </button>
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
