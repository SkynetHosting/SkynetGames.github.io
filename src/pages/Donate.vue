<template>
    <div id="donate-outer">
        <div class="container-inner">
            <span class="big">The content here may be free, but the server time sure isn't!</span>
            <span>So if you could spare a dollar (or ten), you could think about helping us stay afloat...</span>
            <a href="https://commerce.coinbase.com/checkout/3e58a400-31e0-4fc9-b0fd-ef5e2bc5df33">Donate with Crypto</a>
        </div>
    </div>
</template>

<style lang="scss">
@import "../assets/scss/colors";
@import "../assets/scss/fonts";

#donate-outer {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    .container-inner {
        display: flex;
        flex-flow: column nowrap;
        flex: 0 0 auto;
        align-items: center;

        span, a {
            margin: 10px;

            font-family: $font-stack-main;
            font-size: 20px;
            text-align: center;
        }

        .big {
            font-size: 50px;
        }

        a {
            padding: 10px;

            background-color: white;
            color: black;

            border: 3px solid;
            border-color: $color-primary-dark;
            border-radius: 5px;

            text-decoration: none;

            transition: background-color 0.3s;

            &:hover {
                background-color: $color-primary-light;
            }
        }
    }
}
</style>
