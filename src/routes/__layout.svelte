<script lang="ts">
	import { calculateScreenSize, screenSize } from '$lib/stores/screenSizes';
	import { onMount } from 'svelte';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import NavbarMobile from '$lib/components/navbar/NavbarMobile.svelte';

	onMount(() => {
		calculateScreenSize();
	});
</script>

<main class="root-layout">
	<div class="navbar-desktop">
		<Navbar />
	</div>
	<div class="navbar-mobile">
		<NavbarMobile />
	</div>
	<slot class="content" />
</main>

<style lang="scss">
	@import '../scss/mediaQueries';

	.root-layout {
		display: block;
		background: rgb(2, 0, 36);
		background: linear-gradient(
			180deg,
			#00a090,
			rgba(10, 99, 140, 1) 55%,
			rgba(255, 0, 54, 1) 100%
		);
		scroll-behavior: smooth;
		margin: 0;
		height: 100%;
		width: 100%;
		overflow-x: scroll;
	}

	.navbar-desktop {
		position: sticky;
		top: 0;
		@include mobile {
			display: none;
		}
		@include tablet {
			display: none;
		}
	}

	.navbar-mobile {
		position: sticky;
		top: 0;
		@include desktop {
			display: none;
		}
		@include bigScreen {
			display: none;
		}
	}

	.content {
		z-index: 1;
	}
</style>
