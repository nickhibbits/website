<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<main class="navbar-component" id="header">
	<div class="title">
		<h1
			on:click={() => {
				goto('/home');
			}}
			id="main-header"
			class="header-title"
		>
			Nick Hibbits
		</h1>
		<nav>
			<div class="nav-options-wrapper">
				<ul class="nav-options" id="nav-options">
					<a href="/about" id="about-nav-item" class="nav-link">
						<li>About</li>
					</a>
					<a href="/projects" class="nav-link">
						<li>Projects</li>
					</a>
					<a href="/connect" class="nav-link">
						<li>Connect</li>
					</a>
				</ul>
			</div>
		</nav>
	</div>
</main>

<style lang="scss">
	@import '../../../scss/global';
	@import '../../../scss/mediaQueries';

	.title {
		display: grid;
		grid-template-columns: 18rem 1fr;
		border-bottom: solid 0.5px white;
		width: 100%;
		// background: global.$primary-dark-color;
		background: rgba(2, 0, 36, 0.85);
		// border: solid 1px yellow;
	}

	.navbar-component {
		color: white;
	}

	#main-header {
		font-size: 2.5rem;
		padding: 0.5rem 1rem;
	}

	nav {
		display: flex;
		justify-content: center;
		width: 100%;
	}

	.nav-options {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		width: 100%;
		@include tablet {
			display: none;
		}
		@include mobile {
			display: none;
		}
	}

	.nav-link {
		text-decoration: none;
		color: inherit;
		@include tablet {
			display: none;
		}
		@include mobile {
			display: none;
		}
	}

	.nav-link li {
		border: none;
		position: relative;
		&:hover {
			cursor: pointer;
		}
	}

	.nav-link li::after {
		content: '';
		position: absolute;
		width: 0px;
		height: 2px;
		left: 50%;
		bottom: 0;
		background-color: white;
		transition: all ease-in-out 0.2s;
	}
	li:hover::after {
		width: 100%;
		left: 0;
	}

	.nav-options-wrapper {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		width: 100%;
		margin-bottom: 0;
		@include font-secondary;
		@include mobile {
			justify-content: flex-end;
			padding-right: 1rem;
		}
		@include tablet {
			justify-content: flex-end;
			padding-right: 1rem;
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

	ul {
		list-style-type: none;
		@include font-secondary;
	}

	.subheader {
		@include font-secondary;
		margin-top: 0.1rem;
		padding-top: 0.4rem;
		border-top: solid 1px lightgrey;
	}
</style>
