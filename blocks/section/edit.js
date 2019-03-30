/**
 * Edit
 */

import classnames from 'classnames';

import BackgroundTypeControl from '../../components/background-type-control';
import ControlPanelControl from '../../components/control-panel-control';
import layouts from './layouts.js';
import Inboarding from './inboarding';

const { times } = lodash;
const { __ } = wp.i18n;
const { InnerBlocks, InspectorControls, ColorPalette, MediaPlaceholder } = wp.editor
const { Fragment } = wp.element
const { PanelBody, Button, Dashicon, SelectControl, RangeControl } = wp.components

const SectionBlockEdit = ({
	props,
	tab,
	setState,
	sectionBlock,
	updateBlockAttributes
}) => {

	const {
		id,
		backgroundType,
		backgroundColor,
		backgroundImageID,
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
		backgroundOverlayImageID,
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
		columns,
		layout,
		layoutTablet,
		layoutMobile,
	} = props.attributes

	if ( undefined === id || id.substr( id.length - 8 ) !== props.clientId.substr( 0, 8 ) ) {
		const blockInstanceId = `amply-blocks-section-${ props.clientId.substr( 0, 8 ) }`;
		props.setAttributes({ id: blockInstanceId });
	}

	const ALLOWED_BLOCKS = [ 'amply-blocks/section' ];

	let background, overlayBackground

	if ( 'color' === backgroundType ) {
		background = {
			background: backgroundColor
		};
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

		if ( backgroundGradientFirstColor || backgroundGradientSecondColor ) {
			background = {
				background: `${ backgroundGradientType }-gradient( ${ direction }, ${ backgroundGradientFirstColor || 'rgba( 0, 0, 0, 0 )' } ${ backgroundGradientFirstLocation }%, ${ backgroundGradientSecondColor || 'rgba( 0, 0, 0, 0 )' } ${ backgroundGradientSecondLocation }% )`
			};
		}
	}

	const style = {
		...background
	}

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
	const classes = classnames(
		props.className,
		`has-${ columns }-columns`,
		`has-desktop-${ layout }-layout`,
		`has-tablet-${ layoutTablet }-layout`,
		`has-mobile-${ layoutMobile }-layout`,
	)

	const changeBackgroundType = value => {
		props.setAttributes({ backgroundType: value });
	};
	const changeBackgroundColor = value => {
		props.setAttributes({ backgroundColor: value });
	};
	const changeBackgroundImage = value => {
		props.setAttributes({
			backgroundImageID: value.id,
			backgroundImageURL: value.url
		});
	};
	const removeBackgroundImage = () => {
		props.setAttributes({
			backgroundImageID: '',
			backgroundImageURL: ''
		});
	};
	const changeBackgroundAttachment = value => {
		props.setAttributes({ backgroundAttachment: value });
	};
	const changeBackgroundPosition = value => {
		props.setAttributes({ backgroundPosition: value });
	};
	const changeBackgroundRepeat = value => {
		props.setAttributes({ backgroundRepeat: value });
	};
	const changeBackgroundSize = value => {
		props.setAttributes({ backgroundSize: value });
	};
	const changeBackgroundGradientType = value => {
		props.setAttributes({ backgroundGradientType: value });
	};
	const changeBackgroundGradientAngle = value => {
		props.setAttributes({ backgroundGradientAngle: value });
	};
	const changeBackgroundGradientPosition = value => {
		props.setAttributes({ backgroundGradientPosition: value });
	};
	const changeBackgroundGradientFirstColor = value => {
		props.setAttributes({ backgroundGradientFirstColor: value });
	};
	const changeBackgroundGradientFirstLocation = value => {
		props.setAttributes({ backgroundGradientFirstLocation: value });
	};
	const changeBackgroundGradientSecondColor = value => {
		props.setAttributes({ backgroundGradientSecondColor: value });
	};
	const changeBackgroundGradientSecondLocation = value => {
		props.setAttributes({ backgroundGradientSecondLocation: value });
	};
	const changeBackgroundOverlayType = value => {
		props.setAttributes({ backgroundOverlayType: value });
	};
	const changeBackgroundOverlayOpacity = value => {
		props.setAttributes({ backgroundOverlayOpacity: value });
	};
	const changeBackgroundOverlayColor = value => {
		props.setAttributes({ backgroundOverlayColor: value });
	};
	const changeBackgroundOverlayImage = value => {
		props.setAttributes({
			backgroundOverlayImageID: value.id,
			backgroundOverlayImageURL: value.url
		});
	};
	const removeBackgroundOverlayImage = () => {
		props.setAttributes({
			backgroundOverlayImageID: '',
			backgroundOverlayImageURL: ''
		});
	};
	const changeBackgroundOverlayAttachment = value => {
		props.setAttributes({ backgroundOverlayAttachment: value });
	};
	const changeBackgroundOverlayPosition = value => {
		props.setAttributes({ backgroundOverlayPosition: value });
	};
	const changeBackgroundOverlayRepeat = value => {
		props.setAttributes({ backgroundOverlayRepeat: value });
	};
	const changeBackgroundOverlaySize = value => {
		props.setAttributes({ backgroundOverlaySize: value });
	};
	const changeBackgroundOverlayGradientType = value => {
		props.setAttributes({ backgroundOverlayGradientType: value });
	};
	const changeBackgroundOverlayGradientAngle = value => {
		props.setAttributes({ backgroundOverlayGradientAngle: value });
	};
	const changeBackgroundOverlayGradientPosition = value => {
		props.setAttributes({ backgroundOverlayGradientPosition: value });
	};
	const changeBackgroundOverlayGradientFirstColor = value => {
		props.setAttributes({ backgroundOverlayGradientFirstColor: value });
	};
	const changeBackgroundOverlayGradientFirstLocation = value => {
		props.setAttributes({ backgroundOverlayGradientFirstLocation: value });
	};
	const changeBackgroundOverlayGradientSecondColor = value => {
		props.setAttributes({ backgroundOverlayGradientSecondColor: value });
	};
	const changeBackgroundOverlayGradientSecondLocation = value => {
		props.setAttributes({ backgroundOverlayGradientSecondLocation: value });
	};
	const setupColumns = ( columns, layout ) => {
		if ( 1 >= columns ) {
			props.setAttributes({
				columns,
				layout,
				layoutTablet: 'equal',
				layoutMobile: 'equal'
			});
		} else {
			props.setAttributes({
				columns,
				layout,
				layoutTablet: 'equal',
				layoutMobile: 'collapsedRows'
			});
		}
	};
	const updateColumnsWidth = ( columns, layout ) => {
		( sectionBlock.innerBlocks ).map( ( innerBlock, i ) => {
			updateBlockAttributes( innerBlock.clientId, {
				columnWidth: parseFloat( layouts[columns][layout][i])
			});
		});
	};
	const changeColumns = value => {
		if ( 6 >= value ) {
			props.setAttributes({
				columns: value,
				layout: 'equal',
				layoutTablet: 'equal',
				layoutMobile: 'collapsedRows'
			});
			updateColumnsWidth( value, 'equal' );
		}

		if ( 6 < value ) {
			props.setAttributes({
				columns: 6,
				layout: 'equal',
				layoutTablet: 'equal',
				layoutMobile: 'collapsedRows'
			});
			updateColumnsWidth( 6, 'equal' );
		}

		if ( 1 >= value ) {
			props.setAttributes({
				columns: 1,
				layout: 'equal',
				layoutTablet: 'equal',
				layoutMobile: 'equal'
			});
			updateColumnsWidth( 1, 'equal' );
		}
	};

	const getColumnsTemplate = columns => {
		return times( columns, i => [ 'amply-blocks/section-column', { columnWidth: parseFloat( layouts[columns][layout][i]) } ]);
	};

	if ( ! columns ) {
		return (
			<Inboarding setupColumns={ setupColumns } />
		);
	}

	return (

		<Fragment>

			<InspectorControls>

				<PanelBody className="amply-blocks-inspector-header-tabs">
					<Button
						className={ classnames(
							'header-tab',
							{ 'is-selected': 'layout' === tab }
						)}
						onClick={ () => setState({ tab: 'layout' }) }
					>
						<span>
							<Dashicon icon="editor-table"/>
							{ __( 'Layout' ) }
						</span>
					</Button>

					<Button
						className={ classnames(
							'header-tab',
							{ 'is-selected': 'style' === tab }
						)}
						onClick={ () => setState({ tab: 'style' }) }
					>
						<span>
							<Dashicon icon="admin-customizer"/>
							{ __( 'Style' ) }
						</span>
					</Button>

					<Button
						className={ classnames(
							'header-tab',
							{ 'is-selected': 'advanced' === tab }
						)}
						onClick={ () => setState({ tab: 'advanced' }) }
					>
						<span>
							<Dashicon icon="admin-generic"/>
							{ __( 'Advanced' ) }
						</span>
					</Button>
				</PanelBody>

				{ 'layout' === tab && (

					<Fragment>
		
						<PanelBody title={ __( 'Columns & Layout' ) }>

							<RangeControl
								label={ __( 'Columns' ) }
								value={ columns }
								onChange={ changeColumns }
								min={ 1 }
								max={ 6 }
							/>

						</PanelBody>

					</Fragment>

				) || 'style' === tab && (

					<Fragment>

						<PanelBody title={ __( 'Background Settings' ) }>

							<BackgroundTypeControl
								label={ __( 'Background Type' ) }
								backgroundType={ backgroundType }
								changeBackgroundType={ changeBackgroundType }
							/>

							{ 'color' === backgroundType && (

								<Fragment>
									<p>{ __( 'Background Color' ) }</p>
									<ColorPalette
										label={ 'Background Color' }
										value={ backgroundColor }
										onChange={ changeBackgroundColor }
									/>
								</Fragment>

							) || 'image' === backgroundType && (

								backgroundImageURL ?

									<Fragment>
										<div className="image-container">
											<div
												className="image-holder"
												style={ {
													backgroundImage: `url('${ backgroundImageURL }')`
												} }
											>
											</div>
											<div
												className="image-delete"
												onClick={ removeBackgroundImage }
											>
												<Dashicon icon="trash" />
												<span>{ __( 'Remove Image' ) }</span>
											</div>
										</div>

										<Button
											isDefault
											className="image-delete-button"
											onClick={ removeBackgroundImage }
										>
											{ __( 'Change or Remove Image' ) }
										</Button>

										<ControlPanelControl label={ 'Background Settings' }
										>
											<SelectControl
												label={ __( 'Background Attachment' ) }
												value={ backgroundAttachment }
												options={ [
													{ label: 'Scroll', value: 'scroll' },
													{ label: 'Fixed', value: 'fixed' },
													{ label: 'Local', value: 'local' }
												] }
												onChange={ changeBackgroundAttachment }
											/>

											<SelectControl
												label={ __( 'Background Position' ) }
												value={ backgroundPosition }
												options={ [
													{ label: 'Default', value: 'top left' },
													{ label: 'Top Left', value: 'top left' },
													{ label: 'Top Center', value: 'top center' },
													{ label: 'Top Right', value: 'top right' },
													{ label: 'Center Left', value: 'center left' },
													{ label: 'Center Center', value: 'center center' },
													{ label: 'Center Right', value: 'center right' },
													{ label: 'Bottom Left', value: 'bottom left' },
													{ label: 'Bottom Center', value: 'bottom center' },
													{ label: 'Bottom Right', value: 'bottom right' }
												] }
												onChange={ changeBackgroundPosition }
											/>

											<SelectControl
												label={ __( 'Background Repeat' ) }
												value={ backgroundRepeat }
												options={ [
													{ label: 'Repeat', value: 'repeat' },
													{ label: 'No-repeat', value: 'no-repeat' }
												] }
												onChange={ changeBackgroundRepeat }
											/>

											<SelectControl
												label={ __( 'Background Size' ) }
												value={ backgroundSize }
												options={ [
													{ label: 'Auto', value: 'auto' },
													{ label: 'Cover', value: 'cover' },
													{ label: 'Contain', value: 'contain' }
												] }
												onChange={ changeBackgroundSize }
											/>

										</ControlPanelControl>
									</Fragment>
									:
									<Fragment>
										<MediaPlaceholder
											icon="format-image"
											labels={ {
												title: __( 'Background Image' ),
												name: __( 'an image' )
											} }
											value={ backgroundImageID }
											onSelect={ changeBackgroundImage }
											accept="image/*"
											allowedTypes={ [ 'image' ] }
										/>
									</Fragment>

							) || 'gradient' === backgroundType && (

								<Fragment>
									<SelectControl
										label={ __( 'Type' ) }
										value={ backgroundGradientType }
										options={ [
											{ label: 'Linear', value: 'linear' },
											{ label: 'Radial', value: 'radial' }
										] }
										onChange={ changeBackgroundGradientType }
									/>
									{ 'linear' === backgroundGradientType ?
										<RangeControl
											label={ __( 'Angle' ) }
											value={ backgroundGradientAngle }
											onChange={ changeBackgroundGradientAngle }
											min={ 0 }
											max={ 360 }
										/>	:
										<SelectControl
											label={ __( 'Position' ) }
											value={ backgroundGradientPosition }
											options={ [
												{ label: 'Top Left', value: 'top left' },
												{ label: 'Top Center', value: 'top center' },
												{ label: 'Top Right', value: 'top right' },
												{ label: 'Center Left', value: 'center left' },
												{ label: 'Center Center', value: 'center center' },
												{ label: 'Center Right', value: 'center right' },
												{ label: 'Bottom Left', value: 'bottom left' },
												{ label: 'Bottom Center', value: 'bottom center' },
												{ label: 'Bottom Right', value: 'bottom right' }
											] }
											onChange={ changeBackgroundGradientPosition }
										/>
									}

									<p>{ __( 'First Color' ) }</p>
									<ColorPalette
										label={ __( 'Color' ) }
										value={ backgroundGradientFirstColor }
										onChange={ changeBackgroundGradientFirstColor }
									/>
									<RangeControl
										label={ __( 'Location' ) }
										value={ backgroundGradientFirstLocation }
										onChange={ changeBackgroundGradientFirstLocation }
										min={ 0 }
										max={ 100 }
									/>

									<p>{ __( 'Second Color' ) }</p>
									<ColorPalette
										label={ __( 'Color' ) }
										value={ backgroundGradientSecondColor }
										onChange={ changeBackgroundGradientSecondColor }
									/>
									<RangeControl
										label={ __( 'Location' ) }
										value={ backgroundGradientSecondLocation }
										onChange={ changeBackgroundGradientSecondLocation }
										min={ 0 }
										max={ 100 }
									/>
								</Fragment>

							)}

						</PanelBody>

						<PanelBody title={ __( 'Background Overlay' ) } initialOpen={ false }>

							<BackgroundTypeControl
								label={ __( 'Overlay Type' ) }
								backgroundType={ backgroundOverlayType }
								changeBackgroundType={ changeBackgroundOverlayType }
							/>

							<RangeControl
								label={ __( 'Overlay Opacity' ) }
								value={ backgroundOverlayOpacity }
								onChange={ changeBackgroundOverlayOpacity }
								min={ 0 }
								max={ 100 }
							/>

							{ 'color' === backgroundOverlayType && (

								<Fragment>
									<p>{ __( 'Overlay Color' ) }</p>

									<ColorPalette
										label={ 'Overlay Color' }
										value={ backgroundOverlayColor }
										onChange={ changeBackgroundOverlayColor }
									/>
								</Fragment>

							) || 'image' === backgroundOverlayType && (

								backgroundOverlayImageURL ?

									<Fragment>
										
										<div className="image-container">
											<div
												className="image-holder"
												style={ {
													backgroundImage: `url('${ backgroundOverlayImageURL }')`
												} }
											>
											</div>
											<div
												className="image-delete"
												onClick={ removeBackgroundOverlayImage }
											>
												<Dashicon icon="trash" />
												<span>{ __( 'Remove Image' ) }</span>
											</div>
										</div>

										<Button
											isDefault
											className="image-delete-button"
											onClick={ removeBackgroundOverlayImage }
										>
											{ __( 'Change or Remove Image' ) }
										</Button>

										<ControlPanelControl label={ 'Background Settings' }>

											<SelectControl
												label={ __( 'Background Attachment' ) }
												value={ backgroundOverlayAttachment }
												options={ [
													{ label: 'Scroll', value: 'scroll' },
													{ label: 'Fixed', value: 'fixed' },
													{ label: 'Local', value: 'local' }
												] }
												onChange={ changeBackgroundOverlayAttachment }
											/>

											<SelectControl
												label={ __( 'Background Position' ) }
												value={ backgroundOverlayPosition }
												options={ [
													{ label: 'Default', value: 'top left' },
													{ label: 'Top Left', value: 'top left' },
													{ label: 'Top Center', value: 'top center' },
													{ label: 'Top Right', value: 'top right' },
													{ label: 'Center Left', value: 'center left' },
													{ label: 'Center Center', value: 'center center' },
													{ label: 'Center Right', value: 'center right' },
													{ label: 'Bottom Left', value: 'bottom left' },
													{ label: 'Bottom Center', value: 'bottom center' },
													{ label: 'Bottom Right', value: 'bottom right' }
												] }
												onChange={ changeBackgroundOverlayPosition }
											/>

											<SelectControl
												label={ __( 'Background Repeat' ) }
												value={ backgroundOverlayRepeat }
												options={ [
													{ label: 'Repeat', value: 'repeat' },
													{ label: 'No-repeat', value: 'no-repeat' }
												] }
												onChange={ changeBackgroundOverlayRepeat }
											/>

											<SelectControl
												label={ __( 'Background Size' ) }
												value={ backgroundOverlaySize }
												options={ [
													{ label: 'Auto', value: 'auto' },
													{ label: 'Cover', value: 'cover' },
													{ label: 'Contain', value: 'contain' }
												] }
												onChange={ changeBackgroundOverlaySize }
											/>

										</ControlPanelControl>

									</Fragment>

								:

								<MediaPlaceholder
									icon="format-image"
									labels={ {
										title: __( 'Background Image' ),
										name: __( 'an image' )
									} }
									value={ backgroundOverlayImageID }
									onSelect={ changeBackgroundOverlayImage }
									accept="image/*"
									allowedTypes={ [ 'image' ] }
								/>

							) || 'gradient' === backgroundOverlayType && (

								<Fragment>

									<SelectControl
										label={ __( 'Type' ) }
										value={ backgroundOverlayGradientType }
										options={ [
											{ label: 'Linear', value: 'linear' },
											{ label: 'Radial', value: 'radial' }
										] }
										onChange={ changeBackgroundOverlayGradientType }
									/>

									{ 'linear' === backgroundOverlayGradientType ?
										<RangeControl
											label={ __( 'Angle' ) }
											value={ backgroundOverlayGradientAngle }
											onChange={ changeBackgroundOverlayGradientAngle }
											min={ 0 }
											max={ 360 }
										/>	:
										<SelectControl
											label={ __( 'Position' ) }
											value={ backgroundOverlayGradientPosition }
											options={ [
												{ label: 'Top Left', value: 'top left' },
												{ label: 'Top Center', value: 'top center' },
												{ label: 'Top Right', value: 'top right' },
												{ label: 'Center Left', value: 'center left' },
												{ label: 'Center Center', value: 'center center' },
												{ label: 'Center Right', value: 'center right' },
												{ label: 'Bottom Left', value: 'bottom left' },
												{ label: 'Bottom Center', value: 'bottom center' },
												{ label: 'Bottom Right', value: 'bottom right' }
											] }
											onChange={ changeBackgroundOverlayGradientPosition }
										/>
									}

									<p>{ __( 'First Color' ) }</p>
									<ColorPalette
										label={ __( 'Color' ) }
										value={ backgroundOverlayGradientFirstColor }
										onChange={ changeBackgroundOverlayGradientFirstColor }
									/>
									<RangeControl
										label={ __( 'Location' ) }
										value={ backgroundOverlayGradientFirstLocation }
										onChange={ changeBackgroundOverlayGradientFirstLocation }
										min={ 0 }
										max={ 100 }
									/>

									<p>{ __( 'Second Color' ) }</p>

									<ColorPalette
										label={ __( 'Color' ) }
										value={ backgroundOverlayGradientSecondColor }
										onChange={ changeBackgroundOverlayGradientSecondColor }
									/>

									<RangeControl
										label={ __( 'Location' ) }
										value={ backgroundOverlayGradientSecondLocation }
										onChange={ changeBackgroundOverlayGradientSecondLocation }
										min={ 0 }
										max={ 100 }
									/>

								</Fragment>
								
							)}

						</PanelBody>

					</Fragment>

				) || 'advanced' === tab && (

					<Fragment>
						<h1>tab = advanced</h1>
					</Fragment>

				)}

			</InspectorControls>

			<div className={ classes } style={ style }>

				<div className="amply-blocks-overlay"	style={ overlayStyle }></div>

				<div className="innerblocks-wrap">

					<InnerBlocks
						allowedBlocks={ ALLOWED_BLOCKS }
						template={ getColumnsTemplate( columns ) }
						templateLock="all"
					/>

				</div>

			</div>

		</Fragment>

	)

}

export default SectionBlockEdit
