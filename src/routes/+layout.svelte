<script>
    import '../app.css';
    import App from './fb.js';
    import { onMount } from 'svelte';
    import { getAuth, onAuthStateChanged } from 'firebase/auth';
    import { goto } from '$app/navigation.js';
    import Navbar from '../lib/components/layout/navbar/+page.svelte';

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
