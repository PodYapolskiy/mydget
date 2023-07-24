<script>
    import header from '$lib/images/about_img/hero.jpg';
    import feature1 from '$lib/images/about_img/feat_1.svg';
    import feature2 from '$lib/images/about_img/feat_2.svg';
    import feature3 from '$lib/images/about_img/feat_3.svg';
    import feature4 from '$lib/images/about_img/feat_4.svg';
    import sourse1 from '$lib/images/about_img/sourse_1.png';
    import sourse2 from '$lib/images/about_img/sourse_2.png';
    import sourse3 from '$lib/images/about_img/sourse_3.png';
</script>

<svelte:head>
    <title>About</title>
    <meta name="author" content="Ivan Golov" />
    <meta name="description" content="Project description page " />
    <meta name="keywords" content="features finances feedback guideline" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<!-- Header -->
<header class="header">
    <div class="mx-auto header-container">
        <div class="header-content">
            <div>
                <h1>
                    <span class="highlight">Mydget</span> <br /> Web Application
                    & Financial freedom
                </h1>
                <p>
                    Our project will allow you to quickly and effectively manage
                    your finances and achieve your goals and dreams.
                </p>
            </div>
            <a href="./signup"
                ><button class="btn btn-wide bg-slate-300 header-btn">
                    Let's start
                </button></a
            >
        </div>
        <div class="header_hero">
            <img
                class="header_img"
                src={header}
                alt="financial web application"
            />
        </div>
    </div>
</header>

<!-- Features -->
<section class="features bg-slate-50">
    <div class="features-list">
        <div class="container mx-auto">
            <div class="title-2">
                <h2>Features</h2>
            </div>
            <div class="features-row">
                <div class="feature-card">
                    <img
                        class="feature-card-img"
                        src={feature1}
                        alt="feature_1"
                    />
                    <h3 class="feature-card-title">Comfortable design</h3>
                    <p>Our interface is intuitive and simple to use.</p>
                </div>

                <div class="feature-card">
                    <img
                        class="feature-card-img"
                        src={feature2}
                        alt="feature_2"
                    />
                    <h3 class="feature-card-title">Multiplatform</h3>
                    <p>
                        Our app is customized for different devices and
                        platforms.
                    </p>
                </div>

                <div class="feature-card">
                    <img
                        class="feature-card-img"
                        src={feature3}
                        alt="feature_3"
                    />
                    <h3 class="feature-card-title">Statistics</h3>
                    <p>
                        We have integrated efficient systems to record and
                        analyze your revenues and expenses.
                    </p>
                </div>

                <div class="feature-card">
                    <img
                        class="feature-card-img"
                        src={feature4}
                        alt="feature_4"
                    />
                    <h3 class="feature-card-title">Multifunctionality</h3>
                    <p>
                        We provide a great set of tools to help you take control
                        of your finances.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Guidline -->
<section class="guidline">
    <div class="title-2">
        <h2>How to use</h2>
    </div>
    <div class="steps-list">
        <div class="step">
            <h1>1</h1>
            <div class="step-content">
                <h2>Track your cash flow</h2>
                <div class="suggestions">
                    <div class="form-control">
                        <label class="label cursor-pointer">
                            <input
                                type="checkbox"
                                class="checkbox checkbox-lg"
                                checked={true}
                                on:click|preventDefault={() => {
                                    return false;
                                }}
                            />
                            <span class="label-text"
                                >Fill out your transactions every day
                            </span>
                        </label>
                    </div>
                    <div class="form-control">
                        <label class="label cursor-pointer">
                            <input
                                type="checkbox"
                                class="checkbox checkbox-lg"
                                checked={true}
                                on:click|preventDefault={() => {
                                    return false;
                                }}
                            />
                            <span class="label-text"
                                >Use a categorization system for your
                                transactions</span
                            >
                        </label>
                    </div>
                    <div class="form-control">
                        <label class="label cursor-pointer">
                            <input
                                type="checkbox"
                                class="checkbox checkbox-lg"
                                checked={true}
                                on:click|preventDefault={() => {
                                    return false;
                                }}
                            />
                            <span class="label-text"
                                >Use philtres and add usefull description
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <div class="step">
            <h1>2</h1>
            <div class="step-content">
                <h2>Understand your financial trends</h2>
                <div class="suggestions">
                    <div class="form-control">
                        <label class="label cursor-pointer">
                            <input
                                type="checkbox"
                                class="checkbox checkbox-lg"
                                checked={true}
                                on:click|preventDefault={() => {
                                    return false;
                                }}
                            />
                            <span class="label-text"
                                >Analyze your finance with beautiful, simple and
                                easy to understand graphic
                            </span>
                        </label>
                    </div>
                    <div class="form-control">
                        <label class="label cursor-pointer">
                            <input
                                type="checkbox"
                                class="checkbox checkbox-lg"
                                checked={true}
                                on:click|preventDefault={() => {
                                    return false;
                                }}
                            />
                            <span class="label-text"
                                >See where your money goes and where they come
                                from every month</span
                            >
                        </label>
                    </div>
                    <div class="form-control">
                        <label class="label cursor-pointer">
                            <input
                                type="checkbox"
                                class="checkbox checkbox-lg"
                                checked={true}
                                on:click|preventDefault={() => {
                                    return false;
                                }}
                            />
                            <span class="label-text"
                                >See whether you spend less than you earn in one
                                place and on 1 tap
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <div class="step">
            <h1>3</h1>
            <div class="step-content">
                <h2>Planning your budget</h2>
                <div class="suggestions">
                    <div class="form-control">
                        <label class="label cursor-pointer">
                            <input
                                type="checkbox"
                                class="checkbox checkbox-lg"
                                checked={true}
                                on:click|preventDefault={() => {
                                    return false;
                                }}
                            />
                            <span class="label-text"
                                >Use the six-jags system
                            </span>
                        </label>
                    </div>
                    <div class="form-control">
                        <label class="label cursor-pointer">
                            <input
                                type="checkbox"
                                class="checkbox checkbox-lg"
                                checked={true}
                                on:click|preventDefault={() => {
                                    return false;
                                }}
                            />
                            <span class="label-text"
                                >Fill up your wish list
                            </span>
                        </label>
                    </div>
                    <div class="form-control">
                        <label class="label cursor-pointer">
                            <input
                                type="checkbox"
                                class="checkbox checkbox-lg"
                                checked={true}
                                on:click|preventDefault={() => {
                                    return false;
                                }}
                            />
                            <span class="label-text"
                                >Increase your income, not cut your expenses
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Usefull sourses -->
<section class="bg-slate-50">
    <div class="title-2">
        <h2>Usefull sourses</h2>
    </div>
    <div class="usefull_sourses">
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">Creating a budget</h2>
                <a
                    class="link link-hover"
                    href="https://bettermoneyhabits.bankofamerica.com/en/saving-budgeting/creating-a-budget"
                    >If you're looking to create a personal budget, start with
                    these six steps.</a
                >
            </div>
            <a
                href="https://bettermoneyhabits.bankofamerica.com/en/saving-budgeting/creating-a-budget"
                ><figure><img src={sourse1} alt="sourse_1" /></figure></a
            >
        </div>

        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">
                    9 Ways to Be More Organized With Your Money in 2023
                </h2>
                <a
                    class="link link-hover"
                    href="https://www.ramseysolutions.com/budgeting/ways-to-be-more-organized-with-your-money-this-year"
                    >Organize your money so you can have less clutter and more
                    progress.</a
                >
            </div>
            <a
                href="https://www.ramseysolutions.com/budgeting/ways-to-be-more-organized-with-your-money-this-year"
                ><figure><img src={sourse2} alt="sourse_2" /></figure></a
            >
        </div>

        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">
                    From idea to budget: how to organize your expenses
                </h2>
                <a
                    class="link link-hover"
                    href="https://fabit.app/en/2022/12/budget-how-to-organize-your-expenses/"
                >
                    This article shows you how to divide your income and how to
                    create and manage budgets in Fabit.</a
                >
            </div>
            <a
                href="https://fabit.app/en/2022/12/budget-how-to-organize-your-expenses/"
                ><figure><img src={sourse3} alt="sourse_3" /></figure></a
            >
        </div>
    </div>
</section>

<!-- Subscribe -->
<div class="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
            class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2"
        >
            <dl
                class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2"
            >
                <div class="flex flex-col items-start">
                    <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                        <svg
                            class="h-6 w-6 text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                            />
                        </svg>
                    </div>
                    <dt
                        class="mt-4 font-semibold text-black subscribe_subtitle"
                    >
                        Weekly articles
                    </dt>
                    <dd class="mt-2 leading-7 text-black-400 subscribe_content">
                        We send you weekly financial news and lifehacks.
                    </dd>
                </div>
                <div class="flex flex-col items-start">
                    <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                        <svg
                            class="h-6 w-6 text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
                            />
                        </svg>
                    </div>
                    <dt
                        class="mt-4 font-semibold text-black subscribe_subtitle"
                    >
                        No spam
                    </dt>
                    <dd class="mt-2 leading-7 text-black-400 subscribe_content">
                        We are responsible for the quality of our information
                        product.
                    </dd>
                </div>
            </dl>
            <div class="max-w-xl lg:max-w-lg">
                <h2
                    class="text-3xl font-bold tracking-tight text-black sm:text-4xl subscribe_title"
                >
                    Subscribe to our newsletter
                </h2>
                <p
                    class="mt-4 text-lg leading-8 text-black-300 subscribe_content"
                >
                    We welcome new subscribers and try to create useful and
                    relevant content.
                </p>
                <div class="mt-6 flex max-w-md gap-x-4">
                    <label for="email-address" class="sr-only"
                        >Email address</label
                    >
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autocomplete="email"
                        required
                        class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        placeholder="Enter your email"
                    />
                    <button
                        type="submit"
                        class="flex-none rounded-md subsribe_btn px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm"
                        >Subscribe</button
                    >
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .highlight {
        color: #40a759;
    }

    .title-2 h2 {
        font-size: 40px;
        font-weight: 800;
        text-align: center;
        padding: 30px 0;
        color: #007349;
    }
    /* Header */
    .header-container {
        display: flex;
        justify-content: space-between;
        column-gap: 20px;
        padding: 30px 20px;
        max-width: 1350px;
    }

    .header-btn {
        margin: 30px 250px;
        background-color: #007349;
        color: white;
        width: 20rem;
    }

    .header-content {
        padding-top: 50px;
    }

    .header-content h1 {
        line-height: 1.2;
        font-size: 70px;
        font-weight: 600;
    }
    .header-content p {
        padding-top: 10px;
        font-size: 25px;
    }

    .header_img {
        width: 1000px;
        padding-top: 60px;
    }
    /* Features */
    .features-row {
        display: flex;
        column-gap: 30px;
        row-gap: 30px;
        flex-wrap: wrap;
        margin: 30px 80px;
    }

    .feature-card {
        flex: 1 1 0;
        max-width: 315px;
        padding: 20px 0;
    }

    .feature-card p {
        font-size: 17px;
    }

    .feature-card-img {
        margin: 30px 0;
        width: 70px;
    }

    .feature-card-title {
        font-weight: 600;
        font-size: 25px;
        margin-bottom: 10px;
        color: #007349;
    }

    /* GuidLine */
    .steps-list {
        display: flex;
        flex-direction: column;
        padding: 20px 350px;
    }

    .step {
        display: flex;
        column-gap: 30px;
    }

    .step h1 {
        font-size: 200px;
    }

    .step-content {
        margin: 25px 30px;
    }

    .step-content h2 {
        font-size: 25px;
        font-weight: 600;
    }

    .suggestions {
        padding-top: 20px;
    }

    .label {
        justify-content: left;
    }

    .label-text {
        font-size: 20px;
        padding: 0 20px;
    }
    /* Usefull sourses */
    .usefull_sourses {
        display: flex;
        justify-content: center;
        column-gap: 20px;
        padding-bottom: 20px;
    }

    /* Subscribe*/
    .subsribe_btn {
        background-color: #007349;
    }

    .subscribe_title {
        color: #007349;
        font-size: 40px;
        font-weight: 600;
    }
    .subscribe_subtitle {
        color: #007349;
        font-size: 20px;
    }

    .subscribe_content {
        font-size: 20px;
    }

    /* Media */
    @media (max-width: 800px) {
        .title-2 h2 {
            font-size: 35px;
        }
        /* Header */
        .header-container {
            display: flex;
            justify-content: space-between;
            column-gap: 0px;
            padding: 30px 20px;
            max-width: 800px;
        }

        .highlight {
            font-size: 45px;
        }

        .header-btn {
            margin: 10px 0px;
            width: 20rem;
        }

        .header-content {
            max-width: 400px;
            text-align: center;
        }

        .header-content h1 {
            line-height: 1;
            font-size: 35px;
            font-weight: 600;
        }
        .header-content p {
            padding-top: 10px;
            font-size: 15px;
        }

        .header_img {
            display: none;
        }
        /* Features */
        .feature-card p {
            font-size: 15px;
        }
        .feature-card {
            flex: 1 1 0;
            max-width: 315px;
            padding: 10px 0;
        }

        /* Guidline */
        .steps-list {
            display: flex;
            flex-direction: column;
            padding: 0px 20px;
        }

        .step {
            display: flex;
            column-gap: 20px;
        }

        .step h1 {
            font-size: 100px;
        }

        .step-content {
            margin: 20px 25px;
        }

        .step-content h2 {
            font-size: 20px;
        }

        .suggestions {
            padding-top: 10px;
        }

        .label-text {
            font-size: 15px;
            padding: 0 10px;
        }

        /* Usefull sourses */
        .usefull_sourses {
            column-gap: 0px;
        }
        .card-body a {
            font-size: 15px;
        }
        .card-title {
            font-size: 18px;
            line-height: 1;
        }
        .card {
            padding: 10px 10px;
        }
        .card img {
            display: none;
        }

        .card-body {
            padding: 0 0;
        }
        /* Subscribe*/
        .subscribe_title {
            font-size: 30px;
        }
        .subscribe_subtitle {
            font-size: 20px;
        }

        .subscribe_content {
            font-size: 15px;
        }
    }
</style>
