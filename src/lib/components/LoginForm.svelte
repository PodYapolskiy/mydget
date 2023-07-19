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
            class="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
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
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        id="emailInput"
                        aria-describedby="emailHelp"
                        placeholder="Email Address"
                    />
                    {#if title !== 'Login'}
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
                            class="font-semibold text-indigo-600 hover:text-indigo-500"
                            >Forgot password?</a
                        >
                    </div>
                </div>
                <div class="mt-2">
                    <input
                        type="password"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        id="passInput"
                        placeholder="Password"
                    />
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >Sign in</button
                >
            </div>
        </form>

        {#if title === 'Login'}
            <p class="mt-10 text-center text-sm text-gray-500">
                Not a member?
                <a
                    href="/signup"
                    class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >Sign Up</a
                >
            </p>
        {/if}
    </div>
</div>
