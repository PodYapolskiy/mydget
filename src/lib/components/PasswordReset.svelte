<script lang="ts">
    import { goto } from '$app/navigation';

    import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

    export let title: string;

    const auth = getAuth();

    function resetPassword() {
        const emailInput = document.getElementById(
            'emailInput'
        ) as HTMLInputElement;
        const email: string = emailInput.value;

        sendPasswordResetEmail(auth, email)
            .then(() => {
                goto('/passwordResetSent');
            })
            .catch((error) => {
                console.log(error);
            });
    }
</script>

<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
            class="mx-auto h-32 w-auto"
            src="/logoWithoutSlogan.png"
            alt="logo"
        />
        <h2
            class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
        >
            Password Reset
        </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" on:submit|preventDefault={resetPassword}>
            <div>
                <label
                    for="emailInput"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >Email address</label
                >
                <div class="mt-2">
                    <input
                        type="email"
                        class="input input-bordered w-full max-w-lg"
                        id="emailInput"
                        aria-describedby="emailHelp"
                        placeholder="test@example.com"
                    />
                    {#if 'Login' !== title}
                        <div id="emailHelp" class="form-text">
                            Write your email address and we will send you a link
                            to reset your password.
                        </div>
                    {/if}
                </div>
            </div>
            <div>
                <button type="submit" class="font-bold btn btn-accent btn-block"
                    >Reset
                </button>
            </div>
        </form>
    </div>
</div>

<style>
    .btn-accent {
        background-color: #64e3b1;
    }
</style>
