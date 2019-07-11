<template>
	<main>
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<div class="banner text">
						<h1>New Year Offer</h1>
						<h1><span>82% off </span>web hosting</h1>
					</div>
					<app-count-down-timer timeEnds="July 11, 2019 21:00"></app-count-down-timer>
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
	main {
		.container{
			padding-top: 50px;
		}
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
		&.second {
			.left, .center, .right {
				display: inline-block;
				vertical-align: top;
				font-family: $font;
				float: left;
			}
			.left {
				font-size: 120px;
				text-align: right;
				padding-top: 50px;
			}
			.center {
				font-size: 380px;
				line-height: 0.8;
				position: relative;
				.promo {
					background-color: $light-red;
					@include font($font, 20px, $white);
					text-align: center;
					position: absolute;
					padding: 10px;
					top: -68px;
					left: 78px;
					text-transform: uppercase;
					width: 125px;
					&:after {
						content: '';
						border-style: solid;
						border-width: 15px 15px 0 15px;
						border-color: $light-red transparent transparent transparent;
						position: absolute;
						top: 35px;
						left: 47px;
					}
				}
			}
			.right {
				@extend .left;
				padding-top: 0;
				span {
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

	@media only screen and (max-width: $mobile) {
		.banner {
			&.text {
				font-size: 16px;
			}
			&.second {
				.left {
					font-size: 80px;
				}
				.center {
					font-size: 270px;
					.promo {
						left: 39px;
					}
				}
				.right {
					span {
						font-size: 50px;
					}
				}
			}
		}
	}

	@media only screen and (max-width: $mobile-md) {
		main {
			.container{
				padding-top: 15px;
			}
			.col-md-6 {
				&:first-of-type {
					order: 2;

				}
				&:last-of-type {
					order: 1;
				}
			}
		}
		.banner {
			text-align: center;
			&.text {
				font-size: 12px;
			}
			&.second {
				.left, .center, .right {
					float: initial;
				}
				.left {
					font-size: 50px;
				}
				.center {
					font-size: 200px;
					.promo {
						left: 12px;
					}
				}
				.right {
					span {
						font-size: 30px;
					}
				}
			}
		}
		button {
			width: 100%;
		}
	}

	//IE9
	@media screen and (min-width: 0 \0) and (min-resolution: .001dpcm) {
		main {
			padding-top: 50px;
		}
		.col-md-6 {
			display: inline-block;
			width: 49%;
		}
	}


</style>