<template>
	<div id="app">
		<div class="background">
		</div>
		<app-header></app-header>
		<router-view></router-view>
		<app-footer></app-footer>
	</div>
</template>

<script>
	import Header from './components/Header'
	import Footer from './components/Footer'

	export default {
		name: 'app',
		components: {
			appHeader: Header,
			appFooter: Footer,
		}
	}
</script>

<style lang="scss">
	#app{
		height: 100vh;
		position: relative;
	}
	.background {
		background-image: url("../src/assets/images/background.jpg");
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
</style>
