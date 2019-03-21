<?php
/**
 * Plugin's bootstrap file to launch the plugin.
 *
 * @package     Amply_Blocks
 *
 * Plugin Name: Amply Blocks
 * Description: A plugin containing blocks for gutenberg editor.
 * Version:     1.0.0
 * Author:      Teva
 * Text Domain: amply-blocks
 * Domain Path: /languages
 */

namespace Amply_Blocks;

//  Exit if accessed directly.
defined('ABSPATH') || exit;

/**
 * Gets this plugin's absolute directory path.
 *
 * @since  1.0.0
 * @access private
 *
 * @return string
 */
function _get_plugin_directory() {
	return __DIR__;
}

/**
 * Gets this plugin's URL.
 *
 * @since  1.0.0
 * @access private
 *
 * @return string
 */
function _get_plugin_url() {
	static $plugin_url;

	if ( empty( $plugin_url ) ) {
		$plugin_url = plugins_url( null, __FILE__ );
	}

	return $plugin_url;
}

// Enqueue JS and CSS
include __DIR__ . '/lib/enqueue-scripts.php';

// Register meta boxes
include __DIR__ . '/lib/meta-boxes.php';

// Block Templates
include __DIR__ . '/lib/block-templates.php';

// Dynamic Blocks
include __DIR__ . '/blocks/dynamic/index.php';

