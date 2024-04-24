<?php
/**
 * Render basic block.
 *
 * @package tharsheblows-block-examples
 */

// Attributes come through via the $attributes variable.
$box_background  = "background-color: {$attributes['backgroundColor']}"; // @phpstan-ignore-line
$text_background = "background-image: {$attributes['textGradient']}"; // @phpstan-ignore-line
$text            = $attributes['text']; // @phpstan-ignore-line

// The following will be rendered on the front end.
?>

<div
	<?php echo get_block_wrapper_attributes( [ 'class' => 'tsb-block-examples' ] ); // phpcs:ignore ?>
>
	<div
		class="tsb-block-examples__box"
		style="<?php echo esc_attr( $box_background ); ?>"
	>
		<div
			class="tsb-block-examples__text"
			style="<?php echo esc_attr( $text_background ); ?>"
		>
			<?php echo esc_html( $text ); ?>
		</div>
	</div>
</div>
