<script lang="ts">
    import format from 'date-fns/format';
    import type { Timestamp } from 'firebase/firestore';

    export let id: string;
    export let date: Timestamp;
    export let amount: number;
    export let category: string;

    const stringDate = format(date.toDate(), 'dd.MM.yyyy');
    const transactionPath = `/transactions/${id}`;
</script>

<tr class="hover transaction-row">
    <!-- Added 'transaction-row' class to the row -->
    <td>{stringDate}</td>
    <td class="">
        {amount}
    </td>
    <td>
        <div class="flex items-center space-x-3">
            <div class="avatar">
                <div class="mask mask-squircle w-11 h-11">
                    <img src="/food.png" alt="food" />
                </div>
            </div>
            <div>
                <div class="font-bold">{category}</div>
            </div>
        </div>
    </td>
    <td>
        <a href={transactionPath}>
            <button class="btn btn-ghost btn-md ml-24 w-32">edit</button>
        </a>
    </td>
</tr>

<style>
    .transaction-row td {
        width: 25%;
        border-bottom: 1px solid #007349;
    }
</style>
