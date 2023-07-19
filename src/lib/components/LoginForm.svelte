<script lang="ts">
    import { goto } from '$app/navigation';

    import {
        getAuth,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword
    } from 'firebase/auth';

    export let title: string;

    const auth = getAuth();

    function login() {
        const emailInput = document.getElementById(
            'emailInput'
        ) as HTMLInputElement;
        const passwordInput = document.getElementById(
            'passInput'
        ) as HTMLInputElement;
        const email: string = emailInput.value;
        const password: string = passwordInput.value;

        if (title === 'Login') {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    localStorage.setItem('uid', user.uid);
                    goto('/');
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    goto('/');
                })
                .catch((error) => {
                    console.log(error);
                });
        }
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
            Sign in to your account
        </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" on:submit|preventDefault={login}>
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
                            We'll never share your email with anyone else.
                        </div>
                    {/if}
                </div>
            </div>

            <div>
                <div class="flex items-center justify-between">
                    <label
                        for="passInput"
                        class="block text-sm font-medium leading-6 text-gray-900"
                        >Password</label
                    >
                    <div class="text-sm">
                        <a
                            href="/resetPassword"
                            class="font-semibold text-accent-focus hover:text-success"
                            >Forgot password?</a
                        >
                    </div>
                </div>
                <div class="mt-2">
                    <input
                        type="password"
                        class="input input-bordered w-full max-w-lg"
                        id="passInput"
                        placeholder="qwerty123"
                    />
                </div>
            </div>

            <div>
                <button type="submit" class="font-bold btn btn-accent btn-block"
                    >Sign in</button
                >
            </div>
        </form>

        {#if 'Login' === title}
            <p class="mt-10 text-center text-sm text-gray-500">
                Not a member?
                <a
                    href="/signup"
                    class="font-semibold text-accent-focus hover:text-success"
                    >Sign Up</a
                >
            </p>
        {/if}
    </div>
</div>

<style>
    .btn-accent {
        background-color: #64e3b1;
    }
</style>
