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
		backgroundGradientType,
		backgroundGradientAngle,
		backgroundGradientPosition,
		backgroundGradientFirstColor,
		backgroundGradientFirstLocation,
		backgroundGradientSecondColor,
		backgroundGradientSecondLocation
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

	if ( 'gradient' === backgroundType ) {
		let direction;

		if ( 'linear' === backgroundGradientType ) {
			direction = `${ backgroundGradientAngle }deg`;
		} else {
			direction = `at ${ backgroundGradientPosition }`;
		}

		background = {
			background: `${ backgroundGradientType }-gradient( ${ direction }, ${ backgroundGradientFirstColor || 'rgba( 0, 0, 0, 0 )' } ${ backgroundGradientFirstLocation }%, ${ backgroundGradientSecondColor || 'rgba( 0, 0, 0, 0 )' } ${ backgroundGradientSecondLocation }% )`
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