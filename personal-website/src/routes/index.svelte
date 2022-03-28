<script lang="ts">
	import Connect from '$lib/components/connect/Connect.svelte';
	import Logo from '$lib/components/logo/Logo.svelte';
</script>

<main class="root-index">
	<Logo />
	<div class="connect-wrapper">
		<Connect />
	</div>
</main>

<style lang="scss">
	.root-index {
		background: rgb(2, 0, 36);
		background: linear-gradient(
			180deg,
			#00a090,
			rgba(10, 99, 140, 1) 55%,
			rgba(255, 0, 54, 1) 100%
		);
		scroll-behavior: smooth;
		margin: 0;
	}

	.connect-wrapper {
		border: solid 2px green;
	}
</style>
