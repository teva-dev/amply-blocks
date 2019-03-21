/**
 * Block dependencies
 */
import icon from './icon';
import './style.scss';

import sectionBlockAttributes from './attributes'
import SectionBlockEdit from './edit';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {	compose } = wp.compose;

const { withDispatch, withSelect } = wp.data;

/**
 * Register block
 */
export default registerBlockType(
	'amply/block1',
	{
		'title': __('BLock1'),
		category: 'common',
		icon: {
			background: 'rgba(254, 243, 224, 0.52)',
			color: 'rgba(255, 0, 0)',
			src: icon,
		},
		keywords: [
			__( 'block' ),
		],
		supports: {
			align: [ 'wide', 'full' ], // Support only Wide and Full alignment controls
			anchor: true,
		},
		attributes: sectionBlockAttributes,

		edit: compose([

			withDispatch( ( dispatch ) => {
				const { updateBlockAttributes } = dispatch( 'core/editor' );
	
				return {
					updateBlockAttributes
				};
			}),
	
			withSelect( ( select, props ) => {
				const { clientId } = props;
				const { getBlock } = select( 'core/editor' );
				const sectionBlock = getBlock( clientId );
	
				return {
					sectionBlock,
					props
				};
			}),

		])(SectionBlockEdit),

		save() {
			return null;
		}
	}
);
