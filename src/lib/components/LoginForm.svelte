<script lang="ts">
    import { goto } from '$app/navigation';

    import {
        getAuth,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        GoogleAuthProvider,
        signInWithPopup
    } from 'firebase/auth';
    import { doc, setDoc, Timestamp } from 'firebase/firestore';

    import { db } from '$lib/fb';
    import type { TransactionType } from '$lib/types';

    const mockTransaction = {
        date: Timestamp.fromDate(new Date()),
        amount: 0,
        category: 'Bruh'
    } as TransactionType;

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
                    goto('/transactions');
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);

                    // create user in firestore
                    setDoc(doc(db, 'users', user.uid), {
                        email: user.email
                    });

                    // create a nessasary at least one doc to keep collection
                    setDoc(
                        doc(db, `users/${user.uid}/transactions`, 'Bruh ID'),
                        mockTransaction
                    );

                    localStorage.setItem('uid', user.uid);
                    goto('/transactions');
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    function googleLogin() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken; // check for error when token is used
                console.log(token);

                const user = result.user;
                console.log(user);

                setDoc(doc(db, 'users', user.uid), {
                    email: user.email
                });

                setDoc(
                    doc(db, `users/${user.uid}/transactions`, 'Bruh ID'),
                    mockTransaction
                );

                localStorage.setItem('uid', user.uid);
                goto('/transactions');
            })
            .catch((error) => {
                console.log(error);
            });
    }
</script>

<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
            class="mx-auto mb-0 h-32 w-auto"
            src="/logoWithoutSlogan.png"
            alt="logo"
        />
        {#if title === 'Login'}
            <h2 class="mt-5 text-center text-2xl font-bold text-gray-900">
                Sign in to your account
            </h2>
        {:else}
            <h2 class="mt-5 text-center text-2xl font-bold text-gray-900">
                Create an account
            </h2>
        {/if}
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
                </div>
            </div>

            <div>
                <div class="flex items-center justify-between">
                    <label
                        for="passInput"
                        class="block text-sm font-medium text-gray-900"
                        >Password</label
                    >
                    {#if title === 'Login'}
                        <div class="text-sm">
                            <a
                                href="/resetPassword"
                                class="font-semibold custom-color hover:text-success"
                                >Forgot password?</a
                            >
                        </div>
                    {/if}
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

            {#if title !== 'Login'}
                <div>
                    <button
                        type="submit"
                        class="font-bold btn text-white custom-background btn-block"
                        >Create account</button
                    >
                </div>
            {:else}
                <div>
                    <button
                        type="submit"
                        class="font-bold btn text-white custom-background btn-block"
                        >Sign in</button
                    >
                </div>
                <div>
                    <button
                        type="button"
                        class="font-bold btn btn-block"
                        on:click={googleLogin}
                        >Sign in with Google
                        <img
                            src="/GoogleGLogo.svg.png"
                            alt="googlelogo"
                            class="w-5 h-5"
                        /></button
                    >
                </div>
            {/if}
        </form>
        {#if title === 'Login'}
            <p class="mt-10 text-center text-sm text-gray-500">
                Not a member?
                <a
                    href="/signup"
                    class="font-semibold custom-color hover:text-success"
                    >Sign Up</a
                >
            </p>
        {:else}
            <p class="mt-10 text-center text-sm text-gray-500">
                Already a member?
                <a
                    href="/login"
                    class="font-semibold custom-color hover:text-success"
                    >Sign In</a
                >
            </p>
        {/if}
    </div>
</div>

<style>
    .custom-background {
        background-color: #40a759;
    }
    .custom-color {
        color: #40a759;
    }
</style>
