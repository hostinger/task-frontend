<template>
	<footer>
		<div class="container">
			<ul>
				<li>Guaranteed 99% Uptime</li>
				<li>Superior Speed Performance</li>
				<li>24/7 Support Chat</li>
				<li>30-Day Money-Back Guarantee</li>
			</ul>
		</div>
	</footer>

</template>

<script>
	export default {
		name: "Footer"
	}
</script>

<style scoped lang="scss">
	footer{
		padding: 10px 0;
		position: absolute;
		bottom: 0;
		@include font($font, 16px, $white);
		width: 100%;
		li{
			padding-right: 90px;
			&:before{
				content: '';
				display: inline-block;
				width: 10px;
				height: 16px;
				border: solid green;
				border-width: 0 3px 3px 0;
				transform: rotate(45deg);
				margin-right: 10px;
			}
			&:last-of-type{
				padding-right: 0;
			}
		}
	}

</style>