<script lang="ts">
    /* eslint-disable max-len */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    import { app as App } from '$lib/fb';

    import '../app.css';
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
    <meta property="og:url" content="https://mydget.pages.dev" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Mydget — keep an eye on your budget!" />
    <meta
        property="og:description"
        content="Mydget will allow you to quickly and effectively manage your finances and achieve your goals and dreams."
    />
    <meta property="og:image" content="https://i.imgur.com/T8jvO4v.png" />
</svelte:head>

<Navbar />

<slot />

<Footer />
