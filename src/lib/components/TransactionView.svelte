<script lang="ts">
    export let id: string;
    export let date: Date;
    export let amount: number;
    export let category: string;
</script>

<div class="join">
    <div>Current ID:</div>
    <div>
        <div>
            <input
                class="input input-bordered join-item"
                placeholder={id}
                value={id}
            />
        </div>
    </div>

    <div>Current Date:</div>
    <div>
        <div>
            <input
                class="input input-bordered join-item"
                placeholder={date.toDateString()}
                value={date}
            />
        </div>
    </div>

    <div>Current amount:</div>
    <div>
        <div>
            <input
                class="input input-bordered join-item"
                placeholder={amount.toString()}
                value={amount}
            />
        </div>
    </div>

    <div>Current category:</div>
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
