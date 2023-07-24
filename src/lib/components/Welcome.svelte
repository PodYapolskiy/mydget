<script>
    import picture from '../images/home_img/welcome.jpg';
</script>

<section class="welcome">
    <div class="wrapper">
        <div class="text">Let's get acquainted!</div>
    </div>
    <img class="welcome_img" src={picture} alt="welcome" />
</section>

<style>
    .welcome_img {
        position: relative;
        left: 900px;
        width: 450px;
    }

    .wrapper {
        display: flex;
        position: absolute;
        margin: 200px 100px;
    }

    .text {
        width: 18ch;
        color: #007349;
        font-size: 70px;
        font-weight: 600;
        white-space: nowrap;
        overflow: hidden;
        border-right: 3px solid white;
        animation: cursor 1.8s step-end, printed_text 1s steps(29);
    }

    @keyframes cursor {
        0% {
            border-color: black;
        }

        50% {
            border-color: transparent;
        }

        100% {
            border-color: black;
        }
    }

    @keyframes printed_text {
        from {
            width: 0;
        }
    }

    /* Media */
    @media (max-width: 900px) {
        /* Welcome */
        .welcome {
            display: flex;
            flex-direction: column;
        }
        .welcome_img {
            width: 400px;
            left: 1px;
        }

        .wrapper {
            margin: 20px 20px;
            position: relative;
        }

        .text {
            width: 18ch;
            font-size: 33px;
        }
        @media (min-width: 390px) {
            .wrapper {
                margin: 20px 30px;
            }
        }
        @media (min-width: 400px) {
            .wrapper {
                margin: 20px 40px;
            }
        }
    }
</style>
