<template>
	<div class="timer">
		<div class="item">
			<p>{{this.days}}</p>
			<span>days</span>
		</div>
		<div class="item">
			<p>{{this.hours}}</p>
			<span>hours</span>
		</div>
		<div class="item">
			<p>{{this.minutes}}</p>
			<span>minutes</span>
		</div>
		<div class="item">
			<p>{{this.seconds}}</p>
			<span>seconds</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "CountDownTimer",
		data() {
			return {
				diff: '',
				deadlineInt: '',
				days: "",
				hours: "",
				minutes: "",
				seconds: "",
				timer: ""
			}

		},
		props: {
			timeEnds: {
				type: String
			}
		},

		mounted() {
			this.countDownCounter();
		},
		methods: {
			countDays() {
				this.days = Math.floor(this.diff / (1000 * 60 * 60 * 24));
			},

			countHours() {
				this.hours = Math.floor((this.diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			},

			countMinutes() {
				this.minutes = Math.floor((this.diff % (1000 * 60 * 60)) / (1000 * 60));
			},

			countSeconds() {
				this.seconds = Math.floor((this.diff % (1000 * 60)) / 1000);
			},

			countDownCounter() {
				setInterval(() => {
					let now = new Date().getTime();
					this.deadlineInt = new Date(this.timeEnds).getTime();
					this.diff = this.deadlineInt - now;
					this.countDays();
					this.countHours();
					this.countMinutes();
					this.countSeconds()
				}, 1000);
			},

			stopTimer() {


			}

		},
	}
</script>

<style scoped lang="scss">
	.timer {
		position: relative;
		.item {
			@include font($font, 20px, $white);
			display: inline-block;
			text-align: center;
			padding-right: 30px;
			text-transform: uppercase;
			&:first-of-type {
				padding-left: 30px;
			}
			span {
				font-size: 14px;
			}
		}
		&:after, &:before {
			content: "";
			width: 20px;
			height: 20px;
			border-style: solid;
			display: inline-block;
			vertical-align: super;
		}
		&:before {
			border-width: 10px 0 10px 20px;
			border-color: transparent transparent transparent $red;
		}
		&:after {
			border-width: 10px 20px 10px 0;
			border-color: transparent $red transparent transparent;
		}
	}

</style>