<?php
/**
 * The file with all the hooks.
 *
 * @package tharsheblows-block-examples
 */

namespace Tharsheblows\Block_Examples;

use Tharsheblows\Block_Examples\Blocks;

/**
 * Class for adding hooks.
 */
class Hooks {

	/**
	 * Add all of the hooks.
	 *
	 * @return void
	 */
	public static function init(): void {

		// Register all of the blocks.
		$blocks = new Blocks();
		add_action( 'init', [ $blocks,'register_blocks' ] );
	}
}
