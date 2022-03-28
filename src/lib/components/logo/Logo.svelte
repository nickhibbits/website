<script lang="ts"></script>

<main class="logo-container">
	<div class="logo-wrapper">
		<svg class="main-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1050 1050" version="1.0"
			><defs
				><clipPath id="a"
					><path
						d="M 737 210.285156 L 968 210.285156 L 968 344 L 737 344 Z M 737 210.285156"
					/></clipPath
				><clipPath id="b"
					><path
						d="M 521.347656 334 L 751 334 L 751 469 L 521.347656 469 Z M 521.347656 334"
					/></clipPath
				><clipPath id="c"
					><path
						d="M 644 281 L 968.230469 281 L 968.230469 806.792969 L 644 806.792969 Z M 644 281"
					/></clipPath
				><clipPath id="d"
					><path
						d="M 521.347656 396 L 646 396 L 646 806.792969 L 521.347656 806.792969 Z M 521.347656 396"
					/></clipPath
				><clipPath id="e"
					><path
						d="M 402 397 L 525.574219 397 L 525.574219 804.960938 L 402 804.960938 Z M 402 397"
					/></clipPath
				><clipPath id="f"
					><path
						d="M 82 212.003906 L 298 212.003906 L 298 337 L 82 337 Z M 82 212.003906"
					/></clipPath
				><clipPath id="g"
					><path d="M 303 339 L 525.574219 339 L 525.574219 469 L 303 469 Z M 303 339" /></clipPath
				><clipPath id="h"
					><path
						d="M 81.742188 283 L 404 283 L 404 804.960938 L 81.742188 804.960938 Z M 81.742188 283"
					/></clipPath
				></defs
			><g clip-path="url(#a)"
				><path
					d="M 967.234375 281.808594 L 843.945312 210.285156 L 737.226562 271.792969 L 860.515625 343.320312 Z M 967.234375 281.808594"
				/></g
			><path
				d="M 860.839844 457.199219 L 737.546875 385.671875 L 627.933594 448.851562 L 751.222656 520.375 Z M 860.839844 457.199219"
			/><g clip-path="url(#b)"
				><path
					d="M 750.898438 406.496094 L 627.609375 334.972656 L 520.882812 396.484375 L 644.171875 468.011719 Z M 750.898438 406.496094"
				/></g
			><g clip-path="url(#c)"
				><path
					fill="#FFF"
					d="M 750.898438 406.496094 L 751.222656 520.375 L 860.839844 457.199219 L 860.515625 343.320312 L 967.234375 281.808594 L 968.199219 620.601562 L 861.476562 682.109375 L 861.125 558.261719 L 754.214844 619.882812 L 751.511719 621.441406 L 751.859375 745.285156 L 645.132812 806.800781 L 644.171875 468.011719 Z M 750.898438 406.496094"
				/></g
			><path
				d="M 860.515625 343.320312 L 737.226562 271.792969 L 737.546875 385.671875 L 860.839844 457.199219 Z M 860.515625 343.320312"
			/><path
				d="M 861.476562 682.109375 L 754.214844 619.882812 L 861.125 558.261719 Z M 861.476562 682.109375"
			/><g clip-path="url(#d)"
				><path
					d="M 644.171875 468.011719 L 520.882812 396.484375 L 521.84375 735.273438 L 645.132812 806.800781 Z M 644.171875 468.011719"
				/></g
			><path
				d="M 181.796875 499.890625 L 303.902344 428.851562 L 303.402344 606.050781 L 181.292969 677.089844 Z M 181.796875 499.890625"
			/><path
				d="M 175.285156 336.570312 L 297.394531 265.53125 L 425.527344 517.089844 L 303.421875 588.128906 Z M 175.285156 336.570312"
			/><g clip-path="url(#e)"
				><path
					d="M 403.476562 468.464844 L 525.578125 397.425781 L 524.625 733.917969 L 402.523438 804.960938 Z M 403.476562 468.464844"
				/></g
			><g clip-path="url(#f)"
				><path
					d="M 82.695312 283.050781 L 204.800781 212.011719 L 297.394531 265.53125 L 175.285156 336.570312 Z M 82.695312 283.050781"
				/></g
			><g clip-path="url(#g)"
				><path
					d="M 303.921875 410.925781 L 426.027344 339.882812 L 525.578125 397.425781 L 403.476562 468.464844 Z M 303.921875 410.925781"
				/></g
			><g clip-path="url(#h)"
				><path
					fill="#FFF"
					d="M 403.476562 468.464844 L 402.523438 804.960938 L 309.9375 751.445312 L 181.796875 499.890625 L 181.292969 677.089844 L 81.742188 619.550781 L 82.695312 283.050781 L 175.285156 336.570312 L 303.421875 588.128906 L 303.921875 410.925781 Z M 403.476562 468.464844"
				/></g
			></svg
		>
	</div>
</main>

<style lang="scss">
	@use '../../../scss/global.scss' as global;
	@import '../../../scss/mediaQueries.scss';

	.logo-container {
		display: flex;
		justify-content: center;
	}

	.logo-wrapper {
		display: flex;
		align-items: center;
		height: 100%;
	}

	.main-logo {
		font-family: global.$logo-font;
		font-size: 20rem;
		-webkit-text-stroke: 10px rgb(182, 182, 182);
		-webkit-animation: fadein ease 3s; /* Safari, Chrome and Opera > 12.1 */
		-moz-animation: fadein ease 3s; /* Firefox < 16 */
		-ms-animation: fadein ease 3s; /* Internet Explorer */
		-o-animation: fadein ease 3s; /* Opera < 12.1 */
		animation: fadein ease 3s;
		color: rgb(0, 0, 0);
		width: 800px;
		height: 800px;
		@include mobile {
			width: 350px;
			height: 350px;
		}

		// @include desktop {
		// 	padding: 8rem;
		// }
		// @include bigScreen {
		// 	padding-top: 10rem;
		// }
		// border: solid 2px green;
	}

	@keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	/* Firefox < 16 */
	@-moz-keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	/* Safari, Chrome and Opera > 12.1 */
	@-webkit-keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	/* Internet Explorer */
	@-ms-keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	/* Opera < 12.1 */
	@-o-keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
