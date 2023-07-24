<script lang="ts">
    import type { Timestamp } from 'firebase/firestore';

    export let id: string;
    export let date: Timestamp;
    export let amount: number;
    export let category: string;
    console.log(date);
    console.log(category);

    // data converter
    let dateObject = new Date(date);
    let year = dateObject.getFullYear();
    let month = (dateObject.getMonth() + 1).toString().padStart(2, '0'); // Add 1 to month since it's zero-based
    let day = dateObject.getDate().toString().padStart(2, '0');
    let formattedDate = `${year}-${month}-${day}`;
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
                            value={amount}
                        />
                    </div>
                </div>
            </div>

            <div class="flex items-left">
                <!-- <input class="join" /> -->
                <select
                    class="select input-bordered join-item mr-4 w-56 text-base font-medium"
                    value={category}
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
    <div class="flex max-w-lg mx-auto justify-end mx-4 pb-1">
        <button class="btn btn-normal w-36"> Save </button>
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
