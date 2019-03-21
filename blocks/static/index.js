/**
 * Block dependencies
 */
import icon from './icon';
import './style.scss';
import './editor.scss';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register block
 */
export default registerBlockType(
	'amply/static',
	{
		title: __( 'Example - Static Block', 'amply-blocks' ),
		description: __( 'Demonstration of how to make a static call to action block.', 'amply-blocks' ),
		category: 'common',
		icon: {
			background: 'rgba(254, 243, 224, 0.52)',
			src: icon,
		},        
		keywords: [
				__( 'Banner', 'amply-blocks' ),
				__( 'CTA', 'amply-blocks' ),
				__( 'Shout Out', 'amply-blocks' ),
		],
		edit: props => {
			const { className, isSelected } = props;
			return (
				<div className={ className }>
					<h2>{ __( 'Static Call to Action', 'amply-blocks' ) }</h2>
					<p>{ __( 'This is really important!', 'amply-blocks' ) }</p>
					{
						isSelected && (
							<p className="sorry warning">{ __( '✋ Sorry! You cannot edit this block ✋', 'amply-blocks' ) }</p>
						)
					}
				</div>
			);
		},
		save: props => {
			return (
				<div>
					<h2>{ __( 'Call to Action', 'amply-blocks' ) }</h2>
					<p>{ __( 'This is really important!', 'amply-blocks' ) }</p>
				</div>
			);
		},
	},
);
