<script lang="ts">
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    import { app as App } from '$lib/fb';
    import { onMount } from 'svelte';
    import { getAuth, onAuthStateChanged } from 'firebase/auth';
    import { goto } from '$app/navigation';

    import '../app.css';
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


<svelte:head>
    <title></title>
    <meta name="author" content=" " />
    <meta name="description" content=" " />
    <meta name="keywords" content=" " />
    <meta name="viewport" content="width=device-width, initial-scale=1">
</svelte:head>



<Navbar />

<slot />

<Footer />
