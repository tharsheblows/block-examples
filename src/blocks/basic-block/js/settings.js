/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
// Anything wrapped in InspectorControls is added to the sidebar.
import { __ } from '@wordpress/i18n';
import {
	BaseControl, // Used for components which don't have a label prop.
	PanelBody, // Makes the open/close thingy on the sidebar.
	TextareaControl,
	ColorPalette,
	CustomGradientPicker,
} from '@wordpress/components';
// You can find all the props for Textarea and other WP components and what they look like here:
//  https://wordpress.github.io/gutenberg/?path=/docs/components-textareacontrol--docs
// (this goes to the TextareaControl) but those are generic React examples which use
// `useState()` (eg in the example for TextareaControl it's `setText()`).
//
// In WordPress to update the attributes in the block, you'd use `setAttributes()`
// with an object where the key is the attribute name and the value is the updated value.
// For our textarea, the onChange function is `handleTextarea`
// which will be run when the value in that field changes. You could just use `setAttributes()`
// like the other fields but I stuck a console.log in there so you can see how it changes
// and see another way of doing that.

// Use attributes, setAttributes and clientId from the props.
// This is destructuring the props.
export default function Settings( { attributes, setAttributes, clientId } ) {
	// We want backgroundColor, textGradient and text.
	// These are the attributes set in block.json.
	const { backgroundColor, textGradient, text } = attributes;

	const handleTextarea = ( value ) => {
		// eslint-disable-next-line no-console
		console.log( value );
		setAttributes( { text: value } );
	};

	// setAttributes is what handles updating the attributes in the block.
	// The parameter should be the attribute(s) you want to update.
	return (
		<InspectorControls>
			<PanelBody
				title={ __( 'Basic block settings', 'tharsheblows-blocks-example' ) }
			>
				<TextareaControl
					label={ __( 'The text', 'tharsheblows-blocks-example' ) }
					value={ text }
					onChange={ handleTextarea }
				/>
				<BaseControl
					label={ __( 'Background color', 'tharsheblows-block-examples' ) }
					id={ `tharsheblows-basic-block__background-${ clientId }` }
				>
					<ColorPalette
						value={ backgroundColor }
						onChange={ ( color ) => setAttributes( { backgroundColor: color } ) }
						clearable={ false }
					/>
				</BaseControl>
				<BaseControl
					label={ __( 'Text Gradient', 'tharsheblows-block-examples' ) }
					id={ `tharsheblows-basic-block__gradient-${ clientId }` }
				>
					<CustomGradientPicker
						value={ textGradient }
						onChange={ ( gradient ) => setAttributes( { textGradient: gradient } ) }
					/>
				</BaseControl>
			</PanelBody>
		</InspectorControls>
	);
}
