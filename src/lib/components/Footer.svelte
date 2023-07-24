<script>
    import icon1 from '$lib/images/footer_img/email.svg';
    import icon2 from '$lib/images/footer_img/github.svg';
    import icon3 from '$lib/images/footer_img/telegram.svg';
</script>

<footer class="footer footer-center p-10 bg-gray-800 text-base-content rounded">
    <div class="grid grid-flow-col gap-4">
        <a class="link link-hover text-white" href="./">Home</a>
        <a class="link link-hover text-white" href="./about">About</a>
        <a class="link link-hover text-white" href="./transactions"
            >Transactions</a
        >
    </div>
    <div>
        <div class="grid grid-flow-col gap-3">
            <a href="https://github.com/PodYapolskiy/mydget.git"
                ><img src={icon2} alt="github" /></a
            >
            <a href="https://t.me/podyapolskiyaa"
                ><img src={icon3} alt="telegram" /></a
            >
            <a href="https://mail.google.com/mail/u/1/#inbox"
                ><img src={icon1} alt="email" /></a
            >
        </div>
    </div>
    <div>
        <p class="text-white">Mydget — keep an eye on your budget!</p>
    </div>
</footer>

<style>
    .bg-gray-800 {
        background-color: #005c3b;
    }
    .text-white {
        font-size: 17px;
    }
</style>
