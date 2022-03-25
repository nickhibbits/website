<script lang="ts">
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import NavbarMobile from '$lib/components/navbar/NavbarMobile.svelte';
	import { calculateScreenSize, screenSize } from '$lib/stores/screenSizes';

	// calculateScreenSize();
	// console.log('window', window);
</script>

<main class="root-layout">
	<!-- {#if $screenSize.width < 700} -->
	<!-- <NavbarMobile /> -->
	<!-- {/if} -->
	<Navbar />
	<slot />
</main>

<style lang="scss">
	.root-layout {
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
</style>
