<script lang="ts">
    import TransactionView from '$lib/components/TransactionView.svelte';
    import type { PageData } from './$types';

    export let data: PageData;
    const { id, date, amount, category } = data;
</script>

<TransactionView {id} {date} {amount} {category} />
