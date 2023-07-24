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

<tr class="hover">
    <th>
        <label>
            <input type="checkbox" class="checkbox" />
        </label>
    </th>
    <td>
        <div class="flex items-center space-x-3">
            <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                    <img src="/food.png" alt="food" />
                </div>
            </div>
            <div>
                <div class="font-bold">{category}</div>
            </div>
        </div>
    </td>
    <td>
        {amount}
        <br />
        <span class="badge badge-ghost badge-sm">{id}</span>
    </td>
    <td>{stringDate}</td>
    <th>
        <a href={transactionPath}>
            <button class="btn btn-ghost btn-s">edit</button>
        </a>
    </th>
</tr>
