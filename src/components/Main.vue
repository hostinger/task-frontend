<template>
	<main>
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<div class="banner text">
						<h1>New Year Offer</h1>
						<h1><span>82% off </span>web hosting</h1>
					</div>
					<app-count-down-timer timeEnds="August 1, 2019"></app-count-down-timer>
					<button>Get started now</button>
				</div>
				<div class="col-md-6">
					<div class="banner second">
						<div class="left">
								$
						</div>
						<div class="center">
							<div class="promo">
									save 82%
							</div>
								1
						</div>
						<div class="right">
								45
								<span>/mo</span>
						</div>
					</div>
				</div>
			</div>
		</div>


	</main>
</template>

<script>
	import Timer from './elements/CountDownTimer'

	export default {
		name: "Main",
		components: {
			appCountDownTimer: Timer
		}
	}
</script>

<style scoped lang="scss">
	main{
		padding-top: 5rem;
	}
	.banner {
		color: $white;
		&.text {
			@include font($font, 20px, $white);
			h1 {
				margin-bottom: 15px;
			}
			span {
				color: $red;
			}
		}
		&.second{
			.left, .center, .right{
				display: inline-block;
				vertical-align: top;
				font-family: $font;
			}
			.left{
				font-size: 140px;
				text-align: right;
				padding-top: 50px;
			}
			.center{
				font-size: 450px;
				text-align: center;
				line-height: 0.6;
				position: relative;
				.promo{
					background-color: $red;
					@include font($font, 20px, $white);
					text-align: center;
					position: absolute;
					padding: 10px;
					top: -100px;
					left: 100px;
					text-transform: uppercase;
					&:after{
						content: '';
						border-style: solid;
						border-width: 20px 20px 0 20px;
						border-color: $red transparent transparent transparent;
						position: absolute;
						top: 32px;
						left: 47px;
					}
				}
			}
			.right{
				@extend .left;
				padding-top: 20px;
				span{
					display: block;
					font-size: 80px;
				}
			}
		}

	}

	button {
		margin-top: 30px;
		width: 300px;
		height: 50px;
		background-color: $red;
		line-height: 50px;
		text-align: center;
		cursor: pointer;
		border: none;
		border-radius: 5px;
		@include font($font, 18px, $white);
		text-transform: uppercase;
		@include opacity(0.8);
		&:hover {
			@include opacity(1);
			transition: opacity 0.5s;
		}
	}


</style>