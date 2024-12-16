/*
* Custom function used to generate the output of the override.css file
*/

var generateOverride = function(params) {
	let output = '';
	
	if (params.minFontSize !== '1' || params.maxFontSize !== '1') {
		output += `
		html {
			font-size: ${params.minFontSize}rem;
			font-size: clamp(${params.minFontSize}rem, ${params.minFontSize}rem + (${params.maxFontSize} - ${params.minFontSize}) * ((100vw - 20rem) / 55), ${params.maxFontSize}rem);
		}`;
	}
	
	if (params.galleryZoom !== true) {
		output += `   
		.pswp--zoom-allowed .pswp__img {
			cursor: default !important  
		}`;
	}
	
	if (params.lazyLoadEffect === 'fadein') {
		output += ` 
		img[loading] {
			opacity: 0;
		}
		
		img.is-loaded {
			opacity: 1;
			transition: opacity 1s cubic-bezier(0.215, 0.61, 0.355, 1), transform .6s ease-out, filter .6s ease-out; 
		}`;
	}
	
	return output;
}

module.exports = generateOverride;