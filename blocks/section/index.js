/**
 * Block dependencies
 */
import icon from './icon';
import './style.scss';
import './editor.scss';

import sectionBlockAttributes from './attributes';
import SectionBlockEdit from './edit';
import SectionBlockSave from './save';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {	compose, withState } = wp.compose;
const { withDispatch, withSelect } = wp.data;

/**
 * Register block
 */
export default registerBlockType(
	'amply-blocks/section',
	{
		'title': __('section'),
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
			html: false
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

			withState({
				tab: 'layout',
			}),

		])(SectionBlockEdit),

		save: SectionBlockSave,
	}
);
