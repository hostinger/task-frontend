<template>
	<header>
		<div class="container">
			<div class="logo">
				<router-link to="/">
					<img src="../../assets/images/logo.svg" alt="logo">
				</router-link>
			</div>
			<nav>
				<ul class="nav-menu">
					<li>
						<div class="promotion">
							<p>on sale</p>
						</div>
						<router-link to="/">
							web hosting
						</router-link>
					</li>
					<li>
						<router-link to="/">
							cloud hosting
						</router-link>
					</li>
					<li>
						<router-link to="/">
							vps hosting
						</router-link>
					</li>
					<li>
						<router-link to="/">
							domain checker
						</router-link>
					</li>
					<li>
						<router-link to="/">
							website builder
						</router-link>
					</li>
				</ul>
			</nav>

		</div>
	</header>

</template>

<script>
	export default {
		name: "Header"
	}
</script>

<style scoped lang="scss">
	.logo {
		display: inline-block;
	}

	li {
		a {
			color: $white;
			text-decoration: none;
			text-transform: uppercase;
		}
	}

	nav {
		float: right;
	}

</style>