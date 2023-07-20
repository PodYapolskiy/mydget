<script lang="ts">
    import '../app.css';
    import { onMount } from 'svelte';
    import { getAuth, onAuthStateChanged } from 'firebase/auth';
    import { goto } from '$app/navigation';
    import Navbar from '$lib/components/Navbar.svelte';

    onMount(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('Welcome to the file portal');
            } else {
                goto('./login');
            }
        });
    });
</script>

<Navbar />

<slot />
