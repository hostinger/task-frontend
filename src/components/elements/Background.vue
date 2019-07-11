<template>
	<div class="background"></div>
</template>

<script>
	export default {
		name: "Background"
	}
</script>

<style scoped lang="scss">
	.background {
		background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../../../src/assets/images/background.jpg");
		background-repeat: no-repeat;
		background-size: cover;
		position: absolute;
		height: 100vh;
		width: 100%;
		display: block;
		background-position: 50%;
		transform: scaleX(-1);
		z-index: -1;
	}

	@media only screen and (max-width: $mobile-xs) {
		.background {
			height: 115vh;
		}
	}

	@media only screen and (max-width: $mobile) and (max-height: $mobile-sm) {
		.background {
			height: 200vh;
		}
	}
//IE9
	@media screen and (min-width:0\0) and (min-resolution: .001dpcm) {
		.background {
			background:url("../../../src/assets/images/background.jpg");
			background-repeat: no-repeat;
			background-size: cover;
			background-position: 50%;
		}
	}
</style>