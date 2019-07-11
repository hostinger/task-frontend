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
			<div class="menu-btn hide mobile-show" @click="showMenu">
				<div class="bar1"></div>
				<div class="bar2"></div>
				<div class="bar3"></div>
			</div>

		</div>
	</header>

</template>

<script>
	export default {
		name: "Header",
		methods: {
			showMenu() {
				const menu = document.querySelector(".nav-menu");
				const btn = document.querySelector(".menu-btn");
				menu.classList.toggle("show");
				btn.classList.toggle("change")
			}
		}
	}
</script>

<style scoped lang="scss">
	header {
		padding: 50px 0;
		.container{
			position: relative;
		}
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

	.menu-btn {
		position: absolute;
		right: 15px;
		top: 0px;
		text-align: center;
		cursor: pointer;
		.bar1, .bar2, .bar3 {
			width: 26px;
			height: 3px;
			background-color: $white;
			margin: 6px 0;
			transition: 0.4s;
		}
		&.change {
			.bar1 {
				transform: rotate(-45deg) translate(-8px, 5px);
			}
			.bar2 {
				opacity: 0;
			}
			.bar3 {
				transform: rotate(45deg) translate(-7px, -5px);
			}
		}
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

	@media only screen and (max-width: $mobile) {
		nav {
			float: initial;
			position: relative;
		}
		.nav-menu {
			display: none;
			width: 100%;
			background-color: $white;
			border-radius: 5px;
			position: absolute;
			z-index: 9;
			top: 20px;
			li {
				display: block;
				text-align: center;
				padding: 10px 0;
				a {
					color: $purple;
				}
			}
			.promotion {
				width: 100%;
				top: -8px;
			}
		}
	}


</style>