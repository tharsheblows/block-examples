// Your index.js file will pretty much always look like this with minor variations if
// you have a save component. Which, in general, I don't.
// The exception for me is when there are inner blocks.
// The code comments about "WordPress dependencies" and "Internal dependencies" are
// required for linting.
// Due to linting requirements, my comments are sometimes under the relevant code
// rather than above it.

/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
// Import the WordPress packages you need into this file.
// If these are WordPress packages and this is a WordPress plugin or theme,
// you don't need to run eg `npm install @wordpress/blocks` because they're already there.

/**
 * Internal dependencies
 */
import './style.scss'; // This adds the style.scss file to the editor.
import Edit from './js/edit'; // The actual edit component.
import metadata from './block.json';
// This is your code.

registerBlockType(
	// Register using the data from block.json so you don't have to remember the correct string.
	// This is helpful if you decide to rename things.
	metadata.name, {
		edit: Edit, // This is the component that will show in the editor.

	// There is no save component. In general, I stick with "dynamic blocks" ie ones
	// which render via php using the file which is in block.json under the "render" key.
	// This makes it easier to change the markup. If you change the markup of a static block,
	// it fails. There are ways around it, deprecations and the like but that's so much work.
	// And it makes it messy. Just why.
	} );
