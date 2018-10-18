<template>
    <div class="container">
        <div class="spacer"></div>
        <span class="center">I hate all of you, so shut up and play my games.</span>
        <div class="spacer"></div>
        <span class="lower">These aren't actually my games, but oh well. 🎵 A pirate's life for me. 🎵</span>
        <span class="lower">
            For updates, check out our
            <a href="https://www.github.com/skynetgames/skynetgames.github.io">GitHub</a>
            or follow us on <a href="https://twitter.com/ReallySkynet">Twitter</a>.
        </span>
    </div>
</template>

<style lang="scss">
    @import "../assets/scss/variables";

    .container {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        text-align: center;

        width: 100%;
        height: 100%;

        .spacer {
            flex: 1 1 auto;
        }

        .center {
            flex: 0 1 auto;

            font-family: $font-stack-accent;
            font-size: 50px;
        }

        .lower {
            flex: 0 1 auto;

            font-family: $font-stack-main;
            font-size: 18px;

            margin-bottom: 5px;

            a {
                text-decoration: none;
            }
        }
    }
</style>
