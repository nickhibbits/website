<script lang="ts">
	import Bio from '$lib/bio/Bio.svelte';

	let src = './static/nick-cool.png';
	console.log('src', src);
</script>

<main class="about-index">
	<div class="bio-wrapper">
		<Bio />
	</div>
	<div class="divider" />
	<div class="image-wrapper">
		<img class="headshot" id="main-headshot" {src} alt="nick-cool" />
	</div>
</main>

<style lang="scss">
	@use '../../scss/global.scss' as global;
	@import '../../scss/mediaQueries.scss';

	.about-index {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: 100%;
		margin: 3rem;
		@include mobile {
			display: flex;
		}
		@include tablet {
			display: flex;
		}
	}

	.bio-wrapper {
		grid-column: 1 / span 5;
		@include mobile {
			display: flex;
			flex-direction: row;
		}
		@include tablet {
			display: flex;
		}
		@include bigScreen {
			display: flex;
		}
	}

	.bio-header-title {
		@include global.font-primary;
		margin: 0;
		font-size: 5rem;
		-webkit-text-stroke: 0.7px black;
		@include tablet {
			grid-area: 1 / 1 / 3 / 3;
		}
		@include mobile {
			grid-area: 1 / 1 / 3 / 3;
		}
	}

	.divider {
		border-right: solid 1px lightgray;
		grid-column: 6;
		height: 35rem;
		@include tablet {
			display: none;
		}
		@include mobile {
			display: none;
		}
		@include desktop {
			height: 35rem;
		}
	}

	.image-wrapper {
		justify-content: flex-end;
		grid-column: 8 / span 5;
		padding-left: 2rem;
		@include bigScreen {
			grid-column: 8 / span 5;
		}
		@include tablet {
			display: none;
			width: 100%;
		}
		@include mobile {
			display: none;
			width: 100%;
		}
	}

	.headshot {
		max-width: 28rem;
		border-radius: 10px;
		margin-bottom: 3rem;
		@include desktop {
			max-width: 26rem;
		}
		@include bigScreen {
			max-width: 34.5rem;
		}
		// box-shadow: 10px 5px 5px rgb(206, 205, 205);
	}
</style>
