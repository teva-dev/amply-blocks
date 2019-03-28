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
		backgroundGradientSecondLocation,
		backgroundOverlayType,
		backgroundOverlayOpacity,
		backgroundOverlayColor,
		backgroundOverlayImageURL,
		backgroundOverlayAttachment,
		backgroundOverlayPosition,
		backgroundOverlayRepeat,
		backgroundOverlaySize,
		backgroundOverlayGradientType,
		backgroundOverlayGradientAngle,
		backgroundOverlayGradientPosition,
		backgroundOverlayGradientFirstColor,
		backgroundOverlayGradientFirstLocation,
		backgroundOverlayGradientSecondColor,
		backgroundOverlayGradientSecondLocation,
	} = props.attributes;

	const classes = classnames(
		props.className
	);

	let background, overlayBackground

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

	if ( 'color' === backgroundOverlayType ) {
		overlayBackground = {
			background: backgroundOverlayColor,
			opacity: backgroundOverlayOpacity / 100
		};
	}

	if ( 'image' === backgroundOverlayType ) {
		overlayBackground = {
			backgroundImage: `url( '${ backgroundOverlayImageURL }' )`,
			backgroundAttachment: backgroundOverlayAttachment,
			backgroundPosition: backgroundOverlayPosition,
			backgroundRepeat: backgroundOverlayRepeat,
			backgroundSize: backgroundOverlaySize,
			opacity: backgroundOverlayOpacity / 100
		};
	}

	if ( 'gradient' === backgroundOverlayType ) {
		let direction;

		if ( 'linear' === backgroundOverlayGradientType ) {
			direction = `${ backgroundOverlayGradientAngle }deg`;
		} else {
			direction = `at ${ backgroundOverlayGradientPosition }`;
		}

		overlayBackground = {
			background: `${ backgroundOverlayGradientType }-gradient( ${ direction }, ${ backgroundOverlayGradientFirstColor || 'rgba( 0, 0, 0, 0 )' } ${ backgroundOverlayGradientFirstLocation }%, ${ backgroundOverlayGradientSecondColor || 'rgba( 0, 0, 0, 0 )' } ${ backgroundOverlayGradientSecondLocation }% )`,
			opacity: backgroundOverlayOpacity / 100
		};
	}

	const overlayStyle = {
		...overlayBackground
	}

	return (
		<div id={ id } className={ classes } style={ style }>

			<div className="amply-blocks-overlay"	style={ overlayStyle }></div>

			<div className="innerblocks-wrap"	>
				<InnerBlocks.Content />
			</div>

		</div>
	)

}

export default sectionBlockSave