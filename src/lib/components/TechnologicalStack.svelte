<script>
    import techLogos from '../../lib/images/home_img/tech_logos.png';
</script>

<section class="bg-slate-50 tech_stack">
    <div class="flex flex-row font-bold text-xl mb-3 progress-block">
        <div class="font-bold text-xl mb-3">
            <p>Technological Stack</p>
            <div class="flex flex-col items-center">
                <div class="mb-2">
                    <p>Svelte</p>
                    <progress class="progress w-96 h-5" value="0" max="100" />
                </div>
                <div class="mb-2">
                    <p>TypeScript</p>
                    <progress class="progress w-96 h-5" value="100" max="100" />
                </div>
                <div class="mb-2">
                    <p>JavaScript</p>
                    <progress class="progress w-96 h-5" value="40" max="100" />
                </div>
                <div class="mb-2">
                    <p>HTML</p>
                    <progress class="progress w-96 h-5" value="70" max="100" />
                </div>
                <div class="mb-2">
                    <p>CSS</p>
                    <progress class="progress w-96 h-5" value="100" max="100" />
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

    .tech_stack {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
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
</style>
