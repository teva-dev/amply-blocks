/**
 * Save
 */

import classnames from 'classnames'

const { InnerBlocks } = wp.editor

const sectionBlockSave = props => {

	const {
		id,
		backgroundType,
		backgroundColor,
		backgroundImageURL,
		backgroundAttachment,
		backgroundPosition,
		backgroundRepeat,
		backgroundSize,
	} = props.attributes;

	const classes = classnames(
		props.className
	);

	let background

	if ( 'color' === backgroundType ) {
		background = {
			background: backgroundColor
		}
	}

	if ( 'image' === backgroundType ) {
		background = {
			backgroundImage: `url( '${ backgroundImageURL }' )`,
			backgroundAttachment,
			backgroundPosition,
			backgroundRepeat,
			backgroundSize
		};
	}

	const style = {
		...background
	};

	return (
		<div id={ id } className={ classes } style={ style }>
			<div className="innerblocks-wrap"	>
				<InnerBlocks.Content />
			</div>
		</div>
	)

}

export default sectionBlockSave