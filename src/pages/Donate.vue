<template>
    <div class="container">
        <div class="spacer"></div>
        <span class="center">The content here may be free, but the server time sure isn't!</span>
        <span class="mid">So if you could spare a dollar (or ten), you could think about helping us stay afloat...</span>
		<div class="spacer"></div>
		<div>
			<a href="https://commerce.coinbase.com/checkout/3e58a400-31e0-4fc9-b0fd-ef5e2bc5df33">
				Pay with Crypto!
			</a>
		</div>
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
            flex: 0.33 1 auto;
        }
		
		.center {
			flex: 0 1 auto;

			font-family: $font-stack-accent;
			font-size: 50px;
		}

		.mid {
			flex: 0 1 auto;
			
			font-family: $font-stack-accent;
			font-size: 30px;
		}

		.payment {
			flex: 1 1 auto;
			
			font-family: $font-stack-accent;
			font-size: 30px;
		}
    }
</style>
