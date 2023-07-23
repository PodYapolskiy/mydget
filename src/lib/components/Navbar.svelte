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

<nav class="navigation_bar">
    <div class="navbar_custom bg-base-100">
        <div class="">
            <div class="flex-1">
                <img src="/logo_small.svg" class="w-10 h-10 element_nav" alt="logo" />
            </div>
        </div>
        <div class="navbar-center">
            <ul
                class="menu menu-horizontal  dropdown-content
            z-[1]  shadow bg-base-100 rounded-box"
            >
                <li><a href="/">Home</a></li>
                <li><a href="./about">About</a></li>
                <li><a href="/transactions">Transactions</a></li>
            </ul>
        </div>
        <div class="">
            <div class="flex-none">
                <div class="dropdown dropdown-end">
                    <button class="btn btn-ghost btn-circle avatar element_nav">
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




<style>
    .menu {
        margin-left: 10px;
        margin-top: 10px;
    }
    .navbar_custom {
        justify-content: space-around;
        display: flex;
        align-items: center;
        padding: var(--navbar-padding, 0.5rem);
        min-height: 4rem /* 64px */;
        max-width: 100%;
    }

    .element_nav {
        max-width: 100%;
    }
</style>
