<script lang="ts">
    import { db } from '$lib/fb';
    import { collection, getDocs } from 'firebase/firestore';
    import { onMount } from 'svelte';
    import TransactionsStatistics from '$lib/components/TransactionsStatistics.svelte';
    import AddTransaction from '$lib/components/AddTransaction.svelte';
    import FilterTransaction from '$lib/components/FilterTransaction.svelte';

    // onMount(async () => {
    //     try {
    //         const querySnapshot = await getDocs(collection(db, 'transactions'));
    //         querySnapshot.forEach((doc) => {
    //             console.log(`${doc.id} => ${doc.data()}`);
    //         });
    //     } catch (error) {
    //         console.error('Error fetching transactions:', error);
    //     }
    // });
</script>

<TransactionsStatistics />
<AddTransaction />
<FilterTransaction />
