<?php
/**
 * Example block.
 *
 * @package           tharsheblows-block-examples
 * @author            Mary (JJ) Jay
 * @copyright         2024
 * @license           GPL-2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name:       Block Examples
 * Plugin URI:        https://github.com/tharsheblows/tharsheblows-block-examples
 * Description:       Some examples of blocks.
 * Version:           0.1.1
 * Requires at least: 6.5
 * Requires PHP:      8.2
 * Author:            Mary (JJ) Jay
 * Author URI:        https://porchy.co.uk
 * Text Domain:       tharsheblows-block-examples
 * License:           GPL v2 or later
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 */

namespace Tharsheblows\Block_Examples;

use Tharsheblows\Block_Examples\Hooks;

require 'autoload.php';

define( __NAMESPACE__ . '\PLUGIN_PATH', \plugin_dir_path( __FILE__ ) );
define( __NAMESPACE__ . '\PLUGIN_URL', \plugin_dir_url( __FILE__ ) );

// Add all hooks.
Hooks::init();
