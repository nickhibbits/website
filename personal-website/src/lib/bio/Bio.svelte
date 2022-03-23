<script lang="ts">
	let src = './static/nick-cool.png';
</script>

<main class="bio-component">
	<h2 class="bio-header-title">About</h2>
	<p class="section-text">
		Hi, I'm Nick. Welcome to my website.<br /><br /> This space serves as my personal playground to
		practice and experiment with new concepts I encounter in my time spent as a Web-Developer. This
		page is built from the ground up, with no help from a website builder, using HTML, CSS and
		Javascript.<br /><br />I also use the site to showcase other programming projects I've worked
		on. These include professional projects, where I was part of a larger team, and personal
		projects I started and finished myself.<br /><br />Lastly this site is also linked to to my
		music-production endeavors, under the moniker NHIBIT. Currently this is limited to my Soundcloud
		profile, but a dedicated NHIBIT website is in the works alongside more original tracks and
		mixes.<br /><br />
		In sync with any new programming projects or music releases, I'll be adding updates to the
		<em>Recent</em>
		section of the site.<br /><br />
		Thanks for visiting!
	</p>
	<div class="mobile-headshot-wrapper">
		<img id="mobile-headshot" {src} alt="headshot" />
	</div>
</main>

<style lang="scss">
	@use '../../scss/global.scss' as global;
	@import '../../scss/mediaQueries.scss';

	.bio-component {
		grid-column: 1 / span 7;
		grid-row: 3;
		@include global.font-secondary;
		// background-color: global.$primary-color;
		color: white;
		border-radius: 30px;
		background: transparent;
		@include tablet {
			grid-column: 1;
			display: block;
			flex-direction: column;
		}
		@include mobile {
			grid-column: 1;
			display: block;
			flex-direction: column;
			margin-top: 8rem;
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
</style>
