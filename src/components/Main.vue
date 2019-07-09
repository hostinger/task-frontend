<template>
	<main>
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<div class="banner__text">
						<h1>New Year Offer</h1>
						<h1><span v-html="`82% off `"></span>web hosting</h1>
					</div>
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
				</div>
				<div class="col-md-6">

				</div>
			</div>

		</div>
	</main>
</template>

<script>
	export default {
		name: "Main",
		data() {
			return {
				//now:Math.trunc((new Date()).getTime() / 1000),
				deadline: '2019-08-01',
				diff: '',
				deadlineInt:'',
				days: "",
				hours: "",
				minutes: "",
				seconds: ""
			}

		},
		mounted(){
			//this.timer();
			this.interval();
		},
		created(){

		},
		methods:{
			interval(){
				setInterval(() =>{
					let now = new Date().getTime();
					this.deadlineInt = new Date(this.deadline).getTime();
					this.diff = this.deadlineInt - now;
					this.days = Math.trunc(this.diff/(1000 * 60 * 60 * 24));
					this.hours = Math.trunc((this.diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
					this.minutes = Math.trunc((this.diff % (1000 * 60 * 60)) / (1000 * 60));
					this.seconds = Math.trunc((this.diff % (1000 * 60)) / 1000);
				},1000)
			}
		},


	}
</script>

<style scoped lang="scss">
	.banner {
		&__text {
			@include font($font, 25px, $white);
			span {
				color: $red;
			}
		}
	}

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