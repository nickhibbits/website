<script lang="ts">
	import ConnectLinks from '$lib/components/connect/ConnectLinks.svelte';
</script>

<main class="connect-component">
	<div class="title-wrapper">
		<h2 class="header-title" id="connect-header-title">Connect</h2>
		<p class="subline">
			Always looking to connect! Shoot me a message below or click the icons for my socials.
		</p>
	</div>
	<form>
		<label class="message-area-title" for="message-area">Write a Message...</label>
		<textarea id="message-area">What's on your mind?</textarea>
	</form>
	<ConnectLinks />
</main>

<style lang="scss">
	@import '../../../scss/global';
	@import '../../../scss/mediaQueries';

	.connect-component {
		margin: 3rem;
	}

	.title-wrapper {
		margin-bottom: 3rem;
	}

	.subline {
		@include font-secondary;
	}

	form {
		display: flex;
		flex-direction: column;
		margin-bottom: 1rem;
	}

	.message-area-title {
		@include font-secondary;
		font-size: 1.8rem;
	}

	#message-area {
		height: 15rem;
		width: 45rem;
		border-radius: 10px;
		padding: 1rem;
		background: rgb(206, 206, 206);
		border: solid 2px black;
		@include mobile {
			width: 25rem;
		}
	}

	#connect-header-title {
		@include font-primary;
		border-bottom: solid 1px lightgrey;
		font-size: 4rem;
		margin-bottom: 1rem;
	}
</style>
