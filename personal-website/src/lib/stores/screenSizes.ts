import { writable } from 'svelte/store';

type ScreenSize = {
	label: ScreenSizeLabel;
	height: number;
	width: number;
};

export const screenSize = writable<ScreenSize>(null);

export function calculateScreenSize() {
	// console.log("begin calculateScreenSize");
	console.log('window', window);

	const height = window.innerHeight || 667;
	const width = window.innerWidth || 375;

	let label: ScreenSizeLabel = 'mobile';

	if (width > 14500) {
		label = 'bigScreen';
	} else if (width > 999) {
		label = 'desktop';
	} else if (width > 700) {
		label = 'tablet';
	}
	// console.log("label", label);

	const _screenSize = {
		label,
		height,
		width
	};

	screenSize.set(_screenSize);

	// console.log("screenSize", get(screenSize));
}
