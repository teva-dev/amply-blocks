/**
 * Block dependencies
 */
import icon from './icon';

import sectionColumnBlockAttributes from './attributes';
import SectionColumnBlockEdit from './edit';
import SectionColumnBlockSave from './save';

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
	'amply-blocks/section-column',
	{
		'title': __('section column'),
		category: 'common',
		icon: {
			background: 'rgba(254, 243, 224, 0.52)',
			color: 'rgba(255, 0, 0)',
			src: icon,
		},
		supports: {
			inserter: false,
			reusable: false,
			html: false
		},
		attributes: sectionColumnBlockAttributes,

		edit: compose([

			withDispatch( ( dispatch ) => {
				const { updateBlockAttributes } = dispatch( 'core/editor' );
	
				return {
					updateBlockAttributes
				};
			}),
	
			withSelect( ( select, props ) => {

				const { clientId } = props;
				const { getBlock, getAdjacentBlockClientId, getBlockRootClientId } = select( 'core/editor' );

				const adjacentBlockClientId = getAdjacentBlockClientId( clientId );
				const adjacentBlock = getBlock( adjacentBlockClientId );
				const parentClientId = getBlockRootClientId( clientId );
				const parentBlock = getBlock( parentClientId );
	
				return {
					adjacentBlockClientId,
					adjacentBlock,
					parentClientId,
					parentBlock,
					props
				};
			}),

			withState({
				tab: 'layout'
			}),

		])(SectionColumnBlockEdit),

		save: SectionColumnBlockSave,
	}
);