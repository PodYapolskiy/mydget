<script lang="ts">
    export let id: string;
    export let amount: number;
    export let category: string;
    export let date: Date;

    const timestamp = {
        seconds: 1689858000,
        nanoseconds: 240000000
    };

    function formatTimestamp() {
        date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1e6);
        return date.toLocaleString();
    }

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
    <td>{formatTimestamp()}</td>
    <th>
        <a href={transactionPath}>
            <button class="btn btn-ghost btn-xs">edit</button>
        </a>
    </th>
</tr>
