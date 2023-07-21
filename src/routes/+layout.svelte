<script lang="ts">
    import '../app.css';
    import { app as App } from '$lib/fb';
    import { onMount } from 'svelte';
    import { getAuth, onAuthStateChanged } from 'firebase/auth';
    import { goto } from '$app/navigation';
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';

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

<Footer />
