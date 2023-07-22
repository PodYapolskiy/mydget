<script>
    import header from '$lib/images/about_img/hero.jpg';
    import feature1 from '$lib/images/about_img/feat_1.png';
    import feature2 from '$lib/images/about_img/feat_2.png';
    import feature3 from '$lib/images/about_img/feat_3.png';
    import feature4 from '$lib/images/about_img/feat_4.png';
    import sourse1 from '$lib/images/about_img/sourse_1.png';
    import sourse2 from '$lib/images/about_img/sourse_2.png';
    import sourse3 from '$lib/images/about_img/sourse_3.png';
</script>

<svelte:head>
    <title>About</title>
    <meta name="author" content="Ivan Golov" />
    <meta name="description" content="Project description page " />
    <meta name="keywords" content="features finances feedback guideline" />
</svelte:head>

<!-- Header -->
<header class="header">
    <div class="mx-auto header-conteiner">
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
            <button class="btn btn-wide bg-slate-300 header-btn">
                Let's start
            </button>
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
            <figure><img src={sourse1} alt="sourse_1" /></figure>
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
            <figure><img src={sourse2} alt="sourse_2" /></figure>
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
            <figure><img src={sourse3} alt="sourse_3" /></figure>
        </div>
    </div>
</section>

<!-- Feedback sections-->

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
    .header-conteiner {
        display: flex;
        justify-content: space-between;
        column-gap: 20px;
        padding: 30px 20px;
        max-width: 1500px;
    }

    .header-btn {
        margin: 30px 300px;
        background-color: #007349;
        color: white;
        width: 20rem;
    }

    .header-content {
        padding-top: 70px;
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

    /* Feedback */
</style>
