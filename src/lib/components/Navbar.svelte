<script lang="ts">
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
    <div class="navbar bg-base-100">
        <div class="navbar-start ml-16">
            <div class="flex-1">
                <img src="/logoEye.png" class="w-10 h-10" alt="logo" />
            </div>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul
                class="menu menu-horizontal px-1 dropdown-content
                mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
            >
                <li><a href="/">Home</a></li>
                <li><a href="./about">About</a></li>
                <li><a href="/transactions">Transactions</a></li>
            </ul>
        </div>
        <div class="navbar-end mr-16">
            <div class="flex-none">
                <div class="dropdown dropdown-end">
                    <button class="btn btn-ghost btn-circle avatar">
                        <img
                            src="/SampleUserIcon.png"
                            class="w-10 rounded-full"
                            alt="logo"
                        />
                    </button>
                    <ul
                        class="menu menu-sm dropdown-content mt-3
                        z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a href=" " class="justify-between">
                                Profile
                                <span class="badge">New</span>
                            </a>
                        </li>
                        <li><a href=" ">Settings</a></li>
                        <li>
                            <a
                                href="/"
                                on:click|preventDefault={logout}
                                target="_blank">Sign Out</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</nav>
