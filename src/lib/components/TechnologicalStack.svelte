<script>
    import techLogos from '../../lib/images/home_img/tech_logos.png';
</script>

<section class="bg-slate-50 tech_stack">
    <div class="flex flex-row font-bold text-xl mb-3 progress-block">
        <div class="font-bold text-xl mb-3">
            <h1>Technological Stack</h1>
            <div class="flex flex-col items-center">
                <div class="mb-2">
                    <p>Svelte</p>
                    <progress class="progress w-96 h-5" value="85" max="100" />
                </div>
                <div class="mb-2">
                    <p>TypeScript</p>
                    <progress class="progress w-96 h-5" value="9" max="100" />
                </div>
                <div class="mb-2">
                    <p>JavaScript</p>
                    <progress class="progress w-96 h-5" value="5" max="100" />
                </div>
                <div class="mb-2">
                    <p>HTML</p>
                    <progress class="progress w-96 h-5" value="2" max="100" />
                </div>
                <div class="mb-2">
                    <p>CSS</p>
                    <progress class="progress w-96 h-5" value="2" max="100" />
                </div>
            </div>
        </div>
    </div>
    <img src={techLogos} class="techLogos_img" alt="" />
</section>

<style>
    .progress-block {
        background-color: white;
        border-radius: 27px;
        padding: 20px 20px;
        margin-top: 20px;
    }

    .progress-block h1 {
        font-size: 40px;
        text-align: center;
        padding-bottom: 15px;
        color: #007349;
    }
    .tech_stack {
        display: flex;
        column-gap: 100px;
        justify-content: center;
        padding: 20px 0;
    }
    .techLogos_img {
        width: 450px;
    }
    progress::-webkit-progress-value {
        background-color: #007349;
    }
    @media (max-width: 900px) {
        .tech_stack {
            flex-direction: column;
            align-items: center;
        }

        .techLogos_img {
            width: 300px;
        }

        .progress-block {
            padding: 10px 5px;
            margin-top: 10px;
        }
        .progress-block h1 {
            font-size: 30px;
        }
        .mb-2 p {
            font-size: 18px;
        }
        .progress {
            width: 330px;
        }
    }
</style>
