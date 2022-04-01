<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let open = false;

	onMount(() => {
		// function closeNavMenu() {
		// 	if (open == true) {
		// 		open = false;
		// 	} else {
		// 		return;
		// 	}
		// }
		// window.addEventListener('click', () => closeNavMenu());
	});
</script>

<main class="navbar-mobile-component">
	<div class="title">
		<h1
			on:click={() => {
				goto('/');
			}}
			id="main-header"
			class="header-title"
		>
			Nick Hibbits
		</h1>
		<div class="menu-wrapper">
			<ion-icon on:click={() => (open = !open)} id="burger" size="medium" name="menu-outline" />
		</div>
	</div>
	{#if open}
		<div transition:fade class="nav-flex">
			<div class="box-1" />
			<div id="nav-options-mobile-container" class="nav-options-mobile-container box-2">
				<div id="nav-options-mobile-wrapper" class="nav-options-mobile-wrapper">
					<ul class="nav-options-mobile" id="nav-options-mobile">
						<a
							href="/about"
							on:click={() => (open = false)}
							id="about-nav-item-mobile"
							class="nav-link-mobile"
						>
							<li>About</li>
						</a>
						<a href="/projects" on:click={() => (open = false)} class="nav-link-mobile">
							<li>Projects</li>
						</a>
						<a href="/connect" on:click={() => (open = false)} class="nav-link-mobile">
							<li>Connect</li>
						</a>
					</ul>
				</div>
			</div>
		</div>
	{/if}
	<script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>
</main>

<style lang="scss">
	@import '../../../scss/global.scss';
	@import '../../../scss/mediaQueries.scss';

	.navbar-mobile-component {
		color: white;
	}

	.title {
		display: grid;
		grid-template-columns: 18rem 1fr;
		border-bottom: solid 0.5px white;
		width: 100%;
		// background: global.$primary-dark-color;
		background: rgba(2, 0, 36, 0.85);
		// border: solid 1px yellow;
	}

	.grid-filler {
		grid-column: 1;
		// background-color: rgba(2, 0, 36, 1) 0%;
	}

	.menu-wrapper {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding-right: 1.5rem;
	}

	#main-header {
		font-size: 2.5rem;
		padding: 0.5rem 1rem;
		&:hover {
			cursor: pointer;
		}
	}

	#burger {
		// display: none;
		@include tablet {
			display: flex;
			// padding-right: 4rem;
			font-size: 35px;
		}
		@include mobile {
			display: flex;
			// padding-right: 4rem;
			font-size: 35px;
		}
	}

	.header-title {
		@include font-primary;
		margin: 0;
		font-size: 5rem;
		-webkit-text-stroke: 0.7px black;
		:hover {
			cursor: pointer;
		}
	}

	.nav-options-mobile-container {
		display: none;
		// transition: ;
		@include tablet {
			display: block;
		}
		@include mobile {
			display: block;
		}
	}

	.nav-options-mobile-wrapper {
		@include tablet {
			// border: solid 0.5px white;
			background: $primary-dark-color;
			grid-column: 2;
			display: flex;
			justify-content: center;
			padding: 1rem 3rem;
			position: absolute;
			top: 61px;
			right: 0;
		}
		@include mobile {
			// border: solid 0.5px white;
			background: $primary-dark-color;
			grid-column: 2;
			display: flex;
			justify-content: center;
			padding: 1rem 3rem;
			position: absolute;
			top: 61px;
			right: 0;
			width: 8rem;
		}
	}

	.nav-flex {
		display: grid;
		grid-template-columns: 60% 40%;
	}

	.nav-options-mobile {
		padding-left: 5rem;
		@include font-secondary;
		list-style: none;
	}
	.nav-link-mobile {
		display: flex;
		text-decoration: none;
		color: white;
		// border-bottom: solid 1px white;
		height: 1rem;
		padding-bottom: 0.5rem;
		margin-bottom: 2rem;
		width: 8rem;
	}

	.nav-link-mobile li::after {
		content: '';
		position: absolute;
		width: 0px;
		height: 2px;
		left: 200%;
		bottom: 0;
		transition: all ease-in-out 0.2s;
	}

	.nav-link-mobile li:hover::after {
		width: 100%;
		left: 0;
	}
</style>
