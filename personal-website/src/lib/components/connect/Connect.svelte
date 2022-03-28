<script lang="ts">
	import ConnectLinks from '$lib/components/connect/ConnectLinks.svelte';
</script>

<main class="connect-component">
	<h2 class="header-title" id="connect-header-title">Connect</h2>
	<ConnectLinks />
</main>

<style lang="scss">
	@import '../../../scss/global';
	@import '../../../scss/mediaQueries';

	#connect-header-title {
		@include font-primary;
		font-size: 3rem;
		padding: 0rem;
	}
</style>
