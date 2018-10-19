<template>
    <div id="notfound-outer">
        <div class="container-inner">
            <span class="frowny">:(</span>
            <span>Oopsie woopsie! UwU we made a fucky wucky! A wittle fucko boingo! The code monkeys at our headquarters are working VEWY HAWD to fix this!</span>
            <span class="err">If you'd like to know more, you can search later for this error: 404_PAGE_NOT_FOUND</span>
        </div>
    </div>
</template>

<style lang="scss">
@import "../assets/scss/fonts";

#notfound-outer {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    background-color: #2067b2;
    color: white;

    border-radius: 10px;

    .container-inner {
        display: flex;
        flex-flow: column nowrap;
        flex: 0 0 auto;

        min-width: 600px;
        width: 30%;

        span {
            font-family: $font-stack-err;
            font-size: 30px;
        }

        .frowny {
            font-size: 150px;
            margin-bottom: 20px;
        }

        .err {
            font-size: 15px;
            margin-top: 20px;
        }
    }
}
</style>
