<template>
    <div class="container">
        <div class="upper">
            <span>I hate all of you, so shut up and play my games.</span>
        </div>
        <div class="lower">
            <span>These aren't actually my games, but oh well. ♫ A pirate's life for me. ♫</span>
            <span>For updates, check out our <a href="https://github.com/SkynetGames/skynet">GitHub</a> or follow us on <a href="https://twitter.com/ReallySkynet">Twitter</a>.</span>
        </div>
    </div>
</template>

<style lang="scss">
@import "../assets/scss/colors";
@import "../assets/scss/fonts";

.container {
    display: flex;
    flex-flow: column nowrap;

    width: 100%;
    height: 100%;

    text-align: center;

    .upper {
        display: flex;
        flex-flow: column nowrap;
        flex: 1 1 auto;
        justify-content: center;
        align-items: center;

        span {
            flex: 0 0 auto;
            font-family: $font-stack-main;
            font-size: 50px;
        }
    }

    .lower {
        display: flex;
        flex-flow: column nowrap;
        flex: 0 0 auto;
        align-items: center;

        span {
            flex: 0 0 auto;
            font-family: $font-stack-main;
            font-size: 20px;

            a {
                text-decoration: none;
                color: blue;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
}
</style>
