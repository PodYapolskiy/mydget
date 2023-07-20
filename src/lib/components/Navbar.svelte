<script>
    import { goto } from '$app/navigation';
    import { getAuth, signOut } from 'firebase/auth';

    const auth = getAuth();

    function logout() {
        signOut(auth)
            .then(() => {
                localStorage.removeItem('uid');
                goto('./login');
            })
            .catch((error) => {
                console.error(error);
            });
    }
</script>

<nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-right">
            <div
                class="flex flex-1 items-right justify-right sm:items-stretch sm:justify-start"
            >
                <div class="hidden sm:ml-6 sm:block">
                    <div class="flex space-x-4">
                        <a
                            href="/"
                            class="btn btn-active btn-neutral"
                            aria-current="page">Home</a
                        >
                        <a
                            href="/transactions"
                            class="btn btn-active btn-neutral">Transactions</a
                        >
                        <a
                            href="/"
                            class="btn btn-active btn-neutral"
                            on:click|preventDefault={logout}
                            target="_blank">Sign Out</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>
