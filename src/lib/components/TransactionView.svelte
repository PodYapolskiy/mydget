<script lang="ts">
    import type { Timestamp } from 'firebase/firestore';

    export let id: string;
    export let date: Timestamp;
    export let amount: number;
    export let category: string;
</script>

<div class="flex justify-center items-center mt-20 mb-20">
    <div class="join-vertical">
        <div class="flex items-left">
            <!-- Adding the 'flex' and 'items-left' classes here -->
            <div>ID:</div>
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
            <div>Date:</div>
            <div>
                <div>
                    <input
                        class="input input-bordered join-item"
                        placeholder={date.toDate().toString()}
                        value={date}
                    />
                </div>
            </div>
        </div>

        <div class="flex items-left">
            <!-- Adding the 'flex' and 'items-left' classes here -->
            <div>Amount:</div>
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
            <!-- Adding the 'flex' and 'items-left' classes here -->
            <div>Category:</div>
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
    </div>
</div>
