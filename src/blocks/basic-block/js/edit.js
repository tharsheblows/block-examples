/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
// Remember, you don't need to run `npm install [whatever]` for these if this is a
// WP plugin or theme, they're already available.

/**
 * Internal dependencies
 */
import Settings from './settings';
// Import the sidebar panel.

export default function Edit( props ) {
	// This is destructuring. Basically you're saying attributes = props.attributes etc.
	const { attributes } = props;
	const { backgroundColor, textGradient, text } = attributes;

	// This gets all of the wrapper attributes for the block.
	const blockProps = useBlockProps( {
		className: 'tsb-block-examples', // An additional class to add to the block wrapper.
	} );

	// This will set the style from the user entered attributes.
	// They'll enter the attributes in the sidebar -- I usually keep everything in the sidebar
	// but that's a personal preference. Only the styles which are user entered are here,
	// the rest will be in style.scss.
	const boxStyle = {
		backgroundColor, // Shorthand for backgroundColor: backgroundColor .
	};

	// This will set the gradient for the text.
	// The non-user entered styles are in the stylesheet.
	// In React, styles are written as an object and go from eg background-image to backgroundImage
	// ie, lose the hyphen and capitalize the next letter.
	const textStyle = {
		backgroundImage: textGradient,
	};

	// The return bit is what will be rendered in the editor  after it's run through everything.
	// It needs to be in a wrapper element.
	// Add the blockProps to the wrapper element.
	// Send the props to the `Settings` component which handles the controls.
	// When you have things between {}, you can use js variables and functions.
	return (
		<div { ...blockProps }>
			<Settings { ...props } />
			<div className="tsb-block-examples__box" style={ boxStyle }>
				<div className="tsb-block-examples__text" style={ textStyle }>{ text }</div>
			</div>
		</div>
	);
}
