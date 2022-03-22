<script lang="ts">
	import Navbar from '$lib/navbar/Navbar.svelte';
</script>

<main class="root-layout">
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
	}
</style>
