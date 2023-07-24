<script lang="ts">
    import TechnologicalStack from '$lib/components/TechnologicalStack.svelte';
    import Team from '$lib/components/Team.svelte';
    import Welcome from '$lib/components/Welcome.svelte';
    import picture from '$lib/images/about_img/anatolii.jpg';
    import logo from '$lib/images/about_img/logo.svg';
</script>

<Welcome />

<section
    class="relative isolate overflow-hidden bg-white px-6 sm:py-32 lg:px-8 citation"
>
    <div
        class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(),white)] opacity-20"
    />
    <div
        class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"
    />
    <div class="mx-auto max-w-2xl lg:max-w-4xl">
        <img class="mx-auto citation_logo" src={logo} alt="logo" />
        <figure class="mt-10">
            <blockquote
                class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9"
            >
                <p>
                    “Budgeting is not about limiting yourself - it's about
                    empowering yourself with the knowledge of where your money
                    is going, so you can direct it towards what truly matters.”
                </p>
            </blockquote>
            <figcaption class="mt-10">
                <img
                    class="mx-auto h-10 w-10 rounded-full"
                    src={picture}
                    alt="CEO"
                />
                <div
                    class="mt-4 flex items-center justify-center space-x-3 text-base"
                >
                    <div class="font-semibold text-gray-900">
                        Anatoly Soldatov
                    </div>
                    <div class="text-gray-600">CEO of Mydget</div>
                </div>
            </figcaption>
        </figure>
    </div>
</section>

<TechnologicalStack />
<Team />

<style>
    .citation {
        margin-top: 20px;
    }
    .shadow-indigo-600\/10 {
        --tw-bg-opacity: 1;
        background-color: rgb(248 250 252 / var(--tw-bg-opacity));
    }
    @media (max-width: 900px) {
        .citation_logo {
            width: 200px;
        }
        .text-xl {
            font-size: 16px;
            line-height: 1.5;
        }
    }
</style>
