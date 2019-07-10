<template>
	<header>
		<div class="container">
			<div class="logo">
				<router-link to="/">
					<img src="../assets/images/logo.svg" alt="logo">
				</router-link>
			</div>
			<nav>
				<ul class="nav-menu">
					<li>
						<router-link to="/" v-html="`web hosting`">
						</router-link>
					</li>
					<li>
						<div class="promotion">
							<p v-html="`on sale`"></p>
						</div>
						<router-link to="/" v-html="`cloud hosting`"></router-link>
					</li>
					<li>
						<router-link to="/" v-html="`vps hosting`"></router-link>
					</li>
					<li>
						<router-link to="/" v-html="`	domain checker`"></router-link>
					</li>
					<li>
						<router-link to="/" v-html="`website builder`"></router-link>
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
	header {
		padding: 50px 0;
	}

	.logo {
		display: inline-block;

		img {
			border: none;
		}
	}

	nav {
		float: right;
	}

	.nav-menu {
		@include flex(space-between, initial);
		li {
			padding-right: 20px;
			position: relative;
			&:last-of-type {
				padding-right: 0;
			}
			&:hover {
				@include opacity(0.6);
				transition: opacity 0.5s;
			}
			a {
				@include font($font, 16px, $white);
				text-decoration: none;
				text-transform: uppercase;
			}
		}
		.promotion {
			position: absolute;
			top: -18px;
			text-transform: uppercase;
			@include font($font, 12px, $yellow);
		}
	}


</style>