<template>
	<div id="app">
		<app-background></app-background>
		<app-header></app-header>
		<router-view></router-view>
		<app-footer></app-footer>
	</div>
</template>

<script>
	import Header from './components/Header'
	import Footer from './components/Footer'
	import Background from './components/elements/Background'

	export default {
		name: 'app',
		components: {
			appHeader: Header,
			appFooter: Footer,
			appBackground: Background
		}
	}
</script>

<style lang="scss">
	#app{
		height: 100vh;
		position: relative;
	}

	@media only screen and (max-width: $mobile-xs){
		#app{
			height: 115vh;
		}
	}
	@media only screen and (max-width: $mobile) and (max-height: $mobile-sm){
		#app{
			height: 200vh;
		}
	}
</style>
