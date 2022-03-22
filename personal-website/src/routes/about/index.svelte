<script lang="ts">
</script>

<main class="about-wrapper">
	<!-- <div class="bio-image-wrapper"> -->
	<div class="image-wrapper">
		<img class="headshot" id="main-headshot" src="../..//" alt="nick-picture" />
	</div>
	<div class="divider" />
	<!-- </div> -->
	<section class="bio-wrapper" id="section1">
		<h2 class="bio-header-title">About</h2>
		<div class="mobile-headshot-wrapper">
			<img id="mobile-headshot" alt="headshot" />
		</div>
		<p class="section-text">
			Hi, I'm Nick. Welcome to my website.<br /><br /> This space serves as my personal playground
			to practice and experiment with new concepts I encounter in my time spent as a Web-Developer.
			This page is built from the ground up, with no help from a website builder, using HTML, CSS
			and Javascript.<br /><br />I also use the site to showcase other programming projects I've
			worked on. These include professional projects, where I was part of a larger team, and
			personal projects I started and finished myself.<br /><br />Lastly this site is also linked to
			to my music-production endeavors, under the moniker NHIBIT. Currently this is limited to my
			Soundcloud profile, but a dedicated NHIBIT website is in the works alongside more original
			tracks and mixes.<br /><br />
			In sync with any new programming projects or music releases, I'll be adding updates to the
			<em>Recent</em>
			section of the site.<br /><br />
			Thanks for visiting!
		</p>
	</section>
</main>

<style lang="scss">
	@use '../../scss/global.scss' as global;
	@import '../../scss/mediaQueries.scss';

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
		grid-row: 3;
		grid-column: 8;
		margin-top: 14.5rem;
		height: 41rem;
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
		grid-row: 3;
		grid-column: 10 / span 4;
		padding-left: 2rem;
		margin-top: 14.5rem;
		@include bigScreen {
			grid-column: 10 / span 4;
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
		max-width: 32rem;
		border-radius: 10px;
		background-image: url('../../assets/nick-cool.png');
		@include desktop {
			max-width: 26rem;
		}
		@include bigScreen {
			max-width: 34.5rem;
		}
		// box-shadow: 10px 5px 5px rgb(206, 205, 205);
	}

	#mobile-headshot {
		display: none;
		background-image: url('../../assets/nick-cool.png');
		@include tablet {
			display: block;
			float: right;
			margin: 1.5rem;
			max-width: 18rem;
			border-radius: 10px;
		}
		@include mobile {
			display: block;
			float: right;
			margin: 1rem;
			max-width: 12rem;
			border-radius: 10px;
		}
	}
</style>
